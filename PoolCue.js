function PoolCue() {
  this.position = { x: 0, y: 400 };
}

PoolCue.prototype.update = function () {
};

PoolCue.prototype.draw = function () {
  Canvas.drawImage(sprites.poolCue, this.position);
};