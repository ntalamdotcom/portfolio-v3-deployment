function portfolioInit() {
    var $container = $('.portfolioContainer');
    $container.isotope({
        filter: '*',
        animationOptions: {
            queue: true
        }
    });
    console.log('portfolio init');
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