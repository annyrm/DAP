$(function () {
    //Que el botón enviar no se vea al cargar la página
    $('#btnEnviar').hide();
    //Cuando detecte un cambio en los inputs 
    $(':input').keydown(habilitaEnviar); //El método change es para cuando se detecta un cambio (hasta abandonar el elemento, es decir pierde foco) y el keyup es al soltar la tecla ocurre el evento y el keydown es al presionar la tecla ocurre el evento
    //Cuando se presiones el botón enviar, entonces ejecutar funcion enviar
    $('#btnEnviar').click(enviar);
});

function enviar() {
    var nombre = $('#nombre').val.trim();
    var matricula = $('#matricula').val.trim();
    var edad = $('#edad').val.trim();

    var cadenaPHP = 'name =' + nombre + '&studentNumber =' + matricula + '&age =' + edad;

    $.ajax({ //En ajax en lugar de usar ; se usa solamente una ,
        type: 'POST',
        url: 'siguiente.php',
        data: cadenaPHP, //Va sin comillas!!
        success: function () {
            alert('Todo funcionó bien'); //Lo que esta adentro de function es javascript, por lo tanto entre las llaves uso ;
        },
        error: function () {
            alert('Hubo un error');
        }
    });
}

//ESta función habilita el botón enviar
function habilitaEnviar() {
    var nombre = $('#nombre').val().trim(); //trim eliminará todos los espacios que el usuario escriba antes o después.
    var matricula = $('#matricula').val().trim();
    var edad = $('#edad').val().trim();

    if (nombre != '' && matricula != '' && edad != '') {
        $('#btnEnviar').show(); //Mostrar el elemento con id btnEnviar
    } else {
        $('#btnEnviar').hide();
    }

}