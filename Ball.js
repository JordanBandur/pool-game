const BALL_ORIGIN = new Vector2(25, 25);

function Ball(position) {
  this.position = position;
  this.velocity = new Vector2();
}

Ball.prototype.update = function (delta) {
  this.position.addTo(this.velocity.mult(delta));
};

Ball.prototype.draw = function () {

  Canvas.drawImage(sprites.cueBall, this.position, BALL_ORIGIN);
};

Ball.prototype.shoot = function (power, rotation) {

  this.velocity = new Vector2(power * Math.cos(rotation), power * Math.sign(rotation));
};