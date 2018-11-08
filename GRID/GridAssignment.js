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

// function preload() {
//   levelone = loadStrings("assets/Level1.txt");
//   leveltwo = loadStrings("assets/Level2.txt");
// }

function  level() {
 let levelone = [[0,0,0,0,0,0,0,0,0],
            [0,1,1,1,1,1,1,1,0],
            [0,1,0,0,0,0,0,1,0],
            [0,1,0,0,1,0,0,1,0],
            [0,1,0,0,0,0,3,1,0],
            [0,1,0,0,0,0,0,1,0],
            [0,1,1,2,0,1,0,1,0],
            [0,1,1,1,1,1,1,1,0],
            [0,0,0,0,0,0,0,0,0],
          ];
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


function cube(){
  for (let i = 0; i < px; i++){
    for (let j = 0; j < py; j++){
      if (levelone[i][j] === 0 && levelone[i][j] === 2 ) {
        px=j;
        py=i;
        return;
      }
    }
  }

}



function move() {

}

function keyPressed(){
  if (keyCode === 68 ){
    for (let i = 0; i< "1";i++){
      levelone[6][4] = "2";
      levelone[6][3] = "0";
    }
  }
  else if (keyCode === 87 ){
    for (let i = 0; i< "1";i++){
      levelone[5][3] = "2";
      levelone[6][3] = "0";
    }
  }
  else if (keyCode === 65 ){
    for (let i = 0; i< "1";i++){
      levelone[6][3] = "2";
      levelone[6][4] = "0";
    }
  }
  else if (keyCode === 83 ){
    for (let i = 0; i< "1";i++){
      levelone[5][3] = "0";
      levelone[6][3] = "2";
    }
  }
}
