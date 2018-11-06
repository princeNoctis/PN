// Grid Assignment
// Muhammad Sheikh
// oct.27,2018
// Extra for Experts:
//

let playerWidth;
let playerHeight;
let px = 0;
let py = 0;
let rows = 5;
let cols = 5;
let grid;
let cellSize;
let player = grid[6][4];
let state = 0;

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
  rect(px,py,playerWidth,playerHeight,player);
  background(255);
  displayGrid();
}

function cleanUpTheGrid() {
  for (let i=0; i<grid.length; i++) {
    grid[i] = grid[i].split("");  //turns it into a 2d array
  }
}


function collision(){

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
        fill(random(255),0,0);
      }
      else {
        fill(0,150,0);
      }
      noStroke();
      rect(x*cellSize, y*cellSize, cellSize, cellSize);
    }
  }
}


function cube(){
  for (let i = 0; i < px; i++){
    for (let j = 0; j < py; j++){
      if (grid[stage][i][j]==2||level[stage][i][j]==7) {
        px=j;
        py=i;
        return;
      }
    }
  }

}


function move(){

}
