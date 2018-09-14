$(document).ready(function() {

    $('.js-burger').click(function() {
        $('.js-list').slideToggle(500);
    });

    $(window).resize(function () {
        if ($(window).width() > 780) {
            $('.js-list').removeAttr('style');
        }
    });
});
