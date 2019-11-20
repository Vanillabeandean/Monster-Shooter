
const bulletSpeed = 5;

function Bullet(xPosition, yPosition, direction) {
  this.active = true;
  this.x = xPosition;
  this.y = yPosition;
  this.w = 1;
  this.h = 1;
  this.vx = 0;
  this.vy = 0;
  this.color = "#000";

  switch (direction) {
    case up: vy = -bulletSpeed; break;
    case down: vy = bulletSpeed; break;
    case left: vx -bulletSpeed; break;
    case right: vx = bulletSpeed; break;
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
