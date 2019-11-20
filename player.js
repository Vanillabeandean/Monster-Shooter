var Player = {
  image : playerImage,
  x : 0,
  y : 0,
  scale : 1,
  width : 16,
  height : 18,
  scaledWidth : function() { return (this.scale * this.width); },
  scaledHeight : function() { return (this.scale * this.height); },
  cycleLoop : [0,1,0,2],
  loopIndex : 0,
  frameLimit : 12,
  frameCount : 0,
  speed : 0,
  direction : 0,

  midX : function() {
    return this.x + this.scaledWidth()/2;
  },

  midY : function() {
    return this.y + this.scaledHeight()/2;
  },

  draw : function(ctx) {
    ctx.drawImage((this.image), (this.cycleLoop[this.loopIndex] * this.width), (this.direction*this.height), (this.width, this.height), (this.x), (this.y), (this.scaledWidth()), (this.scaledHeight()));
  },

  update : function() {
    switch (this.direction) {
      case up : this.y -= this.speed;
      case down : this.y += this.speed;
      case left : this.x -= this.speed;
      case right : this.x += this.speed;
    }

    if (this.y <= 0) {
      this.y = 0;
    } else if (this.y + this.scaledHeight() >= Game.canvas.height) {
      this.y = Game.canvas.height - this.scaledHeight();
    }

    if (this.x <= 0) {
      this.x = 0;
    } else if (this.x + this.scaledWidth() >= Game.canvas.width) {
      this.x = Game.canvas.width - this.scaledWidth();
    }

    if (this.speed != 0) {
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

}
