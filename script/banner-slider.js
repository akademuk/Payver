$(document).ready(function(){
    $('.banner-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        dots: true,
        arrows: false,
      
        appendDots: $('.banner-slider-dots')
    });
  });