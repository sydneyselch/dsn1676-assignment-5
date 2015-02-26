var $list = $('.list');
var $form = $('form');
var $input = $('input');

$form.on('submit', function ($eventObject){
    $eventObject.preventDefault();
    
    var $theLi = $('<li>');
    $theLi.html($input.val());
     
     $list.append('<li>' + $input.val() + '<a href="">x</a></li>' )
     
     $input.val('');
    
});

$list.on('click', 'a', function (e) {
    e.preventDefault();
    $(this).parent().remove();
});

    
