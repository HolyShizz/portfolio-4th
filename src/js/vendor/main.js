$(document).ready(function () {
    let inactiveCardH = parseInt($('.inactive-card').height());
    $(".active-card").height(inactiveCardH);
    $('#i-switch').on('click', function() {
        $(this).parent('.card').toggleClass("not-active");
        $(this).parent('.card').toggleClass("active");
    });

});

