

$(function(){

    $('.header-slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    autoplay: true,
                    autoplaySpeed: 1200,
                }
            }
        ]
    });

    $('button.navbar-toggler').click(function () {
        $('.navbar').toggleClass('navbar-open-dark');
        $('.navbar-collapse').toggleClass('d-flex justify-content-center');
    })
  
});