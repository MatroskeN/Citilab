$(document).ready(function (){
    var swiper = new Swiper('.banner-swiper', {
        slidesPerView: 'auto',
        pagination: {
            el: '.banner-pagination',
            type: 'bullets',
            clickable: true,
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
            clickable: true,
          },
      });


//modal
  $("#burger").on("click", function () {
    document.getElementById("modal").style.display = "block";
    document.getElementById("body").style.overflow = "hidden";
});

$("#xclose").on("click", function () {
    document.getElementById("modal").style.display = "none";
    document.getElementById("body").style.overflow = "visible";
});
})
