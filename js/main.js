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
  $('#nav').slicknav();
  var $slicknavMenu = jQuery('.slicknav_menu');
  $slicknavMenu.append('<span class="hiddenBg"></span>');
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



$(".slider-visual").slick({
      arrows: false,
      dots: true,
      centerMode: true,
      slidesToShow: 1,
      slidesToScroll: 1
    });

  $(".catalog-menu").find('.menu-slide').on("click",function(){
    if (!$(this).parent().hasClass('show')) {
      $(this).parent().addClass('show');
      $('.show > .menu-content').attr('data-display', 'block');
    }
    else{
      $(this).parent().removeClass('show').find('.menu-content').attr('data-display', 'none');
    }
  });
