
function playerInput() {
  Player.speed = 0.5;
  if (keyPresses.KeyW) {
    Player.direction = up;
  } else if (keyPresses.KeyS) {
    Player.direction = down;
  } else if (keyPresses.KeyA) {
    Player.direction = left;
  } else if (keyPresses.KeyD) {
    Player.direction = right;
  } else {
    Player.speed = 0;
  }
}

function gunInput() {

}

function main() {

  Game.context.clearRect(0, 0, Game.canvas.width, Game.canvas.height);

  playerInput();
  gunInput();

  Player.update();
  Player.draw(Game.context);


  /*shootBullet();
  drawBullet(ctx);
  monsterMaker();
  drawMonster(ctx);*/
  window.requestAnimationFrame(main);
}

function startGame() {
  Game.canvas = document.querySelector('mainCanvas');
  Game.context = Game.canvas.getContext('2d');
  window.requestAnimationFrame(main);
}

function loadGame() {
  monsterImage.src = 'monster.png';
  playerImage.src = 'https://opengameart.org/sites/default/files/Green-Cap-Character-16x18.png';
  playerImage.onload = function() {
    startGame();
  };
}

loadGame();

/*


player.shoot = function() {
  var bulletPosition = this.midpoint();

  playerBullets.push(Bullet({
    speed: 5,
    x: bulletPosition.x,
    y: bulletPosition.y
  }));
};

player.midpoint = function() {
  return {
    x: this.x + this.width/2,
    y: this.y + this.height/2
  };
};


function update() {
  ...
  playerBullets.forEach(function(bullet) {
    bullet.update();
  });

  playerBullets = playerBullets.filter(function(bullet) {
    return bullet.active;
  });
}

function draw() {
  ...
  playerBullets.forEach(function(bullet) {
    bullet.draw();
  });
}
*/
