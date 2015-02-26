var $list = $('.list');
var $form = $('form');
var $input = $('input');

$form.on('submit', function ($eventObject){
    $eventObject.preventDefault();
    
    var $theLi = $('<li>');
    $theLi.html($input.val());
     
     $list.append('<li>' + $input + '<a href="">x</a>')
     
     $input.val('');
    
});

$list.on('click', 'a', function (e) {
    e.preventDefault();
    $(this).parent().remove();
});

    

$('form').submit(function () {
    if ($('input').val() !== '') {
        var input_value = $('input').val();
        $('ul').append('<li>' + input_value + '<a href="">x</a></li>');

    };
    $('input').val('');
    return false;
});

$(document).on('click', 'a', function (e) {
    e.preventDefault();
    $(this).parent().remove();
});
