var $list = $('.list');
var $form = $('form');
var $input = $('input');

$form.on('submit', function ($eventObject){
    $eventObject.preventDefault();
    
    var $theLi = $('<li>');
    $theLi.html($input.val());
     
     $list.append($theLi)
     
     $input.val('');
    
});

