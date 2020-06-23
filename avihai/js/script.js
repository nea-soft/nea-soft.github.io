$(document).ready(function () {
    //$('select').niceSelect();

    //Form change
    let num = 0,
        formContainer = $(".form__content"),
        changedContent = formContainer.find(".form__change-item"),
        thisNum = 0;

    let addressCheck = location.href;

    if (addressCheck.indexOf('thank-you') > -1) {
        $('.form__change-item_1').addClass('form__change-item_hidden');
        $('.form__change-item_7').removeClass('form__change-item_hidden');
    }

    $(".form__btn-submit").on("click", function (e) {
        e.preventDefault();

        if ($(this).attr('type') == 'submit') {
            return false;
        }
        if ($(this).attr('id') == 'btn-transfer') {
            let form = $('#contact-form');
            let url = "contact.php";
            $.ajax({
                type: "POST",
                url: url,
                beforeSend: function(){
                    $("#loader").css("display", "block");
                    $("#loader").addClass('loader-center');
                },
                data: form.serialize(),
                success: function (data) {
                    if(data.type == "success") {
                        location.href = "thank-you.html";
                    } else {
                        alert('something goes wrong');
                    }
                    let messageAlert = 'alert-' + data.type;
                    let messageText = data.message;

                    let alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';
                    if (messageAlert && messageText) {
                        $('#contact-form').find('.messages').html(alertBox);
                        $('#contact-form')[0].reset();
                    }
                }
            });
        }

        if (typeof $(this).data("name") !== typeof undefined && $(this).data("name") !== false) {
            var inputName = $(this).data("name");
            var checkedValue = $('input[name=' + inputName + ']').val();

            if ((inputName == 'user_age' || inputName == 'user_insurance' || inputName == 'user_insurance-payment' || inputName == 'user_residence')) {


                /*var checkedValueRadio = $('input:checked[name=' + inputName + ']').val();
                 if (checkedValueRadio == 'no') {
                    $('#submited-form').attr('action', '/eligibility-check/thanks.php')
                } */
            }



            if (checkedValue == '' || checkedValue.replace(' ', '') == '' || checkedValue.trim() == '') {
                alert('השדה נדרש');
                return false;
            }

        }
        $('.form__footer-link').removeClass('form__footer-link_text-hidden');
        $(this).parent().addClass("form__change-item_hidden");
        $(this).parent().removeClass("form__change-item_visible");

        $(this).parent().next(changedContent).removeClass("form__change-item_hidden");
        $(this).parent().next(changedContent).addClass("form__change-item_visible");
        let progressNum = $(this).parent().next(changedContent).attr("id");
        let progressNumPrev = progressNum - 1;

        console.log(progressNum);

        if (progressNum == 6) {
            $(this).addClass('btn-transfer');
        }

        $('.progress-bar__text').removeClass('progress-bar__width_' + progressNumPrev);
        $('.progress-bar__fill').removeClass('progress-bar__width_' + progressNumPrev);
        $('.progress-bar__text').addClass('progress-bar__width_' + progressNum);
        $('.progress-bar__fill').addClass('progress-bar__width_' + progressNum);

        if (progressNum == 2) {
            let progressText = '15%';
            $('.progress-bar__text span').text(progressText);
        }
        if (progressNum == 3) {
            let progressText = '30%';
            $('.progress-bar__text span').text(progressText);
        }
        if (progressNum == 4) {
            let progressText = '45%';
            $('.progress-bar__text span').text(progressText);
        }
        if (progressNum == 5) {
            let progressText = '66%';
            $('.progress-bar__text span').text(progressText);
        }
        if (progressNum == 6) {
            let progressText = '82%';
            $('.progress-bar__text span').text(progressText);
        }
        if (progressNum == 7) {
            let progressText = '100%';
            $('.progress-bar__text span').text(progressText);
        }
    });

    $(".form__footer-link_text").on("click", function (e) {
        e.preventDefault();

        formContainer = $(".form__content"),
            changedContent = formContainer.find(".form__change-item");

        $(changedContent).addClass('form__change-item_hidden');
        let thisNum = formContainer.find('.form__change-item_visible').attr('id') - 1;

        $(changedContent).siblings('.form__change-item_' + thisNum).removeClass('form__change-item_hidden');
        $(changedContent).siblings('.form__change-item_' + thisNum).addClass('form__change-item_visible');


        if (thisNum == 1) {
            $(".form__footer-link").addClass('form__footer-link_text-hidden');
        }

        let progressNumB = thisNum + 1;
        let progressNumPrevB = thisNum;
        $('.progress-bar__text').removeClass('progress-bar__width_' + progressNumB);
        $('.progress-bar__fill').removeClass('progress-bar__width_' + progressNumB);
        $('.progress-bar__text').addClass('progress-bar__width_' + progressNumPrevB);
        $('.progress-bar__fill').addClass('progress-bar__width_' + progressNumPrevB);

        if (progressNumPrevB == 2) {
            let progressText = '15%';
            $('.progress-bar__text span').text(progressText);
        }
        if (progressNumPrevB == 3) {
            let progressText = '30%';
            $('.progress-bar__text span').text(progressText);
        }
        if (progressNumPrevB == 4) {
            let progressText = '45%';
            $('.progress-bar__text span').text(progressText);
        }
        if (progressNumPrevB == 5) {
            let progressText = '66%';
            $('.progress-bar__text span').text(progressText);
        }
        if (progressNumPrevB == 6) {
            let progressText = '82%';
            $('.progress-bar__text span').text(progressText);
        }
        if (progressNumPrevB == 7) {
            let progressText = '100%';
            $('.progress-bar__text span').text(progressText);
        }
    });

    //Phone validation
    let phoneMask = IMask(
    document.getElementById('user_phone'), { mask: '000-0000' });
    let phoneMaskPrefix = IMask(
    document.getElementById('user_phone-prefix'), { mask: '-000' });

    //Disable button if fields are empty
    let userNameForm = $('input[type="text"][name="user_name"]');
    $(userNameForm).on('keyup', function() {
        if($(this).val().length > 1){
            $('#firstStep').prop('disabled', false);
        } else {
            $('#firstStep').prop('disabled', true);
        }
    });
    $(userNameForm).on('keyup', function() {
        let userNameInput = $( this ).val();
        $(".form-user-name").text( userNameInput );

    });
    //Second Step
    $('input[type="radio"][name="user_age"]').on('change', function() {
        if ($('input[name="user_age"]:checked').length > 0) {
            $('#secondStep').prop('disabled', false);
        } else {
            $('#secondStep').prop('disabled', true);
        }
    });
    //Fourth Step
    $('input[type="radio"][name="user_insurance-payment"]').on('change', function() {
        if ($('input[name="user_age"]:checked').length > 0) {
            $('#fourthStep').prop('disabled', false);
        } else {
            $('#fourthStep').prop('disabled', true);
        }
    });
    //Fifth Step
    $('input[type="radio"][name="user_residence"]').on('change', function() {
        if ($('input[name="user_age"]:checked').length > 0) {
            $('#fifthStep').prop('disabled', false);
        } else {
            $('#fifthStep').prop('disabled', true);
        }
    });
    //Sixth Step
    $('input[type="tel"][name="user_phone"],input[type="tel"][name="user_phone-prefix"]').on('keyup', function() {
        if($('input[type="tel"][name="user_phone-prefix"]').val().length >= 3 && $('input[type="tel"][name="user_phone"]').val().length > 7) {
            $('#btn-transfer').prop('disabled', false);
        } else {
            $('#btn-transfer').prop('disabled', true);
        }
    });

    $('input[type="tel"][name="user_phone"]').on('keyup', function() {
        if($('input[type="tel"][name="user_phone-prefix"]').val().length >= 3 && $('input[type="tel"][name="user_phone"]').val().length > 7) {
            $('#btn-transfer').prop('disabled', false);
        } else {
            $('#btn-transfer').prop('disabled', true);
        }
    });
});
