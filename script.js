// var window_width = $(window).width() - $('#object').width();

// var document_height = $(document).height() - $(window).height();

// $(function () {
//     $(window).scroll(function () {
//         var scroll_position = $(window).scrollTop();
//         var object_position_left = window_width * (scroll_position / document_height);
//         $('#object').css({
//             'left': object_position_left
//         });
//     });
// });
// var field_bottom = field_top + $('#field').offset().top + $('#field').outerHeight(true);

var object_width = $(window).width() - $('#object').width();

var document_height = $(document).height() - $(window).height();

$(function () {
    $(window).scroll(function () {
        var scroll_position = $(window).scrollTop();
        var field_top = $('#field').position().top - 330;
        var field_bottom = $('#field').position().top + 330;
        if (scroll_position > field_top && scroll_position < field_bottom) {
            var object_position_left = (object_width + 660) * ((scroll_position - field_top) / 660);
            // object_position_left = object_position_left - 330;
            $('#object').css({
                'left': object_position_left - 330
            });
        }
        else if (scroll_position < field_top){
            $('#object').css({
                'left': '-25%'
            });
        }
        else if (scroll_position > field_bottom){
            $('#object').css({
                'left': '75%'
            });
        }
    });
});

$(function () {
    $(window).scroll(function () {
        var scroll_position = $(window).scrollTop();
        var field_top = $('#cubes div').position().top - 360;
        var field_bottom = $('#cubes div').position().top + 360;
        if (scroll_position > field_top && scroll_position < field_bottom) {
            var height = scroll_position - field_top;
            var object_position_width = (height * 100) / 360 
            $('#cubes div').css({
                'width': object_position_width + '%'
            });
        }
        else if (scroll_position < field_top){
            $('#cubes div').css({
                'width': '0%'
            });
        }
        else if (scroll_position > field_bottom){
            $('#cubes div').css({
                'width': '100%'
            });
        }
    });
});

$(function () {
    $(window).scroll(function () {
        var scroll_position = $(window).scrollTop();
        var field_top = $('#cubes2 div').position().top - ($(window).height()/2);
        var field_bottom = $('#cubes2 div').position().top + (340);
        if (scroll_position > field_top && scroll_position < field_bottom) {
            var height = scroll_position - field_top;
            var object_position_height = (height * 100) / 170 
            $('#cubes2 div').css({
                'height': object_position_height + '%'
            });
        }
        else if (scroll_position < field_top){
            $('#cubes2 div').css({
                'height': '50px'
            });
        }
        else if (scroll_position > field_bottom){
            $('#cubes2 div').css({
                'height': '100%'
            });
        }
    });
});

$(function () {
    $(window).scroll(function () {
        var scroll_position = $(window).scrollTop();
        var field_top = $('#cubes3 div').position().top - ($(window).height()/2);
        var field_bottom = $('#cubes3 div').position().top + (340);

        if (scroll_position > field_top && scroll_position < field_bottom) {
            var height = scroll_position - field_top;
            var object_position_height = (height * 100) / 170
            $('#cubes3 div').css({
                'height': (100 - object_position_height) + '%'
            });
        }
        else if (scroll_position < field_top){
            $('#cubes3 div').css({
                'height': '100%'
            });
        }
        else if (scroll_position > field_bottom){
            $('#cubes3 div').css({
                'height': '50px'
            });
        }
    });
});