const down = 0;
const up = 1;
const left = 2;
const right = 3;

var keyPresses = {};

var playerImage = new Image();
var monsterImage = new Image();

var Game = {
  active : true,
  canvas : {
    height : 500,
    width : 1000
  },
  bullets : []
}

window.addEventListener('keydown', keyDownListener);
function keyDownListener(event) {
    keyPresses[event.code] = true;
}

window.addEventListener('keyup', keyUpListener);
function keyUpListener(event) {
    keyPresses[event.code] = false;
}
