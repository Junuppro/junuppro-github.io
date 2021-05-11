$(function(){
  $('input[type="file"], select').styler();


  $('.slider__inner').slick({
    arrows: false,
    dots:true,
    autoplay: true,
    autoplaySpeed: 1500
  });

  $('.menu__tabs .tab').on('click', function (event) {
    var id = $(this).attr('data-id');
    $('.menu__tabs').find('.tab-item').removeClass('active-tab').hide();
    $('.menu__tabs .tabs').find('.tab').removeClass('active');
    $(this).addClass('active');
    $('#' + id).addClass('active-tab').fadeIn();
    return false;
  });

  $('.header__menu-btn').on('click', function () {
    $('.header__menu-burger').slideToggle();
  });

  new WOW().init();

});