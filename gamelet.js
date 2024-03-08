const ball = document.getElementById("ball"); // Get the ball
document.addElementListener("keydown", handleKeyPress); // Listen for Keys
let position = 0; // Starting Position

/*
handleKeyPress
responds to certain key presses by updating position
*/

function handleKeyPress(e) { 
  if (e.code === "ArrowLeft") {
    position = position - 10;
  }
  if (e.code === "ArrowRight") {
    position = position + 10;
  }
  if (position < 0) {
    position = 0;
  }
  refresh(); // Reposition the ball
  /*
Refresh changes the position of the ball
  */
}
function refresh() {
  ball.style.left = position + "px";
}
