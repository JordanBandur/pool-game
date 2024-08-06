const STICK_ORIGIN = new Vector2(970, 11);
const STICK_SHOT_ORIGIN = new Vector2(950, 11);

function PoolCue(position) {

  this.position = position;
  this.rotation = 0;
  this.origin = STICK_ORIGIN.copy();
  this.power = 0;
  this.onShoot = onShoot;
}

PoolCue.prototype.update = function () {

  if (Mouse.left.down) {
    this.increasePower();
  } else {
    this.shoot();
  }

  this.updateRotation();
};

PoolCue.prototype.draw = function () {
  Canvas.drawImage(sprites.poolCue, this.position, this.origin, this.rotation);
};

PoolCue.prototype.updateRotation = function () {
  // Used the information from this article to find the formula for calculating the rotation:
  // https://sinepost.wordpress.com/2012/02/16/theyve-got-atan-you-want-atan2/
  let opposite = Mouse.position.y - this.position.y;
  let adacent = Mouse.position.x - this.position.x;

  this.rotation = Math.atan2(opposite, adacent);
};

PoolCue.prototype.increasePower = function () {
  this.power += 100;
  this.origin.x += 5;
};

PoolCue.prototype.shoot = function () {
  this.onShoot(this.power, this.draw.rotation);
  this.power = 0;
  this.origin = STICK_SHOT_ORIGIN.copy();
};