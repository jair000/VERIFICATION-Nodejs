
$(document).ready(function () {
    $('#message_error').hide();
    $('#message_error2').hide();
});

$(document).on("click", "#signin", function () {
    var usu_correo = $('#your_name').val();
    var usu_pass = $('#your_pass').val();

    const input = document.getElementById('your_name');
    const pass = document.getElementById('your_pass');

    
    input.addEventListener('click', function () {
        $('#message_error').hide();
        $('#message_error2').hide();
    });
    pass.addEventListener('click', function () {
        $('#message_error').hide();
        $('#message_error2').hide();
    });

    if (usu_correo=='' || usu_pass=='') {
        $('#message_error').show();
        $('#message_error2').hide();
    } else if (usu_correo=='admin' && usu_pass == 'admin') {
            window.open("https://jair000.github.io/pumps/", "_self");
        } else{
            $('#message_error2').show();
            $('#message_error').hide();
        }
});
