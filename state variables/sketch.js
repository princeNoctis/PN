// Project Title
// Muhammad Sheikh
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let box;
let boy;
let circleSize = 30;
let overcircle = false;
let xOffset = 0.0;
let yOffset = 0.0;
let x, y;


function setup() {
  createCanvas(windowWidth, windowHeight);
  box = width/2.0;
  boy = height/2.0;
  ellipseMode(RADIUS);
  noStroke();
}

function draw() {
  background(0);
  stroke(50);
  if (mouseX > box-circleSize && mouseX < box+circleSize &&
      mouseY > boy-circleSize && mouseY < boy+circleSize) {
    overcircle = true;
  }
  else {
    fill(244,56,200);
  }
  ellipse(box, boy, circleSize, circleSize);
  translate(box,boy);
  box = box + random(-3, 2);
  boy = boy - 1;

  if (boy < 0) {
    boy = windowHeight;
  }
  if (box < 0) {
    box = windowWidth;
  }

}

function mousePressed() {
  if(overcircle) {
    fill(random(255, 255, 255));
  }
  xOffset = mouseX-box;
  yOffset = mouseY-boy;

}
