
function keyboardInput() {
  if (keyPresses.KeyW) {
    Player.direction = up;
    Player.velocity.set(0, 2* -playerSpeed);
  } else if (keyPresses.KeyS) {
    Player.direction = down;
    Player.velocity.set(0, 2* playerSpeed);
  } else if (keyPresses.KeyA) {
    Player.direction = left;
    Player.velocity.set(2*-playerSpeed, 0);
  } else if (keyPresses.KeyD) {
    Player.direction = right;
    Player.velocity.set(2*playerSpeed, 0);
  } else {
    Player.velocity.set(0, 0);
  }

  if (keyPresses.Space) {
    spacePressed = true;
  } else if (spacePressed) {
    Game.bullets.push(new Bullet(Player.midPoint(), Player.direction));
    spacePressed = false;
  }
}

function collisionMonster(thing, monster) {
  var xOverlap = ((thing.position.x >= monster.position.x) && (thing.position.x <= monster.position.x + monster.width))
                || ((thing.position.x + thing.width >= monster.position.x) && (thing.position.x + thing.width <= monster.position.x + monster.width));
  var yOverlap = ((thing.position.y >= monster.position.y) && (thing.position.y <= monster.position.y + monster.height))
                || ((thing.position.y + thing.height >= monster.position.y) && (thing.position.y + thing.height <= monster.position.y + monster.height));
  return xOverlap && yOverlap;
}

function collisionPlayer(thing, powerup) {
  var xOverlap = ((thing.position.x >= powerup.position.x) && (thing.position.x <= powerup.position.x + powerup.width))
                || ((thing.position.x + thing.width >= powerup.position.x) && (thing.position.x + thing.width <= powerup.position.x + powerup.width));
  var yOverlap = ((thing.position.y >= powerup.position.y) && (thing.position.y <= powerup.position.y + powerup.height))
                || ((thing.position.y + thing.height >= powerup.position.y) && (thing.position.y + thing.height <= powerup.position.y + powerup.height));
  return xOverlap && yOverlap;
}

function playerCollisions() {
  for (var i = 0; i < Game.monsters.length; i++) {
    if (collisionMonster(Player, Game.monsters[i])) {
      Game.monsters[i].active = false;
      Game.active = false;
    }
  }
}

function bulletCollisions() {
  for (var i = 0; i < Game.monsters.length; i++) {
    for (var j = 0; j < Game.bullets.length; j++) {
      if (collisionMonster(Game.bullets[j], Game.monsters[i])) {
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

function playerSpeedBoost(){
  for (var i = 0; i < Game.powerup.length; i++) {
    if (collisionPlayer(Player, Game.powerup[i])) {
      Game.powerup[i].active = false;
    }
  }
}

function drawPowerUps(ctx) {
  for (var i = 0; i < Game.monsters.length; i++) {
    Game.powerUps[i].draw(ctx);
  }
}

function spawnPowerUps (){
  var randomNumberX = (Math.random ()* 25) + 230;
  var randomNumberY = (Math.random ()* 112) + 10;
  var randomCorrect = Math.round(Math.random () * 10);

  if (randomCorrect == 2){
    fillRect (50,50,50,50);
  }
}

var speed = .3;

function spawnMonsters() {
  var randomNum = Math.round(Math.random() );
  var randomNumberXRight = (Math.random ()* 50) + 224;
  var randomNumberYRight = (Math.random ()* 100) + 20;
  var randomNumberXLeft = (Math.random ()* 50) + 10;
  var randomNumberYLeft = (Math.random ()* 100) + 20;
  var randomNumberEqualTo = Math.round(Math.random () * 150);
if (randomNumberEqualTo == 1){
  speed += .1;
}
if (randomNum ==1){
    if (Game.monsters.length == 0 || Game.monsters.length == 1){
      var newPos = new Vector(randomNumberXRight, randomNumberYRight);
      var newVel = new Vector(-speed, 0);
      Game.monsters.push(new Monster(newPos, newVel, 45, 20, monsterImages[0]));
    }
  }
    if(randomNum == 0){
      if (Game.monsters.length == 0 || Game.monster.length == 1){

    var newPos = new Vector(randomNumberXLeft, randomNumberYLeft);
    var newVel = new Vector(speed, 0);
    Game.monsters.push(new Monster(newPos, newVel, 45, 20, monsterImages[0]));
  }
}
  //function that creates monsters randomly at certain times
}
var life = 5;
function loseLife (){
  if (Monster.position == 0 || Monster.position == Game.canvas.width)
    life = life - 1;
    if (life == 0){
      Game.active = false;
    }
}

function main() {
  Game.context.clearRect(0, 0, Game.canvas.width, Game.canvas.height);
  if (Game.active) {
    spawnMonsters();
    // spawnPowerUps ();
    keyboardInput();

    bulletCollisions();
    playerCollisions();

    updateBullets();
    updateMonsters();
    Player.update();

    Player.draw(Game.context);
    drawMonsters(Game.context);
    drawBullets(Game.context);
    // drawPowerUps(Game.context);
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
