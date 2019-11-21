const down = 0;
const up = 1;
const left = 2;
const right = 3;

var keyPresses = {};
var spacePressed = false;

var playerImage = new Image();
var monsterImages = [new Image()];

const playerSpeed = 0.5;
const monsterSpeed = 0.5;
const bulletSpeed = 5;

var Game = {
  active : false,
  canvas : {
    height : 500,
    width : 1000
  },
  bullets : [],
  monsters : []
};

function keyDownListener(event) {
    keyPresses[event.code] = true;
}

function keyUpListener(event) {
    keyPresses[event.code] = false;
}

function Vector (xValue, yValue) {
  this.x = xValue;
  this.y = yValue;
  this.norm = function() { return Math.sqrt(this.x*this.x + this.y*this.y); };
  this.angle = function() { return Math.arctan(this.y/this.x); };

  this.addVector = function(vector) {
    this.x += vector.x;
    this.y += vector.y;
  };

  this.add = function(xval, yval) {
    this.x += xval;
    this.y += yval;
  };

  this.set = function(xval, yval) {
    this.x = xval;
    this.y = yval;
  };

  this.clone = function() {
    return new Vector(this.x, this.y);
  }
}

function removeElement(array, i) {
  var temp = array[array.length - 1];
  array[array.length - 1] = array[i];
  array[i] = temp;
  array.pop();
}

function startGame() {
  window.addEventListener('keydown', keyDownListener);
  window.addEventListener('keyup', keyUpListener);

  Game.canvas = document.getElementById('mainCanvas');
  Game.context = Game.canvas.getContext('2d');
  Game.active = true;

  monsterImages[0].src = 'monster.png';
  playerImage.src = 'https://opengameart.org/sites/default/files/Green-Cap-Character-16x18.png';
  playerImage.onload = function() {
    window.requestAnimationFrame(main);
  }
  //window.requestAnimationFrame(main);
}
