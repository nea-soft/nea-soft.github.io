/*!
 * Creative v1.0.4 (http://startbootstrap.com/template-overviews/creative)
 * Copyright 2013-2016 Start Bootstrap
 * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap/blob/gh-pages/LICENSE)
 */

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 70)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    })

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a:not(.dropdown-toggle)').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Fit Text Plugin for Main Header
    $("h1").fitText(
        1.2, {
            minFontSize: '35px',
            maxFontSize: '65px'
        }
    );

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    // Initialize and Configure Scroll Reveal Animation
    window.sr = ScrollReveal();
    sr.reveal('.sr-icons', {
        duration: 600,
        scale: 0.3,
        distance: '0px'
    }, 200);
    sr.reveal('.sr-button', {
        duration: 1000,
        delay: 200
    });
    sr.reveal('.sr-contact', {
        duration: 600,
        scale: 0.3,
        distance: '0px'
    }, 300);

    // Initialize and Configure Magnific Popup Lightbox Plugin
    $('.popup-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
        }
    });

    /* Sliders */
    $(window).load(function() {
        // The slider being synced must be initialized first

        $('#slider').flexslider({
            animation: "slide",
            controlNav: false,
            animationLoop: true,
            slideshow: true,
        });
        $('#slider-feedback').flexslider({
            animation: "slide",
            controlNav: true,
            animationLoop: true,
            slideshow: false,
            directionNav: false
        });
    });

    /* Mail */
    $(document).ready(function () {
        $('#singlebutton').on("click", function (e) {
            var name = $('#textinput').val();
            var mail = $('#email').val();
            var text = $('#textarea').val();
            if(name == '') { alert('Name is required'); return false; }
            if(mail == '') { alert('E-mail is required'); return false; }
            if(text == '') { alert('Message is required'); return false; }
            $.ajax({
                type: 'POST',
                url: "/linding/ajax/send_email/",
                data: {
                    'name': name,
                    'mail': mail,
                    'text': text
                },
                success: function (response) {
                    var data = JSON.parse(response);
                    if(data.status == 'success') {
                        alert(data.message);
                        $('#textinput').val('');
                        $('#email').val('');
                        $('#textarea').val('');
                    }else{
                        alert(data.message);
                    }
                },
                error: function error(jqXHR, textStatus) {
                    console.log('Error AJAX: ' + textStatus);
                }
            });
            return false;
        });
    });

})(jQuery); // End of use strict

$(document).scroll(function () {
    if ($('#mainNav').hasClass('affix')) {
        $('.chosee-lang').hide();
    } else if($('#mainNav').hasClass('affix-top')) {
        $('.chosee-lang').show();
    }
});
$(window).scroll(function() {
    if ($(window).scrollTop() >  100 ) {
        $('.logo').css({'width':'115px','height':'58px'});
    } else {
        // $('.logo').css({'width':'initial','height':"initial"});
    }
});

// $("#lang-menu").hover(
//     function(){
//         $(this).addClass("cls-border-lang");
//         $(this).children().eq(0).addClass("cls-borderbottom-lang");
//         $("#lang-menu ul").stop().slideToggle(100);
//     },
//     function(){
//         $(this).removeClass("cls-border-lang");
//         $(this).children().eq(0).removeClass("cls-borderbottom-lang");
//         $("#lang-menu ul").stop().slideToggle(100);
//     }
// );
/// click languages
$(document).ready(function () {

    $("#lang-menu ul li a").on("click", function(){
        //select lang and apply changes
        // let langCurrent = $('#langCurrent').text();
        let langCurrent = $('#langCurrent');
        let langSelected = $(this).text();

        $(langSelected).text(langCurrent);
        $(langCurrent).text(langSelected);
        $(langCurrent).append('<span class="caret"></span>');
    });
});

