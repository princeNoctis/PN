// Project Title
// Muhammad Sheikh
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let x = 200;
let y = 200;
let state;


function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(255);
  fill(0);
  ellipse(x,y,50,50);

  if (x >= 600){
    x = 0;
  }

}


function keyPressed() {
  if (keyCode === UP_ARROW) {
    y = y - 10;
  }
  else if (keyCode === DOWN_ARROW) {
    y = y + 10;
  }
  if (keyCode === LEFT_ARROW) {
    x = x - 5;
  }
  else if (keyCode === RIGHT_ARROW) {
    x = x + 5;
  }

}
