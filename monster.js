

function Monster(position, velocity, width, height, image) {
  this.active = true;
  this.position = position;
  this.velocity = velocity;
  this.width = width;
  this.height = height;
  this.image = image;

  this.inBounds = function() {
    return (this.position.x >= 0) && (this.position.x <= Game.canvas.width) && (this.position.y >= 0) && (this.position.y <= Game.canvas.height);
  };

  this.draw = function(ctx) {
    ctx.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
  };

  this.update = function() {
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
    this.active = this.active && this.inBounds();
  };
}
