$(function(){
    /* ======================== *
     *     Fixed Navbar Menu    *
     * ======================== */
    if($(this).scrollTop() > 0) {
        $('.navbar').addClass('solid');
    } else {
        $('.navbar').removeClass('solid');
    }
    $(window).scroll(function() {
        // checks if window is scrolled more than 50px, adds/removes solid class
        if($(this).scrollTop() > 50) {
            $('.navbar').addClass('solid');
            if($('body').hasClass('contact')){
                $('.navbar').removeClass('bg-transparent');
                $('.navbar-brand img').attr('src','img/logo.png');
            }
        } else {
            $('.navbar').removeClass('solid');
            if($('body').hasClass('contact')){
                $('.navbar').addClass('bg-transparent');
                $('.navbar-brand img').attr('src','img/logo-dark.png');
            }
        }
    });

    jQuery('ul.navbar-nav li.dropdown').hover(function() {
        jQuery(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn();
        jQuery(this).addClass('active');
    }, function() {
        jQuery(this).find('.dropdown-menu').stop(true, true).delay(100).fadeOut();
        jQuery(this).removeClass('active');
    });

    // Add the following code if you want the name of the file appear on select
    $(".custom-file-input").on("change", function() {
        var fileName = $(this).val().split("\\").pop();
        $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
    });
});

