// Project Title
// Muhammad Sheikh
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let x = 200;
let y = 200;

// Preload Function
function preload(){

}



function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  fill(0);
  ellipse(x,y,50,50);

  if (x > width){
    x = 0;
  }
  if (y <= height){
    y = 0;
  }

}


function keyPressed() {
  if (keyCode === UP_ARROW) {
    y = y - 15;
  }
  else if (keyCode === DOWN_ARROW) {
    y = y + 15;
  }
  if (keyCode === LEFT_ARROW) {
    x = x - 15;
  }
  else if (keyCode === RIGHT_ARROW) {
    x = x + 15;
  }

}
