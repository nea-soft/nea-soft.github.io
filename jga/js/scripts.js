$(document).ready(function(){
  /* testimonials */
  $('.aboutus-gallery').slick({
    dots: false,
    infinite: true,
    speed: 800,
    rows: 2,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
  });
  /* guides */
  $('.guides-gallery').slick({
      dots: false,
      infinite: true,
      speed: 800,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 1000,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        }
      ]
    });

  /* show all guides */
  $('.guides-view-btn button').click(function(){
    if($('.guides-gallery').hasClass('slick-initialized')){
      $('.guides-gallery').slick("unslick");
      $('.guides-gallery').addClass("guides-gallery-all");
      $('html, body').animate({ scrollTop: $("#guides").offset().top - 80}, 300);
    } else {
      $('.guides-gallery').slick({
          dots: false,
          infinite: true,
          speed: 400,
          arrows: false,
          autoplay: true,
          autoplaySpeed: 1000,
          slidesToShow: 4,
          slidesToScroll: 1,
          responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: false
              }
            },
            {
              breakpoint: 769,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false
              }
            }
          ]
        });
      $('.guides-gallery').removeClass("guides-gallery-all");
      $('html, body').animate({ scrollTop: $("#guides").offset().top - 80}, 300);
    }
  });
  /* modal window */
  $('body').on('click', '.user-box-js', function() {
    var name = $(this).find('.user-name').text();
    var lang = $(this).find('.user-lang').text();
    var icon = $(this).find('.user-icon').attr('src');
    var description = $(this).find('.user-name').data('description');

    var modal = $('#modalUserInfo');
    modal.find('.modal-user-name').text(name);
    modal.find('#modal-user-lang').text(lang);
    modal.find('#modal-user-icon').attr('src', icon);
    modal.find('#modal-user-description').text(description);

    modal.modal('show');
 });

 /* anchor scroll */
 $('.anchor').click(function(){
   let scrollTo = $(this).attr('data-id');
   let scrollToAnchor = "#" + scrollTo;
   // $(scrollToAnchor).scrollTop($(scrollToAnchor).scrollTop() + 100);
   $('html, body').animate({scrollTop:$(scrollToAnchor).offset().top - 80}, 'slow');
 });
 /* header scroll */
 $(window).on("scroll", function() {
   if($(window).scrollTop() > 1) {
       $("header").addClass("header-dark");
   } else {
       //remove the background property so it comes transparent again (defined in your css)
      $("header").removeClass("header-dark");
   }
 });
 /* header slider auto */
 setInterval(function() {
   var $curr = $('#slider1 input[type=radio]:checked');
   var $next = $curr.next('input');
   if(!$next.length) $next = $('#slider1 input[type=radio]').first();
   $next.prop('checked', true);
 }, 3000);

  /* dark header on load, if not on the top */
  if($(window).scrollTop() > 1) {
      $("header").addClass("header-dark");
  } else {
     $("header").removeClass("header-dark");
  }

  let main = function() {
    $(window).scroll(function() {
        var scrollVal = $(this).scrollTop();
        if ( scrollVal >= $('header').outerHeight(true)) {
            $('.nav').css({'position':'fixed','top' :'0px'});
        } else {
            $('.nav').css({'position':'absolute','top':'auto'});
        }
    });
  }
});
/* guides */
$(document).ready(function () {
    $('#modalUserMsg1').submit( function (e) {
        let guideMsg = $('#messageModalUser1').val();
        $.ajax({
            type: 'POST',
            dataType: 'JSON',
            url: "./mail/mail.php",
            data: {
                'guideMsg': guideMsg
            },
            success: function (data) {
                console.log(data.result);
                $('#screenSuccess, #modalSuccess').fadeIn();
                $('#screenSuccess, #modalSuccess button').click(function(){
                    $('#screenSuccess, #modalSuccess').hide();
                    window.location.href = '';
                });
            },
            error: function (data) {
                console.log(data);
                $('#screenSuccess, #modalError').fadeIn();
                $('#screenSuccess, #modalError button').click(function(){
                    $('#screenSuccess, #modalError').hide();
                    window.location.href = '';
                });
            }
        });
        return false;
    });
    $('#modalUserMsg2').submit( function (e) {
        let guideMsg_2 = $('#messageModalUser2').val();
        $.ajax({
            type: 'POST',
            dataType: 'JSON',
            url: "./mail/mail_2.php",
            data: {
                'guideMsg_2': guideMsg_2
            },
            success: function (data) {
                console.log(data.result);
                $('#screenSuccess, #modalSuccess').fadeIn();
                $('#screenSuccess, #modalSuccess button').click(function(){
                    $('#screenSuccess, #modalSuccess').hide();
                    window.location.href = '';
                });
            },
            error: function (data) {
                console.log(data);
                $('#screenSuccess, #modalError').fadeIn();
                $('#screenSuccess, #modalError button').click(function(){
                    $('#screenSuccess, #modalError').hide();
                    window.location.href = '';
                });
            }
        });
        return false;
    });
    $('#modalUserMsg3').submit( function (e) {
        let guideMsg_3 = $('#messageModalUser3').val();
        $.ajax({
            type: 'POST',
            dataType: 'JSON',
            url: "./mail/mail_3.php",
            data: {
                'guideMsg_3': guideMsg_3
            },
            success: function (data) {
                console.log(data.result);
                $('#screenSuccess, #modalSuccess').fadeIn();
                $('#screenSuccess, #modalSuccess button').click(function(){
                    $('#screenSuccess, #modalSuccess').hide();
                    window.location.href = '';
                });
            },
            error: function (data) {
                console.log(data);
                $('#screenSuccess, #modalError').fadeIn();
                $('#screenSuccess, #modalError button').click(function(){
                    $('#screenSuccess, #modalError').hide();
                    window.location.href = '';
                });
            }
        });
        return false;
    });
    $('#modalUserMsg4').submit( function (e) {
        let guideMsg_4 = $('#messageModalUser4').val();
        $.ajax({
            type: 'POST',
            dataType: 'JSON',
            url: "./mail/mail_4.php",
            data: {
                'guideMsg_4': guideMsg_4
            },
            success: function (data) {
                console.log(data.result);
                $('#screenSuccess, #modalSuccess').fadeIn();
                $('#screenSuccess, #modalSuccess button').click(function(){
                    $('#screenSuccess, #modalSuccess').hide();
                    window.location.href = '';
                });
            },
            error: function (data) {
                console.log(data);
                $('#screenSuccess, #modalError').fadeIn();
                $('#screenSuccess, #modalError button').click(function(){
                    $('#screenSuccess, #modalError').hide();
                    window.location.href = '';
                });
            }
        });
        return false;
    });
    $('#modalUserMsg5').submit( function (e) {
        let guideMsg_5 = $('#messageModalUser5').val();
        $.ajax({
            type: 'POST',
            dataType: 'JSON',
            url: "./mail/mail_5.php",
            data: {
                'guideMsg_5': guideMsg_5
            },
            success: function (data) {
                console.log(data.result);
                $('#screenSuccess, #modalSuccess').fadeIn();
                $('#screenSuccess, #modalSuccess button').click(function(){
                    $('#screenSuccess, #modalSuccess').hide();
                    window.location.href = '';
                });
            },
            error: function (data) {
                console.log(data);
                $('#screenSuccess, #modalError').fadeIn();
                $('#screenSuccess, #modalError button').click(function(){
                    $('#screenSuccess, #modalError').hide();
                    window.location.href = '';
                });
            }
        });
        return false;
    });
    $('#modalUserMsg6').submit( function (e) {
        let guideMsg_6 = $('#messageModalUser6').val();
        $.ajax({
            type: 'POST',
            dataType: 'JSON',
            url: "./mail/mail_6.php",
            data: {
                'guideMsg_6': guideMsg_6
            },
            success: function (data) {
                console.log(data.result);
                $('#screenSuccess, #modalSuccess').fadeIn();
                $('#screenSuccess, #modalSuccess button').click(function(){
                    $('#screenSuccess, #modalSuccess').hide();
                    window.location.href = '';
                });
            },
            error: function (data) {
                console.log(data);
                $('#screenSuccess, #modalError').fadeIn();
                $('#screenSuccess, #modalError button').click(function(){
                    $('#screenSuccess, #modalError').hide();
                    window.location.href = '';
                });
            }
        });
        return false;
    });
    $('#modalUserMsg7').submit( function (e) {
        let guideMsg_7 = $('#messageModalUser7').val();
        $.ajax({
            type: 'POST',
            dataType: 'JSON',
            url: "./mail/mail_7.php",
            data: {
                'guideMsg_7': guideMsg_7
            },
            success: function (data) {
                console.log(data.result);
                $('#screenSuccess, #modalSuccess').fadeIn();
                $('#screenSuccess, #modalSuccess button').click(function(){
                    $('#screenSuccess, #modalSuccess').hide();
                    window.location.href = '';
                });
            },
            error: function (data) {
                console.log(data);
                $('#screenSuccess, #modalError').fadeIn();
                $('#screenSuccess, #modalError button').click(function(){
                    $('#screenSuccess, #modalError').hide();
                    window.location.href = '';
                });
            }
        });
        return false;
    });
    $('#modalUserMsg8').submit( function (e) {
        let guideMsg_8 = $('#messageModalUser8').val();
        $.ajax({
            type: 'POST',
            dataType: 'JSON',
            url: "./mail/mail_8.php",
            data: {
                'guideMsg_8': guideMsg_8
            },
            success: function (data) {
                console.log(data.result);
                $('#screenSuccess, #modalSuccess').fadeIn();
                $('#screenSuccess, #modalSuccess button').click(function(){
                    $('#screenSuccess, #modalSuccess').hide();
                    window.location.href = '';
                });
            },
            error: function (data) {
                console.log(data);
                $('#screenSuccess, #modalError').fadeIn();
                $('#screenSuccess, #modalError button').click(function(){
                    $('#screenSuccess, #modalError').hide();
                    window.location.href = '';
                });
            }
        });
        return false;
    });
    $('#modalUserMsg9').submit( function (e) {
        let guideMsg_9 = $('#messageModalUser9').val();
        $.ajax({
            type: 'POST',
            dataType: 'JSON',
            url: "./mail/mail_9.php",
            data: {
                'guideMsg_9': guideMsg_9
            },
            success: function (data) {
                console.log(data.result);
                $('#screenSuccess, #modalSuccess').fadeIn();
                $('#screenSuccess, #modalSuccess button').click(function(){
                    $('#screenSuccess, #modalSuccess').hide();
                    window.location.href = '';
                });
            },
            error: function (data) {
                console.log(data);
                $('#screenSuccess, #modalError').fadeIn();
                $('#screenSuccess, #modalError button').click(function(){
                    $('#screenSuccess, #modalError').hide();
                    window.location.href = '';
                });
            }
        });
        return false;
    });
    $('#modalUserMsg10').submit( function (e) {
        let guideMsg_10 = $('#messageModalUser10').val();
        console.log(guideMsg);
        $.ajax({
            type: 'POST',
            dataType: 'JSON',
            url: "./mail/mail_10.php",
            data: {
                'guideMsg_10': guideMsg_10
            },
            success: function (data) {
                console.log(data.result);
                $('#screenSuccess, #modalSuccess').fadeIn();
                $('#screenSuccess, #modalSuccess button').click(function(){
                    $('#screenSuccess, #modalSuccess').hide();
                    window.location.href = '';
                });
            },
            error: function (data) {
                console.log(data);
                $('#screenSuccess, #modalError').fadeIn();
                $('#screenSuccess, #modalError button').click(function(){
                    $('#screenSuccess, #modalError').hide();
                    window.location.href = '';
                });
            }
        });
        return false;
    });
    $('#modalUserMsg11').submit( function (e) {
        let guideMsg_11 = $('#messageModalUser11').val();
        $.ajax({
            type: 'POST',
            dataType: 'JSON',
            url: "./mail/mail_11.php",
            data: {
                'guideMsg_11': guideMsg_11
            },
            success: function (data) {
                console.log(data.result);
                $('#screenSuccess, #modalSuccess').fadeIn();
                $('#screenSuccess, #modalSuccess button').click(function(){
                    $('#screenSuccess, #modalSuccess').hide();
                    window.location.href = '';
                });
            },
            error: function (data) {
                console.log(data);
                $('#screenSuccess, #modalError').fadeIn();
                $('#screenSuccess, #modalError button').click(function(){
                    $('#screenSuccess, #modalError').hide();
                    window.location.href = '';
                });
            }
        });
        return false;
    });
    $('#modalUserMsg12').submit( function (e) {
        let guideMsg_12 = $('#messageModalUser12').val();
        $.ajax({
            type: 'POST',
            dataType: 'JSON',
            url: "./mail/mail_12.php",
            data: {
                'guideMsg_12': guideMsg_12
            },
            success: function (data) {
                console.log(data.result);
                $('#screenSuccess, #modalSuccess').fadeIn();
                $('#screenSuccess, #modalSuccess button').click(function(){
                    $('#screenSuccess, #modalSuccess').hide();
                    window.location.href = '';
                });
            },
            error: function (data) {
                console.log(data);
                $('#screenSuccess, #modalError').fadeIn();
                $('#screenSuccess, #modalError button').click(function(){
                    $('#screenSuccess, #modalError').hide();
                    window.location.href = '';
                });
            }
        });
        return false;
    });
    $('#modalUserMsg13').submit( function (e) {
        let guideMsg_13 = $('#messageModalUser13').val();
        $.ajax({
            type: 'POST',
            dataType: 'JSON',
            url: "./mail/mail_13.php",
            data: {
                'guideMsg_13': guideMsg_13
            },
            success: function (data) {
                console.log(data.result);
                $('#screenSuccess, #modalSuccess').fadeIn();
                $('#screenSuccess, #modalSuccess button').click(function(){
                    $('#screenSuccess, #modalSuccess').hide();
                    window.location.href = '';
                });
            },
            error: function (data) {
                console.log(data);
                $('#screenSuccess, #modalError').fadeIn();
                $('#screenSuccess, #modalError button').click(function(){
                    $('#screenSuccess, #modalError').hide();
                    window.location.href = '';
                });
            }
        });
        return false;
    });
    $('#modalUserMsg14').submit( function (e) {
        let guideMsg_14 = $('#messageModalUser14').val();
        $.ajax({
            type: 'POST',
            dataType: 'JSON',
            url: "./mail/mail_14.php",
            data: {
                'guideMsg_14': guideMsg_14
            },
            success: function (data) {
                console.log(data.result);
                $('#screenSuccess, #modalSuccess').fadeIn();
                $('#screenSuccess, #modalSuccess button').click(function(){
                    $('#screenSuccess, #modalSuccess').hide();
                    window.location.href = '';
                });
            },
            error: function (data) {
                console.log(data);
                $('#screenSuccess, #modalError').fadeIn();
                $('#screenSuccess, #modalError button').click(function(){
                    $('#screenSuccess, #modalError').hide();
                    window.location.href = '';
                });
            }
        });
        return false;
    });
    $('#modalUserMsg15').submit( function (e) {
        let guideMsg_15 = $('#messageModalUser15').val();
        $.ajax({
            type: 'POST',
            dataType: 'JSON',
            url: "./mail/mail_15.php",
            data: {
                'guideMsg_15': guideMsg_15
            },
            success: function (data) {
                console.log(data.result);
                $('#screenSuccess, #modalSuccess').fadeIn();
                $('#screenSuccess, #modalSuccess button').click(function(){
                    $('#screenSuccess, #modalSuccess').hide();
                    window.location.href = '';
                });
            },
            error: function (data) {
                console.log(data);
                $('#screenSuccess, #modalError').fadeIn();
                $('#screenSuccess, #modalError button').click(function(){
                    $('#screenSuccess, #modalError').hide();
                    window.location.href = '';
                });
            }
        });
        return false;
    });
    $('#modalUserMsg16').submit( function (e) {
        let guideMsg_16 = $('#messageModalUser16').val();
        $.ajax({
            type: 'POST',
            dataType: 'JSON',
            url: "./mail/mail_16.php",
            data: {
                'guideMsg_16': guideMsg_16
            },
            success: function (data) {
                console.log(data.result);
                $('#screenSuccess, #modalSuccess').fadeIn();
                $('#screenSuccess, #modalSuccess button').click(function(){
                    $('#screenSuccess, #modalSuccess').hide();
                    window.location.href = '';
                });
            },
            error: function (data) {
                console.log(data);
                $('#screenSuccess, #modalError').fadeIn();
                $('#screenSuccess, #modalError button').click(function(){
                    $('#screenSuccess, #modalError').hide();
                    window.location.href = '';
                });
            }
        });
        return false;
    });
    $('#modalUserMsg17').submit( function (e) {
        let guideMsg_17 = $('#messageModalUser17').val();
        $.ajax({
            type: 'POST',
            dataType: 'JSON',
            url: "./mail/mail_17.php",
            data: {
                'guideMsg_17': guideMsg_17
            },
            success: function (data) {
                console.log(data.result);
                $('#screenSuccess, #modalSuccess').fadeIn();
                $('#screenSuccess, #modalSuccess button').click(function(){
                    $('#screenSuccess, #modalSuccess').hide();
                    window.location.href = '';
                });
            },
            error: function (data) {
                console.log(data);
                $('#screenSuccess, #modalError').fadeIn();
                $('#screenSuccess, #modalError button').click(function(){
                    $('#screenSuccess, #modalError').hide();
                    window.location.href = '';
                });
            }
        });
        return false;
    });
    $('#modalUserMsg18').submit( function (e) {
        let guideMsg_18 = $('#messageModalUser18').val();
        $.ajax({
            type: 'POST',
            dataType: 'JSON',
            url: "./mail/mail_18.php",
            data: {
                'guideMsg_18': guideMsg_18
            },
            success: function (data) {
                console.log(data.result);
                $('#screenSuccess, #modalSuccess').fadeIn();
                $('#screenSuccess, #modalSuccess button').click(function(){
                    $('#screenSuccess, #modalSuccess').hide();
                    window.location.href = '';
                });
            },
            error: function (data) {
                console.log(data);
                $('#screenSuccess, #modalError').fadeIn();
                $('#screenSuccess, #modalError button').click(function(){
                    $('#screenSuccess, #modalError').hide();
                    window.location.href = '';
                });
            }
        });
        return false;
    });
    $('#modalUserMsg19').submit( function (e) {
        let guideMsg_19 = $('#messageModalUser19').val();
        $.ajax({
            type: 'POST',
            dataType: 'JSON',
            url: "./mail/mail_19.php",
            data: {
                'guideMsg_19': guideMsg_19
            },
            success: function (data) {
                console.log(data.result);
                $('#screenSuccess, #modalSuccess').fadeIn();
                $('#screenSuccess, #modalSuccess button').click(function(){
                    $('#screenSuccess, #modalSuccess').hide();
                    window.location.href = '';
                });
            },
            error: function (data) {
                console.log(data);
                $('#screenSuccess, #modalError').fadeIn();
                $('#screenSuccess, #modalError button').click(function(){
                    $('#screenSuccess, #modalError').hide();
                    window.location.href = '';
                });
            }
        });
        return false;
    });
    $('#modalUserMsg20').submit( function (e) {
        let guideMsg_20 = $('#messageModalUser20').val();
        $.ajax({
            type: 'POST',
            dataType: 'JSON',
            url: "./mail/mail_20.php",
            data: {
                'guideMsg_20': guideMsg_20
            },
            success: function (data) {
                console.log(data.result);
                $('#screenSuccess, #modalSuccess').fadeIn();
                $('#screenSuccess, #modalSuccess button').click(function(){
                    $('#screenSuccess, #modalSuccess').hide();
                    window.location.href = '';
                });
            },
            error: function (data) {
                console.log(data);
                $('#screenSuccess, #modalError').fadeIn();
                $('#screenSuccess, #modalError button').click(function(){
                    $('#screenSuccess, #modalError').hide();
                    window.location.href = '';
                });
            }
        });
        return false;
    });
    $('#modalUserMsg21').submit( function (e) {
        let guideMsg_21 = $('#messageModalUser21').val();
        $.ajax({
            type: 'POST',
            dataType: 'JSON',
            url: "./mail/mail_21.php",
            data: {
                'guideMsg_21': guideMsg_21
            },
            success: function (data) {
                console.log(data.result);
                $('#screenSuccess, #modalSuccess').fadeIn();
                $('#screenSuccess, #modalSuccess button').click(function(){
                    $('#screenSuccess, #modalSuccess').hide();
                    window.location.href = '';
                });
            },
            error: function (data) {
                console.log(data);
                $('#screenSuccess, #modalError').fadeIn();
                $('#screenSuccess, #modalError button').click(function(){
                    $('#screenSuccess, #modalError').hide();
                    window.location.href = '';
                });
            }
        });
        return false;
    });
    $('#modalUserMsg22').submit( function (e) {
        let guideMsg_22 = $('#messageModalUser22').val();
        $.ajax({
            type: 'POST',
            dataType: 'JSON',
            url: "./mail/mail_22.php",
            data: {
                'guideMsg_22': guideMsg_22
            },
            success: function (data) {
                console.log(data.result);
                $('#screenSuccess, #modalSuccess').fadeIn();
                $('#screenSuccess, #modalSuccess button').click(function(){
                    $('#screenSuccess, #modalSuccess').hide();
                    window.location.href = '';
                });
            },
            error: function (data) {
                console.log(data);
                $('#screenSuccess, #modalError').fadeIn();
                $('#screenSuccess, #modalError button').click(function(){
                    $('#screenSuccess, #modalError').hide();
                    window.location.href = '';
                });
            }
        });
        return false;
    });
});
/* contact us */
$(document).ready(function () {
   $('#contactUsForm').submit( function (e) {
       let contactFormName = $('#contactFormName').val();
       let contactFormEmail = $('#contactFormEmail').val();
       let contactFormMsg = $('#contactFormMsg').val();
       $.ajax({
           type: 'POST',
           dataType: 'JSON',
           url: "./mailContact.php",
           data: {
               'contactFormName': contactFormName,
               'contactFormEmail': contactFormEmail,
               'contactFormMsg': contactFormMsg
           },
           success: function (data) {
               console.log(data.result);
               $('#screenSuccess, #modalSuccess').fadeIn();
               $('#screenSuccess, #modalSuccess button').click(function(){
                   $('#screenSuccess, #modalSuccess').hide();
                   window.location.href = '';
               });
           },
           error: function (data) {
               console.log(data);
               $('#screenSuccess, #modalError').fadeIn();
               $('#screenSuccess, #modalError button').click(function(){
                   $('#screenSuccess, #modalError').hide();
                   window.location.href = '';
               });
           }
       });
       return false;
   });
});
