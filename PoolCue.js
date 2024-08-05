const STICK_ORIGIN = new Vector2(970, 11);

function PoolCue(position) {

  this.position = position;
  this.rotation = 0;
}

PoolCue.prototype.update = function () {

  this.updateRotation();
};

PoolCue.prototype.draw = function () {
  Canvas.drawImage(sprites.poolCue, this.position, STICK_ORIGIN);
};

PoolCue.prototype.updateRotation = function () {
  // Used the information from this article to find the formula for calculating the rotation:
  // https://sinepost.wordpress.com/2012/02/16/theyve-got-atan-you-want-atan2/
  let opposite = Mouse.position.y - this.position.y;
  let adacent = Mouse.position.x - this.position.x;

  this.rotation = Math.atan2(opposite, adacent);
};