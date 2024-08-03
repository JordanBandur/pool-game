// This is resonsible for a the all the 'physical' items in the game. For each frame of animation
// this will be responsible to update the items and draw them on the canvas.

function GameWorld() {

}

GameWorld.prototype.update = function () {

};

GameWorld.prototype.draw = function () {

  Canvas.drawImage(sprites.background, { x: 0, y: 0 });
};