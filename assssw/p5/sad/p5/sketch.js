//Project Title
// Muhammad.S
// Date
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let dvd;
let x, y;
let dx, dy;

function preload() {
  dvd = loadImage("assets/dvd.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width/2 - dvd.width / 2;
  y = height/2 - dvd.height / 2;
  dx = random(3, 8);
  dy = random(3, 8);
}

function draw() {
  moveDVD();
  displayDVD();
}

function moveDVD() {
  // apply speed
  x += dx;
  y += dy;

  //check for bounce
  if (y + dvd.height >= height || y <= 0) {
    dy = dy * -1;
  }
  if (x + dvd.width >= width || x <= 0) {
    dx = dx * -1;
  }
}

function displayDVD() {
  background(80, 80, 80);
  image(dvd, x, y);
}
