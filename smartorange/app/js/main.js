$( document ).ready(function() {

    $('.js-slider').slick({
        prevArrow: '.js-left svg',
        nextArrow: '.js-right svg',
        dots: false,
        infinite: true,
        arrows: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1
    });

    // $('input[name=email]').val('Your Email*');

    $('.js-push-btn').click(function () {
        $('.js-overlay').fadeIn();
        $('.js-main').css('filter', 'blur(5px)');
    });

    $('.js-close').click(function () {
        $('.js-overlay').fadeOut();
        $('.js-main').css('filter', 'none');
    });

    $('.js-btn').click(function () {
        $('.js-overlay').fadeOut();
        $('.js-main').css('filter', 'none');
    });

    // Animation on scroll

    $('.js-team').waypoint(function(direction) {
        $('.js--wp-1').addClass('animated  slideInUp');
    });

    $('.js-team').waypoint(function(direction) {
        $('.js--wp-2').addClass('animated lightSpeedIn');
    });

    $('.js-form').waypoint(function(direction) {
        $('.js--wp-3').addClass('animated lightSpeedIn');
    });

    $('.js-form').waypoint(function(direction) {
        $('.js--wp-4').addClass('animated zoomInUp');
    });



});