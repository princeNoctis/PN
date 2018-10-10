// Project Title
// Muhammad Sheikh
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let overCircle = false;
let menu;
let circle;
let x, y;

function setup() {
  createCanvas(720, 400);

  x = width / 2;
  y = height;
}

function draw() {
  background(0);
  overCircle = dist(mouseX,mouseY,x,y)
  if overCircle < RADIUS {
    fill(134,155,243);
  }
  else {
    fill(255);
  }


  stroke(50);

  circle = ellipse(x, y,24, 24);


  x = x + random(-3, 2);

  y = y - 1;


  if (y < 0) {
    y = height;
  }
}
