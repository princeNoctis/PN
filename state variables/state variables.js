// State variables : pop the bubbles
// Muhammad Sheikh
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"



var x, y;

function setup() {
  createCanvas(windowWidth, windowHeight);
  // Starts in the middle
  x = width / 2;
  y = height;
}

function draw() {
  background(200);

  // Draw a circle
  noStroke(50);
  fill(255);
  ellipse(x, y, 24, 24);
  ellipse(x, y, 50, 50);

  // Jiggling randomly on the horizontal axis
  x = x + random(-4, 2);
  // Moving up at a constant speed
  y = y - 3;

  // Reset to the bottom
  if (y < 0) {
    y = height;
  }
  if (x < 0) {
    x = width;
  }
}
