function init() {}

$(document).ready(function () {
    
});

$(document).on("click", "#signup", function () {
    var usu_name = $('#usu_name').val();
    var usu_correo = $('#your_name').val();
    var usu_pass = $('#your_pass').val();
    var usu_passrepeat = $('#re_pass').val();

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
    } else{
    $.post("./controller/usuario.php?op=acceso",{usu_correo:usu_correo,usu_pass:usu_pass},function (data) { 
        if (data==0) {
            $('#message_error2').show();
            $('#message_error').hide();
        } else{
            window.open("http://localhost/pumps_front/Front-end/", "_self");
        }
        });
    };
});
