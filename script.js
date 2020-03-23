/* Почта */
$(document).ready(function () {
    $('#register').submit( function (e) {
        var name = $('#name').val();
        var mail = $('#mail').val();
        var skype = $('#skype').val();
        var theme = $('#theme').val();
        var text = $('#text').val();
        // alert(name + "mail " + mail + "; skype " + skype + "; theme " + theme + "; text" + text);
        $.ajax({
            type: 'POST',
            dataType: 'JSON',
            url: "mail.php",
            data: {
                'name': name,
                'skype': skype,
                'theme': theme,
                'mail': mail,
                'text': text
            },
            success: function (data) {
                console.log(data.result);
                // alert("Ваше сообщение отправлено!");
                $('#screen, #modal').fadeIn();
                $('#screen, #modal button').click(function(){
                    $('#screen, #modal').hide();
                    window.location.href = '';
                });
            },
            error: function (data) {
                // alert("Error" + data);
                console.log(data);
                $('#screen, #modalError').fadeIn();
                $('#screen, #modalError button').click(function(){
                    $('#screen, #modalError').hide();
                    window.location.href = '';
                });
            }
        });
        return false;
    });

    function changeWLP() {
        $('body').css('background-image', 'url(http://placeimg.com/1920/1080/any)')
    };
    setTimeout(changeWLP, 1000);
});
