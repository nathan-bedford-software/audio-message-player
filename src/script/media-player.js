$(function () {

    var messages;
    fetchMessages();

    function fetchMessages(){
        $.get('fakeapi/messages.json', function(data){
            messages = data;
            messages.forEach(function(message){
                loadMessageToPage(message);
            });


            $('.message').click(function(event){
                event.preventDefault();
                var id = $(this).data('id');
                var message = getCachedMessage(id);
                updateNowPlaying(message);

            });

        });
    }

    function updateNowPlaying(message){
        $('.now-playing').text(message.title);
        $('.now-playing-prefix').css('visibility', 'visible');
    }

    function loadMessageToPage(message){
        $('.message-list').append(
            '<li class="message" data-id="' + message.id + '"><a href="#">' + message.title + '</a></li>'
        )
    }

    function getCachedMessage(id){
        for(var i=0; i<messages.length; i++){
            if(id === messages[i].id){
                return messages[i];
            }
        }
    }

});