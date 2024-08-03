let sprites = {};
let assertsStillLoading = 0; // Counter to track the number of assets still loading

// Function to check if all assets are loaded
function assetsLoadingLoop(callback) {
  if (assetsStillLoading > 0) {
    // Continue checking in the next animation frame
    requestAnimationFrame(assetsLoadingLoop.bind(this, callback));
  } else {
    // If all assets are loaded, execute the callback
    callback();
  }
}

// Function to load all assets and trigger a callback once done
function loadAssets(callback) {

  // Helper function to load an individual sprite
  function loadSprite(fileName) {
    assertsStillLoading++;

    let spriteImage = new Image();
    spriteImage.src = "./assets/sprites/" + fileName;

    // When the image is successfully loaded
    spriteImage.onload = function () {
      assertsStillLoading--;
    };

    return spriteImage;
  }

  sprites.background = loadSprite('spr_background.png');
  sprites.poolCue = loadSprite('spr_stick.png');

  // Start checking if all assets are loaded
  assetsLoadingLoop(callback);
}
