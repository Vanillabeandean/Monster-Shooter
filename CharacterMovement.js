var canvas = document.querySelector("#myCanvas");
var context = canvas.getContext("2d");

// load images

var player = new Image();

player.src = "images/player.png";

// on key down

document.addEventListener("keydown",moveUp);

function moveUp(){
    bY -= 40;
    fly.play();
}
