$(document).ready(function() {
  // Header toggle 
  $('.js-btn-toggle-list-nav').click(function(e) {
    e.preventDefault();
    console.log('1');
    if ($('.site-header').hasClass('site-header--minimal')) {
      console.log('2');
      $(this).toggleClass('is-actived');
      $('.js-site-header__nav').toggleClass('is-actived');
    }
  });
  $('#Toggle__Search').on('click', function(e){
      e.preventDefault();
      $(this).parent().find('.toggle-search').toggleClass('hidden');
      $(this).parent().find('.toggle-label').toggleClass('hidden');
    });
  $('.js-slider--sachi-supplies').slick({
    autoplay: true,
    autoplaySpeed: 2800,
    arrows: true,
    dots: false,
    infinite: true,
    pauseOnHover: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    speed: 1000,
    responsive: [
    {
      breakpoint: 1440,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    }],
    prevArrow: '<span class="c-slider__arrow c-slider__arrow--prev"><i class="ion-chevron-left"></i></span>',
    nextArrow: '<span class="c-slider__arrow c-slider__arrow--next"><i class="ion-chevron-right"></i></span>',
  });
  $('.js-slider--users').slick({
    autoplay: true,
    autoplaySpeed: 3200,
    arrows: true,
    dots: false,
    infinite: true,
    pauseOnHover: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
    {
      breakpoint: 1440,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    }],
    prevArrow: '<span class="c-slider__arrow c-slider__arrow--prev"><i class="ion-chevron-left"></i></span>',
    nextArrow: '<span class="c-slider__arrow c-slider__arrow--next"><i class="ion-chevron-right"></i></span>',
  });
  $('.js-slider--sachi-thumbnail').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    dots: false,
    infinite: true,
    pauseOnHover: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    speed: 500,
    responsive: [
    {
      breakpoint: 1440,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 5,
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    }],
    prevArrow: '<span class="c-slider__arrow c-slider__arrow--prev"><i class="ion-chevron-left"></i></span>',
    nextArrow: '<span class="c-slider__arrow c-slider__arrow--next"><i class="ion-chevron-right"></i></span>',
  });
});