// Define a function constructor to help with mathematic operations between vectors

function Vector2(x = 0, y = 0) {
  this.x = x;
  this.y = y;
}

Vector2.prototype.copy = function () {
  return new Vector2(this.x, this.y);
};