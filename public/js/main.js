$(function(){

    var $items = $('#items');

    $.ajax({
        type : 'GET',
        url : '/api/latest',
        success : function(items){
            $.each(items, function(i, items){
                $items.append('<li>'+'Item: ' + items.title +'</li>')
            });
        }
    });
});