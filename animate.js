
function keyboardInput() {
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

  if (keyPresses.Space) {
    spacePressed = true;
  } else if (spacePressed) {
    Game.bullets.push(new Bullet(Player.midX(), Player.midY(), Player.direction));
    spacePressed = false;
  }
}

function playerCollisions() {

}

function bulletCollisions() {

}

function updateBullets() {
  for (var i = 0; i < Game.bullets.length; i++) {
    if (Game.bullets[i].active) {
      Game.bullets[i].update();
    } else {
      removeElement(Game.bullets, i);
    }
  }
}

function updateMonsters() {

}

function drawBullets(ctx) {
  for (var i = 0; i < Game.bullets.length; i++) {
    Game.bullets[i].draw(ctx);
  }
}

function drawMonsters(ctx) {

}

function main() {
  Game.context.clearRect(0, 0, Game.canvas.width, Game.canvas.height);
  if (Game.active) {
    keyboardInput();

    bulletCollisions();
    playerCollisions();

    updateBullets();
    updateMonsters();
    Player.update();

    Player.draw(Game.context);
    drawMonsters(Game.context);
    drawBullets(Game.context);
  }
  window.requestAnimationFrame(main);
}

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
