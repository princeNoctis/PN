// grid assignment
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let maze;
let rows = 5;
let cols = 5;
let cellSize;

function preload() {
  maze = loadStrings("assets/maze.txt")
}

function setup() {
  createCanvas(500, 500);
  frameRate(60);
  rows = grid[0].length;
  cols = grid[0].length;
  cellSize = width / cols;
  mapSize = 20; // 20 grids by 20 grids
  gridsize = width/mapSize; // assuming width and height are the same value
  gridposition = createVector(10, 10); // start at 0, 0 (top left)
}

function draw() {
  background(0,255,0);
  stroke(127);
  noFill();
  rectMode(CORNER);
  displayGrid();

  // --- Drawing the grid
  for (let i = 0; i < gridsize; i++) { // rows
    for (let j = 0; j < gridsize; j++) { // columns
      rect(gridsize * i, gridsize * j, gridsize, gridsize);
    }
  }


  // --- Calculating pixelposition from gridposition
  pixelposition = createVector(gridposition.x * gridsize + (gridsize/2), gridposition.y * gridsize + (gridsize/2));


  // --- Drawing player
  noStroke();
  fill(255, 0, 0);
  rectMode(CENTER);
  rect(pixelposition.x, pixelposition.y, gridsize/2, gridsize/2);
}

function displayGrid() {
  for (let y = 0; y < gridsize; y++) {
    for (let x = 0; x < gridsize; x++) {
      if (maze[y][x] === "5") {
        fill(0,0,255);
      }
      else if (maze[y][x] === "0"){
        fill(255);
      }
      else {
        fill(0,150,0);
      }
      noStroke();
    }
  }
}



function mousePressed() {
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
