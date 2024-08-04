


document.addEventListener('DOMContentLoaded', () => {
    const logosSlide = document.querySelector('.logos-slide');
    const logos = logosSlide.innerHTML;
    logosSlide.innerHTML += logos; // Duplicate the logos
});

$(function () {
    $('.nav-btn').on('click', function () {
        $(this).toggleClass('open');
    });
});

$(window).ready(function () {
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll > 100) {
            $("#header").addClass('glass-effect');
        } else {
            $("#header").removeClass("glass-effect");
        }
    })
})