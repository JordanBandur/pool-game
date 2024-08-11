function PoolCue(position) {
  this.position = position;
  this.rotation = 0;
  this.origin = CONSTANTS.poolCueOrigin.copy();
  this.power = 0;
  this.onShoot = onShoot;
  this.shot = false;
}

PoolCue.prototype.update = function () {

  if (this.shot) {
    return;
  }

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
  if (this.power > CONSTANTS.maxPower) {
    return;
  }

  this.power += CONSTANTS.powerInterval;
  this.origin.x += CONSTANTS.originXInterval;
};

PoolCue.prototype.shoot = function () {
  this.onShoot(this.power, this.draw.rotation);
  this.power = 0;
  this.origin = CONSTANTS.poolCueShotOrigin.copy();
  this.shot = true;
};

PoolCue.prototype.reposition = function (position) {
  this.position = position.copy();
  this.origin = CONSTANTS.poolCueOrigin.copy();
  this.shot = false;
};