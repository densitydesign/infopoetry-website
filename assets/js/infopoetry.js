$(document).ready(function () {
    // Check for consent
    let consentCache = localStorage.getItem('consentCache');
    const $consent = document.querySelector('.consent');
    if (consentCache) {
        $consent.style.display = 'none';
        if (consentCache == 'true') {
            gtag('js', new Date());
            gtag('config', 'UA-5816319-19', { 'anonymize_ip': true });
        }
    } else {
        const $consentButton = $consent.querySelector('.button--accept');
        const $optoutButton = $consent.querySelector('.button--optout');
        $consentButton.onclick = handleConsent;
        $optoutButton.onclick = handleConsent;
    }
    
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

    function handleConsent(ev) {
        let accept = ev.target.classList.contains('button--accept');
        localStorage.setItem('consentCache', JSON.stringify(accept));
        $consent.classList.add('closed');
        if (accept) {
            gtag('js', new Date());
            gtag('config', 'UA-5816319-19', { 'anonymize_ip': true });
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