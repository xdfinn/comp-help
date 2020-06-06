$(function () {

  $('.slider-wrapper').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    dotsClass: 'slick-dots'
  });

  $('.from-blog-slider').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    prevArrow: $('.blog-prev'),
    nextArrow: $('.blog-next'),
    responsive: [
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      }
    ]
  });

  new WOW().init();

  $('.mob-menu').on('click', function () {
    $('.menu-links').slideToggle();
  });


  // $('.header__btn-menu').on('click', function () {
  //   $('.header__box').toggleClass('active');
  // });

});