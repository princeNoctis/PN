// Grid Assignment
// Muhammad Sheikh
// oct.27,2018
// Extra for Experts:
//

let playerWidth = 20;
let playerHeight = 20 ;
let moveY = 20;
let moveX = 35;
let rows = 5;
let cols = 5;
let grid;
let cellSize;

function preload() {
  grid = loadStrings("assets/Levels.txt");
}

function setup() {
  createCanvas(600, 600);
  rows = grid[0].length;
  cols = grid[0].length;
  cellSize = width / cols;
  //grid = createRandom2dArray(cols, rows);
  cleanUpTheGrid();
}

function draw() {
  background(255);
  displayGrid();
  player();
}

function cleanUpTheGrid() {
  for (let i=0; i<grid.length; i++) {
    grid[i] = grid[i].split("");  //turns it into a 2d array
  }
}

function displayGrid() {
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      if (grid[y][x] === "2") {
        fill(150);
      }
      else if (grid[y][x] === "0"){
        fill(0,150,0);
      }
      else {
        fill(255);
      }
      noStroke();
      rect(x*cellSize, y*cellSize, cellSize, cellSize);
    }
  }
}


function keyPressed(){
  if (key === "d"){
    moveX = moveX++;
  }
}


function player(){
  fill(255);
  ellipse(moveX,moveY,playerWidth,playerHeight);
}
