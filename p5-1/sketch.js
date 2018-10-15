// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let cx;
let cy;
let circleSize = 75;
let overcircle = false;
let locked = false;
let xOffset = 0.0;
let yOffset = 0.0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  cx = width/2.0;
  cy = height/2.0;
  ellipseMode(RADIUS);
  strokeWeight(2);
}

function draw() {
  background(0,0,200);

  // Test if the cursor is over the box
  if (mouseX > cx-circleSize && mouseX < cx+circleSize &&
      mouseY > cy-circleSize && mouseY < cy+circleSize) {
    overcircle = true;
    if(!locked) {
      stroke(255);
      fill(244,122,158);
    }
  } else {
    stroke(156,39,176);
    fill(244,122,158);
    overcircle = false;
  }

  // Draw the box
  ellipse(cx, cy, circleSize, circleSize);
}

function mousePressed() {
  if(overcircle) {
    locked = true;
    fill(255, 255, 255);
  } else {
    locked = false;
  }
  xOffset = mouseX-cx;
  yOffset = mouseY-cy;

}

function mouseReleased() {
  locked = false;
}
