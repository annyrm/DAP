$(function () {
   $("#nombre, #email, #tel, #textarea1").keyup(function() {
     if($('#nombre').val() != "" || $('#email').val() != "" || $('#tel').val() != "" || $('#textarea1').val() != ""){
    $("#clear").removeClass("disabled");
   }else{
     $("#clear").addClass("disabled");
   }
   });
    
   $("#clear").click(limpiar);
   
    
   $("#nombre, #email, #tel, #textarea1").keyup(function() {
        if($('#nombre').val() != "" && $('#email').val() != "" && $('#tel').val() != "" && $('#textarea1').val() != ""){
        $("#submit").removeClass("disabled");
    }else{
        $("#submit").addClass("disabled");
    }
    });
    
    $("#submit").click(enviarInfo);
    
 });

function limpiar(){
    $("#formulario")[0].reset();
    if($('#nombre').val() == "" || $('#email').val() == "" || $('#tel').val() == "" || $('#textarea1').val() == ""){
    $("#clear").addClass("disabled");
    $("#submit").addClass("disabled");
    
   }
   $(":input").focusout();
}

function enviarInfo(){
    if($('#nombre').val() != "" && $('#email').val() != "" && $('#tel').val() != "" && $('#textarea1').val() != ""){
    alert("Gracias por contestar " + $('#nombre').val() + ". Nos mantendremos en contacto a través del correo electrónico: " + $('#email').val() + ", tus comentarios son muy importantes.");
    limpiar();
    }
}

