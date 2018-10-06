// State variables : pop the bubbles
// Muhammad Sheikh
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let bx;
let by;
let bubbleSize = 75;
let overBubble = false;
let locked = false;
let xOffset = 0.0;
let yOffset = 0.0;

function setup() {
  createCanvas(windowWidth, windowHeight);

  x = width/2;
  y = height/2;
}

function draw() {
  background(200);


  noStroke(50);
  fill(255);
  x = x + random(-4, 2);
  y = y - 3;


  if (by < 0) {
    y = height;
  }
  if (bx < 0) {
    x = width;
  }
}

function bubbles() {
  noStroke(50);
  fill(255);
  ellipse(bx, by, 50, 50);
}

  if (mouseX > bx-boxSize && mouseX < bx+boxSize &&
      mouseY > by-boxSize && mouseY < by+boxSize) {
    overBox = true;
    if(!locked) {
      stroke(255);
      fill(244,122,158);
    }
  } else {
    stroke(156,39,176);
    fill(244,122,158);
    overBox = false;
  }


function mousePressed() {
  if(overBox) {
    locked = true;
    fill(255, 255, 255);
  } else {
    locked = false;
  }
  xOffset = mouseX-bx;
  yOffset = mouseY-by;

}
