$(document).ready(function () {
    // Initialize filter states
    let $choices;
    let $infopoetriesContainer;
    let resizeTimer;
    let viewportWidth = window.innerWidth;
    const $filters = $('.filter__title');

    if ($filters.length > 0) {
        setupGallery();
    }

    // Credits to Chris Coyier https://css-tricks.com/snippets/jquery/done-resizing-event/ 
    window.onresize = function (e) {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function () {
            viewportWidth = window.innerWidth;
        }, 250);
    }

    function setupGallery() {
        $choices = $('.filter__choices input');
        $infopoetriesContainer = $('.infopoetries');

        // Initialize filter states
        setupFilterStates();

        // initialize grid and add interacrions to filters
        $infopoetriesContainer.isotope({
            itemSelector: '.infopoetry',
            layoutMode: 'fitRows',
            getSortData: {
                year: '[data-year] parseInt',
                title: '.sort--title'
            },
            sortAscending: {
                year: false,
                title: true
            },
            sortBy: ['year', 'title']
        });

        $choices.on('change', function (e) {
            // console.log(e.currentTarget.id);
            // update state
            const newState = history.state ? history.state : initialState;
            const cachedFilters = JSON.parse(localStorage.getItem('cachedFilters'));

            newState.filters[e.currentTarget.name][e.currentTarget.id].checked = !newState.filters[e.currentTarget.name][e.currentTarget.id].checked;
            cachedFilters[e.currentTarget.name][e.currentTarget.id].checked = !cachedFilters[e.currentTarget.name][e.currentTarget.id].checked;

            history.pushState(newState, null);
            localStorage.setItem('cachedFilters', JSON.stringify(cachedFilters));

            updateGallery();

        });


        // Toggle selection menu filters
        $filters.on('click', function (e) {
            // console.log($(e.currentTarget).children('.filter__choices'));
            e.stopPropagation();
            if (viewportWidth > 834) {
                $(e.currentTarget).toggleClass('box--open');
                $(e.currentTarget).next('.filter__choices').toggleClass('box--open');
            } else {
                $filters.removeClass('box--open');
                $('.filter__choices').removeClass('box--open');
                $(e.currentTarget).addClass('box--open');
                $(e.currentTarget).next('.filter__choices').addClass('box--open');
            }
        });
        $('body').on('click', function () {
            $filters.removeClass('box--open');
            $('.filter__choices').removeClass('box--open');
        });
        $('.filter__choices').on('click', function (e) {
            e.stopPropagation();
        });


        // Lazy load images code - code credits: https://developer.mozilla.org/en-US/docs/Web/Apps/Progressive/Loading
        var imagesToLoad = document.querySelectorAll('img[data-src]');
        var loadImages = function (image) {
            image.setAttribute('src', image.getAttribute('data-src'));
            image.onload = function () {
                image.removeAttribute('data-src');
            };
        };

        if ('IntersectionObserver' in window) {
            var observer = new IntersectionObserver(function (items, observer) {
                items.forEach(function (item) {
                    if (item.isIntersecting) {
                        loadImages(item.target);
                        observer.unobserve(item.target);
                    }
                });
            });
            imagesToLoad.forEach(function (img) {
                observer.observe(img);
            });
        } else {
            imagesToLoad.forEach(function (img) {
                loadImages(img);
            });
        };

        // Listen to the user going back in history
        window.onpopstate = function () {
            setupFilterStates();
        };
    }

    // utils functions
    function evaluateFilters(category) {
        const $subchoices = $choices.filter(`[name="${category}"]`);
        const inclusives = [];
        $subchoices.each((i, el) => {
            if (!el.checked) {
                inclusives.push(`:not(.${el.id})`);
            }
        });

        // add astericks to filter title to show that at least one of the filter is on
        const categoryTitle = $(`#${category}`);
        const categoryText = categoryTitle.html();
        if (inclusives.length && inclusives.length < $subchoices.length) {
            categoryTitle.html(function () { return categoryText.includes('*') ? categoryText : categoryText.replace('<span', '*<span') });
        } else {
            categoryTitle.html(categoryText.replace('*', ''));
        }

        return inclusives.length < $subchoices.length ? inclusives : [];
    };

    function updateGallery() {
        const topicFilter = evaluateFilters('topic');
        const mediumFilter = evaluateFilters('medium');
        const yearFilter = evaluateFilters('year');
        const instituteFilter = evaluateFilters('institute');
        const newFilter = [...topicFilter, ...mediumFilter, ...yearFilter, ...instituteFilter];
        const newFilterValue = newFilter.length ? `.infopoetry${newFilter.join('')}` : '*';

        $infopoetriesContainer.isotope({
            filter: newFilterValue
        });
    };

    function setupFilterStates() {
        let cachedFilters = history.state ? history.state.filters : JSON.parse(localStorage.getItem('cachedFilters'));
        if (history.state) {
            cachedFilters = history.state.filters;
            localStorage.setItem('cachedFilters', JSON.stringify(history.state.filters));
        } else {
            cachedFilters = JSON.parse(localStorage.getItem('cachedFilters'));
            let initiateHistory = initialState;
            initiateHistory.filters = cachedFilters;
            history.pushState(initiateHistory, null);
        }
        
        $choices.each(function (i, el) {
            $(el).prop('checked', cachedFilters[el.name][el.id].checked);
        });   
        updateGallery();
    }
});