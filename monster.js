const monsterSpeed = 0.5;

function Monster(xPos, yPos, width, height, xVel) {
  this.active = true;
  this.x = xPos;
  this.y = yPos;
  this.w = width;
  this.h = height;
  this.vx = 0;
  this.vy = 0;
  this.color = "#000";

  switch (direction) {
    case up: vy = -(Player.speed + bulletSpeed); break;
    case down: vy = (Player.speed + bulletSpeed); break;
    case left: vx -(Player.speed + bulletSpeed); break;
    case right: vx = (Player.speed + bulletSpeed); break;
  }

  this.inBounds = function() {
    return (this.x >= 0) && (this.x <= Game.canvas.width) && (this.y >= 0) && (this.y <= Game.canvas.height);
  };

  this.draw = function(ctx) {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.w, this.h);
  };

  this.update = function() {
    this.x += this.vx;
    this.y += this.vy;
    this.active = this.active && this.inBounds();
  };
}
