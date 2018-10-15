// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
// global variables

let cx;
let cy;
let bocSize = 30;
let overBoc = false;
let locked = false;
let xOffset = 0.0;
let yOffset = 0.0;

function setup() {
  createCanvas(720, 400);
  cx = width/2.0;
  cy = height/2.0;
  ellipseMode(RADIUS);
  strokeWeight(2);
}

function draw() {
  background(237,34,93);

  // Test if the cursor is over the box
  if (mouseX > cx-bocSize && mouseX < cx+bocSize &&
      mouseY > cy-bocSize && mouseY < cy+bocSize) {
    overBoc = true;
    if(!locked) {
      stroke(255);
      fill(244,122,158);
    }
  } else {
    stroke(156,39,176);
    fill(244,122,158);
    overBoc = false;
  }

  // Draw the box
  ellipse(cx, cy, bocSize, bocSize);
}

function mousePressed() {
  if(overBoc) {
    locked = true;
    fill(255, 255, 255);
  } else {
    locked = false;
  }
  xOffset = mouseX-bx;
  yOffset = mouseY-by;

}

function mouseReleased() {
  locked = false;
}
