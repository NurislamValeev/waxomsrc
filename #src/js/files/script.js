//==================ДЛЯ АНИМАЦИИ НАЖАТИЯ БУРГЕPА==================
$("#burger").click(function () {
  $(".icon").toggleClass("close");
});

$(document).ready(function () {
  $(".intro-slick").slick({
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 800,
    dots: true,
    touchThreshold: 10,
    fade: true,
    cssEase: "linear",
  });
});
//================================================================
$(document).ready(function () {
  $(".recent-content").slick({
    autoplay: false,
    speed: 350,
    arrows: true,
    dots: false,
    appendArrows: $(".dotsarrows"),
    touchThreshold: 10,
    cssEase: "ease",
    slidesToShow: 3,
    swipeToSlide: true,
    waitForAnimate: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 475,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});

//==================ДЛЯ АНИМАЦИИ НАЖАТИЯ БУРГЕPА==================

/* if ($(".wow").hasClass(".animate__animated")) {
  $(this).removeClass(".animate__animated");
  $(this).removeAttr("style");
  new WOW().init();
} */
