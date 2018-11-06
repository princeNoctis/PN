// Grid Assignment
// Muhammad Sheikh
// oct.27,2018
// Extra for Experts:
//

let playerWidth;
let playerHeight;
let px = 5;
let py = 5;
let rows = 5;
let cols = 5;
let grid;
let cellSize;
let state = 0;
let leveltwo;

function preload() {
  grid = loadStrings("assets/Level1.txt");
  leveltwo = loadStrings("assets/Level2.txt");
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
      if (grid[state][i][j] === 2 ) {
        px=j;
        py=i;
        return;
      }
    }
  }

}


function move(){

}
