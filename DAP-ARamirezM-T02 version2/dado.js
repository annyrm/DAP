var imgDado = new Image();
var myFlag;

$(function () {
   //Código aquí, el signo de pesos $ es para indicar que es jquery. sustituye de alguna manera la palabra ready
   $("#play").click(rollTheDice);//function(){
   $("#stop").click(stop);
 });

function rollTheDice(e){
    myFlag = true;
    $("#slider").show();
    var dado = ["2", "6", "1", "4", "3", "5"];
    $("#slider").html("<img src='Dado_" +dado[0] +".png'>").show()
    imageDice(true);

function imageDice(id){
    if(myFlag == true){
        dado.push(dado.shift())//Hace el efecto de las imágenes, shift remueve el primer elemento y con push se añade la imagen eliminada al final del arreglo
        imgDado.src ="Dado_"+ dado[0] +".png"//Definimos el atributo source de la imagen
        
     $("#slider img").attr("src", imgDado.src)//se agregar a la imagen del div el atributo de la source
        
        return setTimeout(imageDice, 150);//establece la duración de cada imagen al pasar
    }
}
    
    if(myFlag == false){
        $("#slider").html("<img src='Dado_" +dado[0] +".png'>").show() 
    }
}


function stop(){
    myFlag = false;
}

