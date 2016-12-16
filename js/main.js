// (function() {
//    var _exits = [].slice.call(document.querySelectorAll('.alert-exit'));
//    _exits.forEach(function(ele) {
//       ele.addEventListener("click", function() {
//          var _parent = this.parentNode;
//          _parent.className = _parent.className + " display-none";
//       });
//    });
// })();


// $(window).scroll(function() {
//     $('.mov').each(function(){
//       var imagePos = $(this).offset().top;
//       var topOfWindow = $(window).scrollTop();
//       if (imagePos < topOfWindow+200) {
//         $(this).addClass('wobble');
//       }
//     });
//   });

$(document).ready(function(){
  var $mainMenu = jQuery('#nav');
  $('#nav').slicknav(
      {
        prependTo: '.main-header .container',
        label: ''
      }
  );
  var $slicknavMenu = jQuery('.slicknav_menu');
  // $slicknavMenu.append('<span class="hiddenBg"></span>');
  $(".slicknav_btn").on("click",function(){
    if (!$slicknavMenu.hasClass('menu_show')) {
      $slicknavMenu.addClass('menu_show').find('.slicknav_nav').css('display', 'block');
    }
    else{
      $slicknavMenu.removeClass('menu_show').find('.slicknav_nav').css('display', 'none');
    }
  });
  $(".hiddenBg").on("click",function(){
    $slicknavMenu.removeClass('menu_show').find('.slicknav_nav').css('display', 'none');
  });
});
/* slider in header*/
$(".slider-visual-header").slick({
  arrows: false,
  dots: true,
  centerMode: true,
  slidesToShow: 1,
  slidesToScroll: 1
});
/* slider*/
$(".slider-catalog").slick({
  arrows: false,
  dots: false,
  // centerMode: true,
  slidesToShow: 3,
  slidesToScroll: 1,
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
/* slider*/
$(".slider-visual").slick({
  arrows: false,
  dots: true,
  centerMode: true,
  slidesToShow: 1,
  slidesToScroll: 1,
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
