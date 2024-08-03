// Define a function constructor to help with mathematic operations between vectors

function Vector2(x, y) {
  this.x = typeof x !== 'undefined' ? x : 0;
  this.y = typeof y !== 'undefined' ? y : 0;
}