$(document).ready(function () {
    let viewportWidth = window.innerWidth;
    let resizeTimer;

    // Credits to Chris Coyier https://css-tricks.com/snippets/jquery/done-resizing-event/ 
    window.onresize = function (e) {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function () {
            viewportWidth = window.innerWidth;
        }, 250);
    }

    if (viewportWidth > 834) {
        $imagesBig = document.querySelectorAll('.modal img');

        $('.media img').on('click', function (ev) {
            $('body').addClass('modal--open');
            $('.modal').addClass('shown');
            $imagesBig.forEach(function (img) {
                loadImages(img);
            });
        });

        $('.close').on('click', function (ev) {
            $('body').removeClass('modal--open');
            $('.modal').removeClass('shown');
        });

        if (document.querySelector('.next') != null) {
            $('.next span').on('click', function (ev) {
                let $activeImg = $('.modal__image.shown');
                $('.modal__image').removeClass('shown');
                $activeImg.next('.modal__image').length > 0 ? $activeImg.next('.modal__image').addClass('shown') : $('.modal__image').first().addClass('shown');
            });
            $('.prev span').on('click', function (ev) {
                let $activeImg = $('.modal__image.shown');
                $('.modal__image').removeClass('shown');
                $activeImg.prev('.modal__image').length > 0 ? $activeImg.prev('.modal__image').addClass('shown') : $('.modal__image').last().addClass('shown');
            });
        }
    }

});

var loadImages = function (image) {
    if (image.getAttribute('data-src') != null) {
        image.setAttribute('src', image.getAttribute('data-src'));
        image.onload = function () {
            image.removeAttribute('data-src');
        };
    }
};