$(document).ready(function () {
    // Initialize filter states
    // console.log(history.state); 
    const $choices = $('.filter__choices input');
    const $infopoetriesContainer = $('.infopoetries');
    if (history.state === null) {
        $choices.prop('checked', false);
    } else {
        const stateFilters = history.state.filters;
        $choices.each(function (i, el) {
            $(el).prop('checked', stateFilters[el.name][el.id].checked);
        });
        updateGallery();
    }


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
        const newState = history.state;
        newState.filters[e.currentTarget.name][e.currentTarget.id].checked = !newState.filters[e.currentTarget.name][e.currentTarget.id].checked;
        history.pushState(newState, null);

        updateGallery();
        
    });


    // Toggle selection menu filters
    $('.filter__title').on('click', function (e) {
        // console.log($(e.currentTarget).children('.filter__choices'));
        e.stopPropagation();
        $(e.currentTarget).next('.filter__choices').toggleClass('box--open');
    });
    $('body').on('click', function () {
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
        return inclusives.length < $subchoices.length ? inclusives : [];
    };
    
    function updateGallery() {
        const topicFilter = evaluateFilters('topic');
        const mediumFilter = evaluateFilters('medium');
        const yearFilter = evaluateFilters('year');
        const instituteFilter = evaluateFilters('institute');
        const newFilter = [...topicFilter, ...mediumFilter, ...yearFilter, ...instituteFilter];
        const newFilterValue = newFilter.length ? `.infopoetry${newFilter.join('')}` : '*';
        // console.log(newFilter);

        $infopoetriesContainer.isotope({
            filter: newFilterValue
        });
    };
});