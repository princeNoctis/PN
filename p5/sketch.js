// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let cols = 5;
let rows = 5;
let largo = 20;
let r = 0;
let g = 0 ;
let b = 0;

function setup() {
  createCanvas(300,300);
}

function draw() {
  for (let x = 0; x < cols; x+=20){
    for (let y = 0; y < rows; y+=20){
      stroke(255);
      fill(r,g,b);
      rect(x,y,largo+1,largo+1);
    }
  }


  if ( r > 255 ){
    r = 0;
  }
  if ( g > 255 ){
    g = 0;
  }

  if ( b > 255 ){
    b = 0;
  }
}
