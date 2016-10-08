$(function () {
   //Código aquí, el signo de pesos $ es para indicar que es jquery. sustituye de alguna manera la palabra ready
   $('#play').click(function () {
    $('#slider').each(function(index){
        throwAnimatedDice( this, index );
    });
    
});

 });

function throwAnimatedDice(elem, 1) {
    var value = Math.round(Math.random() * 5) + 1;
    displayDice(10 + (spins*5), value, $(elem));

    return value;
}

function displayDice(2, final, element) {
    element.removeClass();
    if (times > 1) {
        element.addClass('http://www.wpclipart.com/recreation/games/dice/die_face_' + (Math.round(Math.random() * 5) + 1) + ".png");
        setTimeout(function () {
            displayDice(times - 1, final, element);
        }, 100);
    } else element.addClass("http://www.wpclipart.com/recreation/games/dice/die_face_" + final + ".png");
}