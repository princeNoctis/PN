// Grid Assignment
// Muhammad Sheikh
// oct.27,2018
// Extra for Experts:
//

let playerWidth = 20;
let playerHeight = 20;
let rows = 5;
let cols = 5;
let grid;
let cellSize;
let x;
let y;
let play = 2;

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
}

function cleanUpTheGrid() {
  for (let i=0; i<grid.length; i++) {
    grid[i] = grid[i].split("");  //turns it into a 2d array
  }
}


function player(){
  if (grid[y][x] === "2") {
    return play = true;
  }
}

function displayGrid() {
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      if (grid[y][x] === "2") {
        fill(0,0,255);
      }
      else if (grid[y][x] === "0"){
        fill(255);
      }
      else if (grid[y][x] === "3"){
        fill(255,0,0);
      }
      else {
        fill(0,150,0);
      }
      noStroke();
      rect(x*cellSize, y*cellSize, cellSize, cellSize);
    }
  }
}


function keyPressed(){
  for (let i = 0; i<"1";i++){
    if (keyCode === UP_ARROW){
      grid[6][3] = "2"
      return (grid[6][2] = "0");
    }
  }
}
