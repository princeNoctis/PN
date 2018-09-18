/ Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let dvd;


function preload() {
  dvd = loadImage("assets/dvd-logo-png-transparent.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(80, 80, 80);
  image(dvd, 0, 0);
}
