$(document).ready(function () {
    $('#to-do').change(function () {
        var input = $(this).val();
        $('ul').append('<li>' + input + '<div class="icon"><i class="fa-solid fa-check"></i><i class="fa-solid fa-square-minus"></i></div></li>');
        $(this).val('');
    });

    $('ul').on('click', '.fa-square-minus', function () {
        $(this).parent().parent().css('background-color', '#C60C30')
        $(this).parent().parent().fadeOut(300);
        // console.log($(this).parent().parent());
    });
    $('ul').on('click', '.fa-check', function () {

        $(this).parent().parent().toggleClass('checked');
    });

});