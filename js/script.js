$('ul').on('click', 'li', function() {
    $(this).toggleClass('done');
});

$('ul').on('click', 'span', function() {
    $(this).parent().fadeOut('slow', function() {
        $(this).remove();
    });
});

$('input').on('keypress', function (e) {
    var goalKey = e.which
    if(goalKey === 13 && $('input').val().length > 0) {
        $('ul').append('<li><span><i class="far fa-trash-alt"></i></span>' + $('input').val() + '</li>');
        $('input').val('');
    }
});

$('h1 i').on('click', function () {
    $('input').fadeToggle(300);
});