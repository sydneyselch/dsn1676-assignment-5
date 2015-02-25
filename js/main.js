var $item = $('.item');
var $form = $('form');
var $input = $('item');

$form.on('submit', function (eventObject){
    $eventObject.preventDefault());
    $list.css('background-color', $input.val());
    
    var $theH2 = $('<h2>');
    $theH2.html($input.val());
    
     $item.html($theH2)
     
     $list.append($theH2)
     
     $input.val('');
    
});

