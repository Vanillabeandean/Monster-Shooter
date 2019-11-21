
const bulletSpeed = 5;

function Bullet(position, direction) {
  this.active = true;
  this.position = position;
  this.velocity = new Vector(0,0);
  this.width = 1;
  this.height = 1;
  this.color = "#000";

  switch (direction) {
    case up: this.velocity.y = Player.velocity.y - bulletSpeed; break;
    case down: this.velocity.y = Player.velocity.y + bulletSpeed; break;
    case left: this.velocity.x = Player.velocity.x - bulletSpeed; break;
    case right: this.velocity.x = Player.velocity.x + bulletSpeed; break;
  }

  this.inBounds = function() {
    return (this.position.x >= 0) && (this.position.x <= Game.canvas.width) && (this.position.y >= 0) && (this.position.y <= Game.canvas.height);
  };

  this.draw = function(ctx) {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  };

  this.update = function() {
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
    this.active = this.active && this.inBounds();
  };
}
