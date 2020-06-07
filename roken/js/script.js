$(document).ready(function () {
    /*============= Smooth scroll to anchor =========== */
    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
    });
    /*========== End Smooth scroll to anchor ========== */
    /*============== Service Block Slider ============= */
    $('.services-block__slider').slick({
        dots: false,
        infinite: true,
        arrows: true,
        speed: 300,
        slidesToShow: 1,
    });
    /*============ End Service Block Slider =========== */
    /*=============== Works Block Slider ============== */
    $('.works-block__slider').slick({
        dots: false,
        infinite: true,
        arrows: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 993,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 900
                }
            },
        ]
    });
    /*============= End Works Block Slider ============ */
    /*============= Customers Block Slider ============ */
    $('.customers-block__slider').slick({
        dots: false,
        infinite: true,
        arrows: true,
        speed: 300,
        slidesToShow: 6,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 601,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 401,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 700
                }
            }
        ]
    });
    /*=========== End Customers Block Slider ========== */
    /*================= Twitter Slider ================ */
    $('.social-twitter__slider').slick({
        dots: true,
        infinite: true,
        arrows: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true
    });
    /*================ End Twitter Slider ============== */
    /*============== Post Link Arrow Hover ============= */
    let flag = 0;
    $(".post-link__arrow img").hover(function(){
        // let chevronImg = $(".post-link__arrow img");
        if(flag === 0) {
            $(this).attr("src","./fonts/right-chevron-hover.svg");
            flag = 1;
        }  else if (flag === 1) {
            $(this).attr("src","./fonts/right-chevron.svg");
            flag = 0;
        }
    });
    /*============ End Post Link Arrow Hover =========== */
});