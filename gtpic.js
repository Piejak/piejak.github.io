$(document).ready(function(){
    var access_token = '3794301.f59def8.e08bcd8b10614074882b2d1b787e2b6f';

    loadFeed();

    function loadFeed() {
        var param = {access_token:access_token};
        cmd(param, onPhotoLoaded);
    }

    function cmd(param, callback) {
        //popular
        var cmdURL = 'https://api.instagram.com/v1/media/popular?callback=?';
        $.getJSON(cmdURL, param, callback);
    }

    function onPhotoLoaded(data) {
        if(data.meta.code == 200) {
            var photos = data.data;

            if(photos.length > 0) {
                for (var key in photos ){
                    var photo = photos[key];
                    $('<div id=p' + photo.id + '></div>').addClass('photoWrapper').appendTo('#panel');

                    var str = '<img id="' + photo.id + '" src="' + photo.images.thumbnail.url + '" width="100%">';
                    $('<div></div>').addClass('photo').html(str).appendTo('#p' + photo.id);

                    $('#' + photo.id).load(function() {
                        $('#p' + $(this).attr('id')).fadeTo('slow', 1.0);
                    });

                }
            }else{
                alert('empty');
            }

        }else{
            alert(data.meta.error_message);
        }
    }

});
