$(function(){

    var $items = $('#items');
    
    $.ajax({
        type : 'GET',
        url : '/api/latest',
        success : function(items){
            $.each(items, function(i, items){
                $items.append('<li>'+'Name: ' + items.title +'</li>' + '<li>'+'Url: ' + items.url +'</li>' + '<br/>')
            });
        }
    });
});