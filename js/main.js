$( document ).ready(function() {
  
var $audio =$('audio')[0];

    
$audio.play();

var $body = $('body');
var $mario = $('.mario');
var $runMario = $('.runningMan');

var handle;

var state = 0;

var x = 0;

// var audio = document.getElementsByTagName("audio")[0];
// audio.play();

function move() {

    $body.css("background-position-x", x -= 1)

}


function togle() {

    $runMario.toggleClass('runningMan');
    $mario.toggleClass("hidden");

}


function jump(){


    $runMario.css('bottom',260);    
    $mario.css('bottom',260);

}




$body.on('keydown', function (event) {


    if (state === 0) {

        if (event.which === 39) {


            handle = setInterval(move, 20);
            togle();

            state = 1;

        }

    }

});
$body.on('keyup', function (event) {

    if (state === 1) {

        if (event.which === 39) {


            clearInterval(handle);
            $runMario.toggleClass('runningMan');
            $mario.toggleClass("hidden");


            state = 0;
        }

    }

})


$body.on('keypress', function (event) {

    while (event.which === 32) {
     
        jump()

        console.log(event)

        event.which ++

    }

});

$body.on('keyup', function (event) {

    while (event.which === 32) {

        $runMario.css('bottom', 145);
        $mario.css('bottom', 145);

        event.which ++;
    }

})

});
