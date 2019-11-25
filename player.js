

var Player = {
  image : playerImage,
  position : new Vector(140,60),
  velocity : new Vector(0,0),
  scale : 1,
  width : 16,
  height : 18,
  scaledWidth : function() { return (this.scale * this.width); },
  scaledHeight : function() { return (this.scale * this.height); },
  cycleLoop : [0,1,0,2],
  loopIndex : 0,
  frameLimit : 6,
  frameCount : 0,
  direction : 0,
  health : 100,

  midPoint : function() {
    return new Vector(this.position.x + this.scaledWidth()/2, this.position.y + this.scaledHeight()/2);
  },

  draw : function(ctx) {
    ctx.drawImage((this.image), (this.cycleLoop[this.loopIndex] * this.width), (this.direction*this.height), this.width, this.height, this.position.x, this.position.y, this.scaledWidth(), this.scaledHeight());
  },

  update : function() {
    this.position.addVector(this.velocity);

    if (this.position.y <= 0) {
      this.position.y = 0;
    } else if (this.position.y + this.scaledHeight() >= Game.canvas.height) {
      this.position.y = Game.canvas.height - this.scaledHeight();
    }

    if (this.position.x <= 0) {
      this.position.x = 0;
    } else if (this.position.x + this.scaledWidth() >= Game.canvas.width) {
      this.position.x = Game.canvas.width - this.scaledWidth();
    }

    if (this.velocity.x != 0 || this.velocity.y != 0) {
      this.frameCount++;
      if (this.frameCount >= this.frameLimit) {
        this.frameCount = 0;
        this.loopIndex++;
        if (this.loopIndex >= this.cycleLoop.length) {
          this.loopIndex = 0;
        }
      }
    } else { this.loopIndex = 0; }
  }

};
