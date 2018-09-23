$(document).ready(function() {


    $('.js--burger').click(function() {
        $('.js--list').slideToggle(500).fadeTo(500, 1);

    });

    $(window).resize(function () {
        if ($(window).width() > 767) {
            $('.js--burger').removeAttr('style');
        }
        if ($(window).width() > 767) {
            $('.js--list').removeAttr('style');
        }
    });
});
