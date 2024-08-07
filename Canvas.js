
// Defines a Canvas2D object using a function constructor.
// The Canvas2D object is responsible for managing a canvas element and its 2D drawing context,
// providing methods to clear the canvas and draw images on it.

// Function constructor for Canvas2D object
function Canvas2D() {
  this._canvas = document.getElementById("screen");
  // Get the 2D drawing context from the canvas element
  this._canvasContext = this._canvas.getContext("2d");
}

Canvas2D.prototype.clear = function () {
  // Clear the canvas by setting a rectangle covering the whole canvas to be empty
  this._canvasContext.clearRect(0, 0, this._canvas.width, this._canvas.height);
};

// Method to draw an image on the canvas at a specific position
Canvas2D.prototype.drawImage = function (image, position, origin, rotation = 0) {

  if (!position) {
    position = new Vector2();
  }

  if (!origin) {
    origin = new Vector2();
  }

  this._canvasContext.save();
  this._canvasContext.translate(position.x, position.y);
  this._canvasContext.rotation(rotation);
  // Draw the image at the specified x and y coordinates
  this._canvasContext.drawImage(image, -origin.x, -origin.y);
  this._canvasContext.restore();
};

let Canvas = new Canvas2D();
