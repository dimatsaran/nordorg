$(document).ready(function(){
  /*mobile menu*/
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

  /* search block mobile*/
  $(".search-block").find('.search-block-btn').on("click",function(){
    if (!$slicknavMenu.hasClass('search-show')) {
      $slicknavMenu.removeClass('menu_show').removeClass('search-show-desktop').addClass('search-show').find('.slicknav_nav').attr('data-display', 'none');
      $slicknavMenu.find('.slicknav_btn').removeClass('slicknav_open').addClass('slicknav_collapsed');
      $slicknavMenu.find('.slicknav_nav').addClass('slicknav_hidden');
      $('.search-show > .search-block-line').attr('data-display', 'block');
    }
    else{
      $slicknavMenu.removeClass('search-show').find('.search-block-line').attr('data-display', 'none');
    }
  });

  /* search block*/
  $(".user-block").find('.search-btn').on("click",function(){
    if (!$slicknavMenu.hasClass('search-show-desktop')) {
      $slicknavMenu.removeClass('search-show').addClass('search-show-desktop');
    }
    else{
      $slicknavMenu.removeClass('search-show-desktop');
    }
  });

  /*hide search*/
  $("body").mouseup(function (e) {
    var container = $(".search-show-desktop");
    if (container.find('.search-block-line').has(e.target).length === 0){
      container.removeClass('search-show-desktop');
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
    slidesToShow: 1,
    // slidesToShow: 3,
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

  /*slide-down blocks*/
  var $catalogMenu = jQuery('.catalog-menu');
  $(".catalog-menu").find('.menu-slide').on("click",function(){
    if (!$(this).parent().hasClass('show')) {
      $catalogMenu.find('.list-menu').removeClass('show').find('.menu-content').attr('data-display', 'none');
      $(this).parent().addClass('show');
      $('.show > .menu-content').attr('data-display', 'block');
    }
    else{
      $(this).parent().removeClass('show').find('.menu-content').attr('data-display', 'none');
    }
  });

  /* dropdown text block for all blocks*/
  $(".block-desc").find('.link-more').on("click",function(){
    if (!$(this).parent().hasClass('show')) {
      $(this).parent().addClass('show');
      $('.show > .text-down').attr('data-display', 'block');
    }
    else{
      $(this).parent().removeClass('show').find('.text-down').attr('data-display', 'none');
    }
  });

  /* dropdown tabs block*/
  var $dropTabs = jQuery('.block-tabs');
  $(".block-tabs").find('.tabs-slide').on("click",function(){
    if (!$dropTabs.hasClass('show')) {
      $dropTabs.addClass('show');
      $('.show > .list-tabs').attr('data-display', 'block');
    }
    else{
      $dropTabs.removeClass('show').find('.list-tabs').attr('data-display', 'none');
    }
  });
});






