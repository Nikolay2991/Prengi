// const hamburger = document.querySelector('.hamburger'),
//     menu = document.querySelector('.sidepanel'),
//     closeElem = document.querySelector('.sidepanel__overlay');

// hamburger.addEventListener('click', () => {
//     menu.classList.add('active');
// });

// closeElem.addEventListener('click', () => {
//     menu.classList.remove('active');
// });
$(document).ready(function(){
    $('.main-slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
    });

    $('.solution__slider').slick({
        dots: false,
        arrows: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
    });
}); 





