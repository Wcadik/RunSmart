$(document).ready(function(){
    $('.carousel__inner').slick({
        dots: false,
        speed: 750,
        // adaptiveHeight: true,
        nextArrow: '<button type="button" class="slick-next"><img src="icons/chevron-right-solid.svg"></button>',
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/chevron-left-solid.svg"></button>',
        responsive: [
        {
          breakpoint: 992 ,
          settings: {
          dots: true,
          arrows: false,
          }
        }
        ]
      });
});