/* Выделение активной страницы */
$(document).ready(function(){

    resizeSlider();
    
  $('.menu li').each(function (){
    if(this.getElementsByTagName("a")[0].href == location.href+'#anchor_home')
      this.className = "selected";
    else if (this.getElementsByTagName("a")[0].href == location.href && this.className != 'dropdown')
      this.className = "selected";
    else
      this.className = "none";
  });

// -------Плавный скрол --------------- //

  $('a[href^="#"], a[href^="."]').click( function(){ // если в href начинается с # или ., то ловим клик
    var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href
    if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
        CloseNav();
      $('html, body').animate({ scrollTop: $(scroll_el).offset().top-85 }, 1000); // анимируем скроолинг к элементу scroll_el
    }
    return false; // выключаем стандартное действие
  });

    function CloseNav() {
        $(".navbar-collapse").stop().css({ 'height': '1px' }).removeClass('in').addClass("collapse");
        $(".navbar-toggle").stop().removeClass('collapsed');
    }
    
  function cleanSelect(hr){
    $('.menu li').each(function (){
      if(this.getElementsByTagName("a")[0].href.substr(this.getElementsByTagName("a")[0].href.lastIndexOf('#'), this.getElementsByTagName("a")[0].href.length) == hr)
        this.className = "selected";
      else
        this.className = "none";
    });
  }

    function resizeSlider(){
        if ($('html').width() < 480) {
           $('.slider4').bxSlider({
              slideWidth: 480,
              minSlides: 1,
              maxSlides: 1,
              moveSlides: 3,
              slideMargin: 0,
            });
        }
        else if ($('html').width() < 640) {
           $('.slider4').bxSlider({
              slideWidth: 320,
              minSlides: 2,
              maxSlides: 2,
              moveSlides: 3,
              slideMargin: 0,
            });
        }
        else if ($('html').width() < 768) {
           $('.slider4').bxSlider({
              slideWidth: 256,
              minSlides: 3,
              maxSlides: 3,
              moveSlides: 3,
              slideMargin: 0,
            });
        }
        else if ($('html').width() < 1024) {
           $('.slider4').bxSlider({
              slideWidth: 341,
              minSlides: 3,
              maxSlides: 3,
              moveSlides: 3,
              slideMargin: 0,
            });
        }
        else if ($('html').width() < 1280) {
           $('.slider4').bxSlider({
              slideWidth: 430,
              minSlides: 3,
              maxSlides: 3,
              moveSlides: 3,
              slideMargin: 0,
            });
        }
        else if ($('html').width() < 1366) {
           $('.slider4').bxSlider({
              slideWidth: 455,
              minSlides: 3,
              maxSlides: 3,
              moveSlides: 3,
              slideMargin: 0,
            });
        }
        else if ($('html').width() < 1680) {
           $('.slider4').bxSlider({
              slideWidth: 560,
              minSlides: 3,
              maxSlides: 3,
              moveSlides: 3,
              slideMargin: 0,
            });
        }
        else if ($('html').width() < 2500) {
           $('.slider4').bxSlider({
              slideWidth: 700,
              minSlides: 3,
              maxSlides: 3,
              moveSlides: 3,
              slideMargin: 0,
            });
        };
    }
// ----- Слайдер ----------------- //

    $( window ).resize(function() {
        if($(window).scrollTop() <= $('#about').offset().top - 110)
            $(".navbar").attr('style', 'background-color'); 
    });
    
    $(window).scroll( function(){    
        if($(window).scrollTop() >= $('#about').offset().top - 110){
            $(".navbar").attr('style', 'background-color: rgba(55, 55, 55, 0.8) !important');
            $(".fr_bg").addClass('fr_bg_small');
            $(".navbar").addClass('navbar_small');
            $(".navbar-nav").addClass('navbar-nav_small');
            $(".menu ul li a").addClass('font_size_small');
            $("#hideDr").css('visibility', 'hidden');
        }else{
            if($('.navbar-toggle').css('display') == 'none')
                $(".navbar").attr('style', 'background-color: transparent !important');
            $(".fr_bg").removeClass('fr_bg_small');
            $(".navbar").removeClass('navbar_small');
            $(".navbar-nav").removeClass('navbar-nav_small');
            $(".menu ul li a").removeClass('font_size_small');
            $("#hideDr").css('visibility', 'visible');
        }
        if($(window).scrollTop() >= $('#anchor_clients').offset().top - 110)
          cleanSelect('#anchor_clients');
        else if($(window).scrollTop() >= $('#anchor_works').offset().top - 110)
          cleanSelect('#anchor_works');
        else if($(window).scrollTop() >= $('#anchor_services').offset().top - 125)
          cleanSelect('#anchor_services');
        else
          cleanSelect('#anchor_home');
    })

  $(".preDesc").click(function(){
    $(this).next().children().children().click();
    $(".bx-prev").hide();
    $(".bx-next").hide();
  });
});
