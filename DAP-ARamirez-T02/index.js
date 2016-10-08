var myFlag;
$(function () {
   //Código aquí, el signo de pesos $ es para indicar que es jquery. sustituye de alguna manera la palabra ready
   $("#2, #3, #4, #5, #6").hide();
   $("#accedeID").click(accedeIDcontenido);//Gatito # es un ID, buscar elementos por su ID
   $("#crearElemento").click(creaElemento);
   $("#crearElemento").click(deleteButton);
   $("#play").click(again);// punto señaliza una clase
   $("#stop").click(parar);// punto señaliza una clase
   
 });

function jugar(){
  setInterval(function(){
      $('#slider div:first-child').fadeOut(0)
         .next('div').fadeIn(0050)
         .end().appendTo('#slider');}, 400);
  myFlag = true;
   
}
               
s
function parar(){
    var value = Math.floor(Math.random() * (6) + 1);
    myFlag = false;
    switch(value) {
    case 1:
        $('#slider').html('<img src="http://www.wpclipart.com/recreation/games/dice/die_face_1.png" width="150" length="150">');
        break;
    case 2:
        $('#slider').html('<img src="http://www.wpclipart.com/recreation/games/dice/die_face_2.png" width="150" length="150">');
        break;
    case 3:
        $('#slider').html('<img src="http://www.wpclipart.com/recreation/games/dice/die_face_3.png" width="150" length="150">');
        break;
    case 4:
        $('#slider').html('<img src="http://www.wpclipart.com/recreation/games/dice/die_face_4.png" width="150" length="150">');
        break;
    case 5:
       $('#slider').html('<img src="http://www.wpclipart.com/recreation/games/dice/die_face_5.png" width="150" length="150">');
        break;
    case 6:
       $('#slider').html('<img src="http://www.wpclipart.com/recreation/games/dice/die_face_6.png" width="150" length="150">');
        break;
    }
   
}

function again(){ 
    //$("#stop").unbind("click");
    if(myFlag == false){
        location.reload();
        jugar();
    }else{
        jugar();
    } 
    
}

function esconderBLateral(){
   $(".side-nav").sideNav("hide");
}

function accedeIDcontenido(){
   $("h1#titulo").html("Accediendo elementos");
   $("h3#subtitulo").html("Por id, nombre de clase, atributo");
   $("h6#contenido").html("Accediendo por <strong>Por id</strong>");
}

function creaElemento(){
   $("h6#contenido").append($("<p>",{html:"<img src='images/porID.png' class='center'>"}));
}

function deleteButton(){
    $("#crearElemento").hide();
}




