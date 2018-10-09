// State variables
// Muhammad Sheikh
// Oct,15.2018
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

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

}


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
  }

}
