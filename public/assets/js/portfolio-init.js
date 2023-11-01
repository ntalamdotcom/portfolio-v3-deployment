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