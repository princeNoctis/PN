// State variables : pop the bubbles
// Muhammad Sheikh
// Oct,15.2018
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

<<<<<<< HEAD
let x = 100;
let y = 100;


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0,125,0);
  fill(0,0,255);
  ellipse(x,y,25,25);


  if (y >= windowHeight){
    y = 0;
  }

  if (x >= windowWidth){
    x = 0;
  }
=======
let bx;
let by;
let bubbleSize = 75;
let overBubble = false;
let locked = false;
let xOffset = 0.0;
let yOffset = 0.0;
let x,y;

function setup() {
  createCanvas(windowWidth, windowHeight);

  x = width/2;
  y = height/2;
}

function draw() {
  background(200);



  fill(255);
  x = x + random(-4, 2);
  y = y - 3;

>>>>>>> 7e3f7f19440e297c78a52174164d31580dfa5675

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
  ellipse(x, y, 50, 50);
}

<<<<<<< HEAD
function keyIsPressed() {
  while (keyIsDown(38)) {
    y = y - 15;
  }
  if (keyCode === DOWN_ARROW) {
    y = y + 15;
  }
  else if (keyCode === LEFT_ARROW) {
    x = x - 15;
  }
  else if (keyCode === RIGHT_ARROW) {
    x = x + 15;
=======
  if (mouseX > bx-bubbleSize && mouseX < bx+bubbleSize && mouseY > by-bubbleSize && mouseY < by+bubbleSize) {
    overBubble = true;
    if(!locked) {
      fill(244,122,158);
    }
  }
  else {
    fill(244,122,158);
    overBox = false;
  }


function mousePressed() {
  if(overBox) {
    locked = true;
    fill(255, 255, 255);
  }
  else {
    locked = false;
>>>>>>> 7e3f7f19440e297c78a52174164d31580dfa5675
  }
  xOffset = mouseX-bx;
  yOffset = mouseY-by;

}
