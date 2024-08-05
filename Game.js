// Defines a Game object using a function constructor.
// The Game object has methods for initializing, starting, and running the main loop of the game.
// It also creates an instance of the Game object named PoolGame.

// Constructor function for Game object
function Game() {

}

// Method to initialize the game world
Game.prototype.init = function () {
  // Create a new instance of GameWorld and assign it to the gameWorld property
  this.gameWorld = new GameWorld();
};

// Method to start the game
Game.prototype.start = function () {

  PoolGame.init();
  PoolGame.mainLoop();
};

// Method for the main game loop
Game.prototype.mainLoop = function () {

  Canvas.clear();
  PoolGame.gameWorld.update();
  PoolGame.gameWorld.draw();
  Mouse.reset();

  requestAnimationFrame(PoolGame.mainLoop); // Request the next frame, continuing the loop
};

// Create an instance of the Game object
let PoolGame = new Game();