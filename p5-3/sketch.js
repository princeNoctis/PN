// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let cols = 3;
let rows = 3;
let colors = [];

function setup() {
  createCanvas(300, 300);
  for (let i = 0; i<cols; i++ ){
    colors[i] = [];
    for (let j = 0; j<rows; j++ ){
      colors[i][j] = random(255);
    }
  }
}

function draw() {

  background(51);
  for (let i = 0; i<cols; i++ ){
    for (let j = 0; j<rows; j++ ){
      let x = i*30;
      let y = j*30;
      stroke(0);
      fill(colors[i][j]);
      rect(x,y,30,30);
    }
  }
}

function newGrid() {
}

function mouseClicked() {
}
