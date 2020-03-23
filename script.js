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
        let image1 = 'http://placeimg.com/1920/1080/any';
        let image2 = 'http://placeimg.com/1920/1200/any';
        let image3 = 'http://placeimg.com/1920/1050/any';
        let randomImages = [image1, image2, image2];
        randomNumber = Math.floor(Math.random() * 3);
        randomImages[randomNumber];
        $('body').css('background-image', 'url(' + randomImages+ ')');
    };
    setTimeout(changeWLP, 1000);
});
