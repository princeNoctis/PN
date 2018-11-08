// gridsize assignment
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let gridsize;
let gridposition;
let mapSize;
let pixelposition;

function setup() {
  createCanvas(500, 500);
  frameRate(60);
  mapSize = 20; // 20 grids by 20 grids
  gridposition = createVector(10, 10); // start at 0, 0 (top left)
  gridsize = mapSize/width;
}

function draw() {
  background(0,255,0);
  stroke(127);
  rectMode(CORNER);
  // --- Drawing the grid
  for (let i = 0; i < gridsize; i++) { // rows
    for (let j = 0; j < gridsize; j++) { // columns
      rect(gridsize * i, gridsize * j, gridsize, gridsize);
    }
  }

  // --- Calculating pixelposition from gridposition
  pixelposition = createVector(gridposition.x * gridsize + gridsize/2, gridposition.y * gridsize + gridsize/2);


  // --- Drawing player
  noStroke();
  fill(255, 0, 0);
  rectMode(CENTER);
  rect(pixelposition.x, pixelposition.y, 15, 15);
}


function mouseIsPressed() {
  // Do we want to move vertically or horizontally? Lets see how close to the player in X Y we clicked
  // and calculate the abosulate value
  if (abs(mouseX - pixelposition.x) > abs(mouseY - pixelposition.y)) { // we move in X
    if (mouseX - pixelposition.x > 0) {
      gridposition.x++;
    }
    else {
      gridposition.x--;
    }
  }
  else { // we move in Y
    if (mouseY - pixelposition.y > 0) {
      gridposition.y++;
    }
    else {
      gridposition.y--;
    }
  }
}
