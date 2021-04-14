$(document).ready(function (){
    var swiper = new Swiper('.banner-swiper', {
        slidesPerView: 'auto',
      });
    var swiper1 = new Swiper('.popular-swiper', {
        slidesPerView: 'auto',
        navigation: {
            nextEl: '.next-arrow',
            prevEl: '.prew-arrow',
          },
    });
    var swiper2 = new Swiper('.review-swiper', {
        slidesPerView: 'auto',
    });
})
