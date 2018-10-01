// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let x, y;
let dx, dy;


function setup() {
  createCanvas(800,600);
  x = width/2 - rect.width / 2;
  y = height/2 - rect.height / 2;
  dx = random(3, 8);
  dy = random(3, 8);
}

function draw() {
  rect(25,25,25,25);
  fill(176,165,156);
}

function moveRect() {
  // apply speed
  x += dx;
  y += dy;

  //check for bounce
  if (y + rect.height >= height || y <= 0) {
    dy = dy * -1;
  }
  if (x + rect.width >= width || x <= 0) {
    dx = dx * -1;
  }
}
