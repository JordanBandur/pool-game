const STICK_ORIGIN = new Vector2(970, 11);

function PoolCue(position) {

  this.position = position;
}

PoolCue.prototype.update = function () {

};

PoolCue.prototype.draw = function () {
  Canvas.drawImage(sprites.poolCue, this.position, STICK_ORIGIN);
};