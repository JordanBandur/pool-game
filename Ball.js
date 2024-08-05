const BALL_ORIGIN = new Vector2(25, 25);

function Ball(position) {
  this.position = position;
}

Ball.prototype.update = function () {

};

Ball.prototype.draw = function () {
  Canvas.drawImage(sprites.cueBall, this.position, BALL_ORIGIN);
};