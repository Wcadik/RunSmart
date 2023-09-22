$(document).ready(function(){
  $('.carousel__inner').slick({
      dots: false,
      speed: 560,
      // adaptiveHeight: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: '<button type="button" class="slick-next"><img src="icons/chevron-right-solid.svg"></button>',
      prevArrow: '<button type="button" class="slick-prev"><img src="icons/chevron-left-solid.svg"></button>',
      responsive: [
      {
        breakpoint: 992,
        settings: {
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      }
      }
      ]
    });
    
    // Tabs
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
      $(this)
        .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
        .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });
    // Buy
    function toggleSlide(item){
      $(item).each(function(i){
        $(this).on('click', function(e){
          e.preventDefault();
          $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
          $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
        })
      })
    };
    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');
    // Modal
    
    $('[data-modal="consultation"]').on('click', function(){
      $('.overlay, #consultation').fadeIn('fast');
    });

    $('.modal__close').on('click', function(){
      $('.overlay, #consultation, #thanks, #order').fadeOut('fast');
    });

    $('.button_mini').on('click', function(){
      $('.overlay, #order').fadeIn('fast');
    });

    $('.button_mini').each(function(i){
      $(this).on('click', function(){
        $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
        $('.overlay, #order').fadeIn('fast');
      });
    });

});