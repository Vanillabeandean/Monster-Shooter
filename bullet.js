// var playerBullets = [];
//
//
//
//
// function Bullet(I) {
//   I.active = true;
//
//   I.xVelocity = 0;
//   I.yVelocity = -I.speed;
//   I.width = 3;
//   I.height = 3;
//   I.color = "#000";
//
//   I.inBounds = function() {
//     return I.x >= 0 && I.x <= CANVAS_WIDTH &&
//       I.y >= 0 && I.y <= CANVAS_HEIGHT;
//   };
//
//   I.draw = function() {
//     canvas.fillStyle = this.color;
//     canvas.fillRect(this.x, this.y, this.width, this.height);
//   };
//
//   I.update = function() {
//     I.x += I.xVelocity;
//     I.y += I.yVelocity;
//
//     I.active = I.active && I.inBounds();
//   };
//
//   return I;
// }
//
//
// player.shoot = function() {
//   var bulletPosition = this.midpoint();
//
//   playerBullets.push(Bullet({
//     speed: 5,
//     x: bulletPosition.x,
//     y: bulletPosition.y
//   }));
// };
//
// player.midpoint = function() {
//   return {
//     x: this.x + this.width/2,
//     y: this.y + this.height/2
//   };
// };
//
//
// function update() {
//   ...
//   playerBullets.forEach(function(bullet) {
//     bullet.update();
//   });
//
//   playerBullets = playerBullets.filter(function(bullet) {
//     return bullet.active;
//   });
// }
//
// function draw() {
//   ...
//   playerBullets.forEach(function(bullet) {
//     bullet.draw();
//   });
// }
