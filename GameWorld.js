// This is resonsible for a the all the 'physical' items in the game. For each frame of animation
// this will be responsible to update the items and draw them on the canvas.

const DELTA = 1 / 100; // The amount to update on each iteration

function GameWorld() {

  this.poolBalls = [
    new Ball(new Vector2(1056, 433), COLOR.RED),//3
    new Ball(new Vector2(1090, 374), COLOR.RED),//4
    new Ball(new Vector2(1126, 393), COLOR.RED),//8
    new Ball(new Vector2(1126, 472), COLOR.RED),//10;
    new Ball(new Vector2(1162, 335), COLOR.RED),//11
    new Ball(new Vector2(1162, 374), COLOR.RED),//12
    new Ball(new Vector2(1162, 452), COLOR.RED),//14
    new Ball(new Vector2(1022, 413), COLOR.YELLOW),//1
    new Ball(new Vector2(1056, 393), COLOR.YELLOW),//2
    new Ball(new Vector2(1090, 452), COLOR.YELLOW),//6
    new Ball(new Vector2(1126, 354), COLOR.YELLOW),//7
    new Ball(new Vector2(1126, 433), COLOR.YELLOW),//9
    new Ball(new Vector2(1162, 413), COLOR.YELLOW),//13
    new Ball(new Vector2(1162, 491), COLOR.YELLOW)//15
  ].map(params => new Ball(params[0], params[1]));

  this.cueBall = this.poolBalls[this.poolBalls.length - 1];
  this.poolCue = new PoolCue(
    new Vector2(413, 413),
    this.poolCue.shoot.bind(this.cueBall));
}

GameWorld.prototype.update = function () {

  this.handleCollisions();

  this.poolCue.update();

  for (let i = 0; i < this.poolBalls.length; i++) {
    this.poolBalls[i].update(DELTA);
  }

  if (!this.ballIsMoving && this.poolCue.shot) {
    this.poolCue.reposition(this.cueBall.position);
  }
};

GameWorld.prototype.draw = function () {

  Canvas.drawImage(sprites.background, { x: 0, y: 0 });

  for (let i = 0; i < this.poolBalls.length; i++) {
    this.poolBalls[i].draw(DELTA);
  }

  this.poolCue.draw();
};

GameWorld.prototype.ballIsMoving = function () {
  return this.cueBall.moving;
};