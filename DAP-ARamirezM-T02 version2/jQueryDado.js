$(function () {
   //Código aquí, el signo de pesos $ es para indicar que es jquery. sustituye de alguna manera la palabra ready
   $("#play").click(rollTheDice);// punto señaliza una clase
   $("#stop").click(parar);// punto señaliza una clase
   
 });

function rollTheDice() {
    var i,
        faceValue,
        output = '',    
        faceValue = Math.floor(Math.random() * 6 +1)   
    switch(faceValue) {
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