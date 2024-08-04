const carouselInner = document.querySelector('.custom-carousel-inner');
const items = document.querySelectorAll('.custom-carousel-item');
let currentIndex = 0;
const totalItems = items.length;

function showNextSlide() {
    currentIndex = (currentIndex + 1) % totalItems;
    const offset = -currentIndex * 100;
    carouselInner.style.transform = `translateX(${offset}%)`;
}

setInterval(showNextSlide, 3000); // Change slide every 3 seconds



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