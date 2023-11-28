function portfolioInit() {
    "use strict";

    $.fn.andSelf = function () {
        return this.addBack.apply(this, arguments);
    }

    /* Loader Code Start */
    //   $(window).on("load", function () {
    $(".section-loader").fadeOut("slow");

    var $container = $('.portfolioContainer');
    $container.isotope({
        filter: '*',
        animationOptions: {
            queue: true
        }
    });

    // $('.portfolio-nav li').click(function () {
    //     $('.portfolio-nav .current').removeClass('current');
    //     $(this).addClass('current');

    //     var selector = $(this).attr('data-filter');
    //     $container.isotope({
    //         filter: selector,
    //         animationOptions: {
    //             queue: true
    //         }
    //     });
    //     return false;
    // });
    //   });
    console.log("portfolioInit...")
    /* Loader Code End */
}

/**
 * To be reseted after Nextjs
 **/
function navigatorInit() {
    console.log('navigator init');
    var trigger = $('.navbar-toggler'),
        overlay = $('.overlay'),
        navc = $('.navbar-collapse'),
        active = false;

    $('.navbar-toggler, .navbar-nav li a, .overlay').on('click', function () {
        $('.navbar-toggler').toggleClass('active')
        //   $('#js-navbar-menu').toggleClass('active');
        //   $('.navbar-collapse').toggleClass('show');
        overlay.toggleClass('active');
        navc.toggleClass('active');
    });
}