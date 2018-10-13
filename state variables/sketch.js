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
let state;
let ballArray = [];




function setup() {
  createCanvas(windowWidth, windowHeight);
  box = windowWidth;
  boy = windowHeight;
  ellipseMode(RADIUS);
  noStroke();
  state = 1;
}

function draw() {
  background(0);

  stroke(50);
  if (mouseX > box-circleSize && mouseX < box+circleSize &&
      mouseY > boy-circleSize && mouseY < boy+circleSize) {
    overcircle = true;
  }
  else {
    fill(50,200,0);
  }
  ellipse(RADIUS)


  if (state === 1) {
    displayStartScreen();
  }
  ellipse(RADIUS);

  ellipse(box, boy, circleSize, circleSize);
  translate(box,boy);
  box = box + random(-8, 2);
  boy = boy - 4;

  if (boy < 0) {
    boy = windowHeight;
  }
  if (box < 0) {
    box = windowWidth;
  }


}

function score() {

}

function mousePressed() {
  if(overcircle) {
    fill(random(255, 255, 255));
  }
  xOffset = mouseX-box;
  yOffset = mouseY-boy;
}

function displayStartScreen() {
  let buttonWidth = 400;
  let buttonHeight = 200;
  let leftSide = width / 2 - buttonWidth / 2;
  let topSide = height / 2 - buttonHeight / 2;
  let rightSide = leftSide + buttonWidth;
  let bottomSide = topSide + buttonHeight;

  fill(0);
  if (mouseX >= leftSide && mouseX <= rightSide && mouseY >= topSide && mouseY <= bottomSide) {
    fill(125,rect(leftSide, topSide, buttonWidth, buttonHeight));
    if (mouseIsPressed) {
      state = 2;
    }
  }

  rect(leftSide, topSide, buttonWidth, buttonHeight);
}

function switchScreen() {
  if (state === 2) {
    draw();
  }
}
