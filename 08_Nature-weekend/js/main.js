$(document).ready(function(){

    $('.icon-arrows-circle-left').click(function () {
       $('.story').css('background', 'orangered');
    });

    $('.js--slider').slick({
        autoplay: true,
        dots: false,
        arrows: true,
        prevArrow: '<a href="#"><i class="fas fa-arrow-left feature-box__icon"></i></a>',
        nextArrow: '<a href="#"><i class="fas fa-arrow-right feature-box__icon"></i></a>',
    });

    // $('.fa-arrow-right').on('click', function () {
    //     $('.js--slider').slick('slickNext');
    // });
});