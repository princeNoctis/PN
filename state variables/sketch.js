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
let state;
let ballArray = [];



//function preload() {
  //startScreen = loadImage("assets/moonwalk.jpg");
//}

function setup() {
  createCanvas(windowWidth, windowHeight);
  box = windowWidth;
  boy = windowHeight;
  ellipseMode(RADIUS);
  stroke(10);
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
    overcircle = false;
  }

  if (state === 1) {
    displayStartScreen();
  }

  fill(255);
  ellipse(box, boy, circleSize, circleSize);
  translate(box,boy);
  box = box + random(-8, 2);
  boy = boy - 4;

  if (boy < 0) {
    boy = windowHeight;
    fill(255);
  }
  if (box < 0) {
    box = windowWidth;
    fill(255);
  }


}

function score() {

}

function mousePressed() {
  if(overcircle === true) {
    fill(0,0,255);
  }
  xOffset = mouseX-box;
  yOffset = mouseY-boy;
}

function displayStartScreen() {
  let buttonWidth = windowWidth;
  let buttonHeight = windowHeight;
  let leftSide = width / 2 - buttonWidth / 2;
  let topSide = height / 2 - buttonHeight / 2;
  let rightSide = leftSide + buttonWidth;
  let bottomSide = topSide + buttonHeight;

  if (mouseX >= leftSide && mouseX <= rightSide && mouseY >= topSide && mouseY <= bottomSide) {
    fill(0);
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
