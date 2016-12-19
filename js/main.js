$(document).ready(function(){

  /*mobile menu*/
  var $mainMenu = jQuery('#nav');
  $('#nav').slicknav(
      {
        prependTo: '.main-header .container',
        label: ''
      }
  );
  var $slicknavMenu = jQuery('.main-header');
  $(".slicknav_btn").on("click",function(){
    if (!$slicknavMenu.hasClass('menu_show')) {
      $slicknavMenu.removeClass('search-show').addClass('menu_show').find('.slicknav_nav').attr('data-display', 'block');
    }
    else{
      $slicknavMenu.removeClass('menu_show').find('.slicknav_nav').attr('data-display', 'none');
    }
  });

  /* search block*/

  $(".search-block").find('.search-block-btn').on("click",function(){
    if (!$slicknavMenu.hasClass('search-show')) {
      $slicknavMenu.removeClass('menu_show').addClass('search-show').find('.slicknav_nav').attr('data-display', 'none');
      $slicknavMenu.find('.slicknav_btn').removeClass('slicknav_open').addClass('slicknav_collapsed');
      $slicknavMenu.find('.slicknav_nav').addClass('slicknav_hidden');
      $('.search-show > .search-block-line').attr('data-display', 'block');
    }
    else{
      $slicknavMenu.removeClass('search-show').find('.search-block-line').attr('data-display', 'none');
    }
  });

  /* slider in header*/
  $(".slider-visual-header").slick({
    arrows: false,
    dots: true,
    centerMode: true,
    slidesToShow: 1,
    infinite: false,
    slidesToScroll: 1
  });

  /* slider*/
  $(".slider-catalog").slick({
    arrows: false,
    dots: false,
    // centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false,
    responsive: [
      {
        breakpoint: 1170,
        settings: {
          dots: true,
          arrows: false,
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 1
        }
      }]
  });

  /* slider*/
  $(".slider-visual").slick({
    arrows: false,
    dots: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 1
        }
      }]
  });

  /* carusel slider*/
  $(".carusel-visual").slick({
    dots: false,
    centerMode: true,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1170,
        settings: {
          dots: true,
          arrows: true,
          slidesToShow: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          dots: true,
          arrows: false,
          slidesToShow: 1
        }
      }]
  });

  /* dropdown elements*/
  $(".catalog-menu").find('.menu-slide').on("click",function(){
    if (!$(this).parent().hasClass('show')) {
      $(this).parent().addClass('show');
      $('.show > .menu-content').attr('data-display', 'block');
    }
    else{
      $(this).parent().removeClass('show').find('.menu-content').attr('data-display', 'none');
    }
  });

});





