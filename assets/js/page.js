$(document).ready(function () {
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
});