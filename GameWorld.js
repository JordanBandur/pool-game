// This is resonsible for a the all the 'physical' items in the game. For each frame of animation
// this will be responsible to update the items and draw them on the canvas.

const DELTA = 1 / 178; // The amount to update on each iteration

function GameWorld() {

  this.poolBalls = CONSTANTS.ballParams.map(params => new Ball(...params));

  this.cueBall = this.poolBalls.find(ball => ball.color === COLOR.WHITE);
  this.poolCue = new PoolCue(
    new Vector2(413, 413),
    this.poolCue.shoot.bind(this.cueBall));

  // Contains the values of the x,y borders of the pool table
  this.table = {
    TopY: 57,
    RightX: 1443,
    BottomY: 768,
    LeftX: 57
  };
}

GameWorld.prototype.handleCollisions = function () {
  for (let i = 0; i < this.poolBalls.length; i++) {
    this.poolBalls[i].collideWith(this.table);
    for (let j = i; j < this.ballIsMoving.length; j++) {
      const firstBall = this.poolBalls[i];
      const secondBall = this.poolBalls[j];
      firstBall.collideWith(secondBall);
    }
  }
};

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