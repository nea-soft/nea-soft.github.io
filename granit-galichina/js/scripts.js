// Phone validation
$("#number").mask("+38(999) 999-99-99");


/* Почта */
$(document).ready(function () {
    $('#singlebutton').on("click", function (e) {
        var name = $('#textinput').val();
        var number = $('#number').val();
        var mail = $('#email').val();
        var text = $('#textarea').val();
        $.ajax({
            type: 'POST',
            dataType: 'JSON',
            url: "test.php",
            data: {
                'name': name,
                'number': number,
                'mail': mail,
                'text': text
            },
            success: function (data) {
                //                            alert(data.result);
                window.location.href = '';
                alert("Ваше повідомленно успішно відправлено!\nДякуємо.");
            },
            error: function (data) {
                alert("Ууупс. Схоже виникла помилка :( .\nПовідомлення не відправлене. Спробуйте ще раз. Та уважно перевірте усю інформацію.");
                console.log(data);
            }
        });
        return false;
    });
});
/* Почта-1 */
function ContactController($scope, $http) {
    $scope.success = false;
    $scope.error = false;
    $scope.send = function () {
        var htmlBody = '<div>Name: ' + $scope.user.name + '</div>' +
            '<div>Email: ' + $scope.user.email + '</div>' +
            '<div>Message: ' + $scope.user.body + '</div>' +
            '<div>Date: ' + (new Date()).toString() + '</div>';
        $http({
            url: 'https://api.postmarkapp.com/email',
            method: 'POST',
            data: {
                'From': 'foo@foo.com',
                'To': 'bar@bar.com',
                'HtmlBody': htmlBody,
                'Subject': 'New Contact Form Submission'
            },
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-Postmark-Server-Token': '8569dcd45-6a1a-4e7b-ae75-ea37629de4'
            }
        }).
            success(function (data) {
                $scope.success = true;
                $scope.user = {};
            }).
            error(function (data) {
                $scope.error = true;
            });
    }
}