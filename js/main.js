var $list = $('.list');
var $form = $('form');
var $input = $('input');

$form.on('submit', function ($eventObject){
    $eventObject.preventDefault();
    
    var $theLi = $('<li>');
    $theLi.html($input.val());
     
     $list.prepend('<li>' + $input.val() + '<a href="">x</a></li>' )
     
     $input.val('');
    
});

$list.on('click', 'a', function (e) {
    e.preventDefault();
    $(this).parent().remove();
});

$list.on('click', 'li', function (e) {
    e.preventDefault();
    $(this).addClass('strike');


    $(this).css('opacity', function(i,o){
        return parseFloat(o).toFixed(1) === '0.4' ? 1 : 0.4;
    });
});



    
