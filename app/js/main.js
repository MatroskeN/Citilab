$(document).ready(function (){
    var swiper = new Swiper('.banner-swiper', {
        slidesPerView: 'auto',
        pagination: {
            el: '.banner-pagination',
            type: 'bullets',
          },
      });
    var swiper1 = new Swiper('.popular-swiper', {
        slidesPerView: 'auto',
        pagination: {
            el: '.fraction-pagination',
            type: 'fraction',
        },
        navigation: {
            nextEl: '.next-arrow',
            prevEl: '.prew-arrow',
          },
    });
    var swiper2 = new Swiper('.review-swiper', {
        slidesPerView: 'auto',
        pagination: {
            el: '.fraction-pagination',
            type: 'fraction',
        },
        navigation: {
            nextEl: '.next-navigation',
            prevEl: '.prev-navigation',
          },
    });
    var swiper3 = new Swiper('.mbanner-swiper', {
        slidesPerView: 'auto',
        centeredSlides: true,
        pagination: {
            el: '.mbanner-pagination',
            type: 'bullets',
          },
      });
})
