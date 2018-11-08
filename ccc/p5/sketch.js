// gridsize assignment
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let rows = 5;
let cols = 5;
let cellSize;


function preload() {
  gridsize = loadStrings("assets/Maze.txt");
}


function setup() {
  createCanvas(500, 500);
  frameRate(60);
  rows = gridsize[0].length;
  cols = gridsize[0].length;
  cellSize = width / cols;
  cleanUpTheGrid();
  mapSize = 20; // 20 grids by 20 grids
  gridposition = createVector(10, 10); // start at 0, 0 (top left)
}

function draw() {
  background(0,255,0);
  stroke(127);
  rectMode(CORNER);
  time();
  displayGrid();
  // --- Drawing the grid


  // --- Calculating pixelposition from gridposition
  pixelposition = createVector(gridposition.x * gridsize + (gridsize/2), gridposition.y * gridsize + (gridsize/2));


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


function time() {
  let timer = 20;
  stroke(timer);
  fill(0,timer)
  textSize(25);
  text(timer, 250, 50);
}


function cleanUpTheGrid() {
  for (let i=0; i<gridsize.length; i++) {
    gridsize[i] = gridsize[i].split("");  //turns it into a 2d array
  }
}

function displayGrid() {
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      if (gridsize[y][x] === "0") {
        fill(0);
      }
      else if (gridsize[y][x] === "5") {
        fill(255);
      }
      rect(x*cellSize, y*cellSize, cellSize, cellSize);
    }
  }
}
