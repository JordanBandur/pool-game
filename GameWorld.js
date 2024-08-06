// This is resonsible for a the all the 'physical' items in the game. For each frame of animation
// this will be responsible to update the items and draw them on the canvas.

function GameWorld() {

  this.poolCue = new PoolCue(new Vector2(413, 413));
  this.cueBall = new Ball(new Vector2(413, 413), this.cueBall.shoot);
}

GameWorld.prototype.update = function () {

  this.poolCue.update();
  this.cueBall.update();
};

GameWorld.prototype.draw = function () {

  Canvas.drawImage(sprites.background, { x: 0, y: 0 });

  this.poolCue.draw();
  this.cueBall.draw();
};