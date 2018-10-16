// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
// global variables

let x;
let y;
let bocSize = 35;
let overBoc = false;
let locked = false;
let xOffset = 0.0;
let yOffset = 0.0;
let time = 1;
let state;
let score;


function setup() {
  createCanvas(windowWidth, windowHeight);
  ellipseMode(RADIUS);
  strokeWeight(2);
  state = 1;
  x = width / 2;
  y = height;
  score = 0;
  draw();
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
  let inside = color(204, 102, 0);
  let middle = color(204, 153, 0);
  let outside = color(153, 51, 0);

  fill(0,0,240);
  if (mouseX >= leftSide && mouseX <= rightSide && mouseY >= topSide && mouseY <= bottomSide) {
    fill(125);
    if (mouseIsPressed) {
      state = 2;
    }
  }
  push();
  translate(80, 80);
  fill(outside);
  textAlign(CENTER, CENTER);
  textSize(25);
  text("CLICK RECTANGLE",400,400);
  pop();
  rect(leftSide, topSide, buttonWidth, buttonHeight);
}

function mousePressed() {
  if(overBoc) {
    locked = true;
    fill(255, 255, 255);
  } else {
    locked = false;
  }

  xOffset = mouseX-x;
  yOffset = mouseY-y;
  let d = dist(mouseX, mouseY, x, y);
  if (d < 35) {
    score = score + 1;
    fill(255,0,0);
    redraw();
  }
}

function timer() {
  textAlign(CENTER, CENTER);
  textSize(25);
  text(time, 50, 50);
  if (frameCount % 60 === 0 && time > 0) {
    time --;
  }
  if (time === 0) {
    text("!!GAME OVER!!", width/2, height*0.7);
    text("score: " + score, width/2, height*0.5);
    noLoop();
  }
}

function displaygame() {

  text("score: " + score, width/2, height*0.5);
  background(234,150,50);
  ellipse(x,y,bocSize,bocSize);
  // Jiggling randomly on the horizontal axis
  x = x + random(-10, 8);
  // Moving up at a constant speed
  y = y - 5;

  // Reset to the bottom
  if (y < 0) {
    y = random(height);
    fill(0);
  }else if (x < 0) {
    x = random(width);
    fill(0);
  }
  // Test if the cursor is over the box
  if (mouseX > x-bocSize && mouseX < x+bocSize &&
      mouseY > y-bocSize && mouseY < y+bocSize) {
    overBoc = true;
    if(!locked) {
      stroke(255);
      fill(255);
    }
  } else {
    stroke(156,39,176);
    fill(255);
    overBoc = false;
  }
  timer();


}

function keyTyped() {
  if (key === "r") {
    setup();
  }
}

function mouseReleased() {
  locked = false;
}
