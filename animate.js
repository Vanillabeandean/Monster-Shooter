
function keyboardInput() {
  if (keyPresses.KeyW) {
    Player.direction = up;
    Player.velocity.y = -playerSpeed;
    Player.velocity.x = 0;
  } else if (keyPresses.KeyS) {
    Player.direction = down;
    Player.velocity.y = playerSpeed;
    Player.velocity.x = 0;
  } else if (keyPresses.KeyA) {
    Player.direction = left;
    Player.velocity.x = -playerSpeed;
    Player.velocity.y = 0;
  } else if (keyPresses.KeyD) {
    Player.direction = right;
    Player.velocity.x = playerSpeed;
    Player.velocity.y = 0;
  } else {
    Player.velocity.x = 0;
    Player.velocity.y = 0;
  }

  if (keyPresses.Space) {
    spacePressed = true;
  } else if (spacePressed) {
    Game.bullets.push(new Bullet(Player.midX(), Player.midY(), Player.direction));
    spacePressed = false;
  }
}

function collision(thing, monster) {
  var xOverlap = ((thing.position.x >= monster.position.x) && (thing.position.x <= monster.position.x + monster.width))
                || ((thing.position.x + thing.width >= monster.position.x) && (thing.position.x + thing.width <= monster.position.x + monster.width));
  var xOverlap = ((thing.position.y >= monster.position.y) && (thing.position.y <= monster.position.y + monster.height))
                || ((thing.position.y + thing.height >= monster.position.y) && (thing.position.y + thing.height <= monster.position.y + monster.height));
  return xOverlap && yOverlap;
}

function playerCollisions() {
  for (var i = 0; i < Game.monsters.length; i++) {
    if (collision(Player, Game.monsters[i])) {
      Game.monsters[i].active = false;
      Game.active = false;
    }
  }
}

function bulletCollisions() {
  for (var i = 0; i < Game.monsters.length; i++) {
    for (var j = 0; j < Game.bullets.length; j++) {
      if (collision(Game.bullets[j], Game.monsters[i])) {
        Game.bullets[j].active = false;
        Game.monsters[i].active = false;
      }
    }
  }
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
  for (var i = 0; i < Game.monsters.length; i++) {
    if (Game.monsters[i].active) {
      Game.monsters[i].update();
    } else {
      removeElement(Game.monsters, i);
    }
  }
}

function drawBullets(ctx) {
  for (var i = 0; i < Game.bullets.length; i++) {
    Game.bullets[i].draw(ctx);
  }
}

function drawMonsters(ctx) {
  for (var i = 0; i < Game.monsters.length; i++) {
    Game.monsters[i].draw(ctx);
  }
}

function spawnMonsters() {
  //function that creates monsters randomly at certain times
}

function main() {
  Game.context.clearRect(0, 0, Game.canvas.width, Game.canvas.height);
  if (Game.active) {
    spawnMonsters();

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
