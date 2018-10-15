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
let time = 5;
let state;


function setup() {
  createCanvas(windowWidth, windowHeight);
  cx = width/2.0;
  cy = height/2.0;
  ellipseMode(RADIUS);
  strokeWeight(2);
  state = 1;
}

function draw() {
  if (state === 1) {
    displayStartScreen();
  }
  else if (state === 2) {
    displaygame();
  }
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
    fill(125);
    if (mouseIsPressed) {
      state = 2;
    }
  }

  rect(leftSide, topSide, buttonWidth, buttonHeight);
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

function timer() {
  textAlign(CENTER, CENTER);
  textSize(25);
  text(time, width/2, height/2);
  if (frameCount % 60 === 0 && time > 0) {
    time --;
  }
  if (time === 0) {
    text("!!GAME OVER!!", width/2, height*0.7);
    noLoop();
  }
}

function displaygame() {
  background(234,12,123);

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
  timer();
  // Jiggling randomly on the horizontal axis
  cx = cx + random(-1, 1);
  // Moving up at a constant speed
  cy = cy - 1;

  // Reset to the bottom
  if (cy < 0) {
    cy = height;
  }
  // Draw the box
  ellipse(cx, cy, bocSize, bocSize);

}

function keyTyped() {
  if (key === "r") {
    redraw();
  }
}

function mouseReleased() {
  locked = false;
}
