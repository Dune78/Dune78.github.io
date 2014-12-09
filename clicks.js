/*global $*/
/*jslint sloppy:true, browser: true*/

$(window).on('click', function (e) {
    $('.logo').css({left: e.pageX,
                    top: e.pageY});
    $('.logo').toggleClass('rotated');
});