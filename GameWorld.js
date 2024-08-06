// This is resonsible for a the all the 'physical' items in the game. For each frame of animation
// this will be responsible to update the items and draw them on the canvas.
const DELTA = 1 / 100; // The amount to update on each iteration

function GameWorld() {

  this.poolCue = new PoolCue(new Vector2(413, 413));
  this.cueBall = new Ball(
    new Vector2(413, 413),
    this.cueBall.shoot.bind(this.cueBall));
}

GameWorld.prototype.update = function () {

  this.poolCue.update();
  this.cueBall.update(DELTA);
};

GameWorld.prototype.draw = function () {

  Canvas.drawImage(sprites.background, { x: 0, y: 0 });

  this.poolCue.draw();
  this.cueBall.draw();
};