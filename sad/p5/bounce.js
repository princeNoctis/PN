/ Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let dvd;
let x, y;
let dx, dy;

function preload() {
  dvd = loadImage("assets/dvd-logo-png-transparent.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width/2;
  y = height/2;
  dx = random(3, 8);
  dy = random(3, 8);
}

function draw() {
  background(80, 80, 80);
  image(dvd, 0, 0);
}
