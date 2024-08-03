// Defines and handles mouse events for a MouseHandler object.
// It tracks the state of the mouse buttons (left, middle, right) and the mouse position.

function handleMouseMove(e) {
  let x = e.pageX;
  let y = e.pageY;

  Mouse.position = new Vector2(x, y);
}

function handleMouseDown(e) {
  handleMouseMove(e);

  // Update the state of the specified mouse button
  function updateMouseButton(button) {
    if (!button.down) {
      button.pressed = true;
    }
    button.down = true;
  }

  // Determine which mouse button was pressed and update its state
  switch (e.which) {
    case 1:
      updateMouseButton(Mouse._left);
      break;
    case 2:
      updateMouseButton(Mouse._middle);
      break;
    case 3:
      updateMouseButton(Mouse._right);
      break;
  }
}

function handleMouseUp(evt) {
  handleMouseMove(evt);

  // Update the state of the specified mouse button
  function resetMouseButton(button) {
    button.down = false;
  }

  // Determine which mouse button was released and update its state
  switch (evt.which) {
    case 1:
      resetMouseButton(Mouse._left);
      break;
    case 2:
      resetMouseButton(Mouse._middle);
      break;
    case 3:
      resetMouseButton(Mouse._right);
      break;
  }
}

function MouserHandler() {

  this.left = new ButtonState();
  this.middle = new ButtonState();
  this.right = new ButtonState();

  this.position = new Vector2();

  document.onmousemove = handleMouseMove;
  document.onmousedown = handleMouseDown;
  document.onmouseup = handleMouseUp;
}

MouserHandler.prototype.reset = function () {

  this.left.pressed = false;
  this.middle.pressed = false;
  this.right.pressed = false;
};

let Mouse = new MouserHandler();