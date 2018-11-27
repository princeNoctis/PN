// Project Title
// Muhammad Sheikh
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let tiles;
let levelBackground;
let platform, coin,finish,dirt,players;
let tilesHigh, tilesWide;
let tileWidth, tileHeight;
let levelToLoad;
let lines;
let stopMove;
let x, y;
let isMovingUp, isMovingDown, isMovingLeft, isMovingRight;
let gamestate;
let hoveringButton;
let rows;
let cols;
let grid;
let cellSize;

//Variables which will keep track of the player's current position in the grid
let px; // player's x position
let py; // player's y position



function preload() {
  //load level data
  //load background
  //load tile images
  dirt = loadImage("assets/empty.png");
  finish = loadImage("assets/finish.png");
  players = loadImage("assets/player.gif");
  levelToLoad = "assets/22.txt";
  lines = loadStrings(levelToLoad);
}


function setup() {
  createCanvas(600, 600);

  //2d array's values for the grid. all 1's are white squares, 0's are black, 5 is the player and 9 is the goal.
  grid = lines;
  rows = grid[0].length;
  cols = grid[0].length;
  cellSize = width / cols;

  // settings player's current position at 0, 0;
  px = 0;
  py = 0;
}

function draw() {
  background(255);
  displayGrid(); //displays the grid
  checkGameOver(); //always checking if the player reaches the goal.
}

//2d Array grid begins
function displayGrid() {
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      //all 0 values in array assigned to the background color of black;
      if (grid[y][x] === 0) {
        image(dirt, x * tileWidth, y * tileHeight, tileWidth, tileHeight);
      }
      //player's color assigned to blue
      else if (grid[y][x] === 5) {
        image(players, x * tileWidth, y * tileHeight, tileWidth, tileHeight);
      }
      //the goal's color assigned to light green or lime
      else if (grid[y][x] === 9) {
        image(finish, x * tileWidth, y * tileHeight, tileWidth, tileHeight);
      }
      rect(x*cellSize, y*cellSize, cellSize, cellSize); // draws the squares according to 2d array's informations.
    }
  }
}

//Movement for players using W A S D keys
function keyPressed() {
  if (keyCode === 87) { //keycode 87 = w
    //condition for checking if the top square is white or green/destination
    if (grid[py-1][px] === 1 || grid[py-1][px] === 9) {
      grid[py-1][px] = 5;
      grid[py][px] = 1;
      py -= 1; //changes players current y position after moving
    }
  }
  if (keyCode === 65) { //keycode 65 = a
    //condition for checking if the left square is white or green/destination
    if (grid[py][px-1] === 1 || grid[py][px-1] === 9) {
      grid[py][px-1] = 5;
      grid[py][px] = 1;
      px -= 1;  //changes players current x position after moving
    }
  }
  if (keyCode === 83) { //keycode 83 = s
    //condition for checking if the bottom square is white or green/destination
    if (grid[py+1][px] === 1 || grid[py+1][px] === 9) {
      grid[py+1][px] = 5;
      grid[py][px] = 1;
      py += 1;  //changes players current y position after moving
    }
  }
  if (keyCode === 68) { //keycode 68 = d
    //condition for checking if the right square is white or green/destination
    if (grid[py][px+1] === 1 || grid[py][px+1] === 9) {
      grid[py][px+1] = 5;
      grid[py][px] = 1;
      px += 1;  //changes players current x position after moving
    }
  }
}

//Function for checking if the player has arrived to it's destination/goal
function checkGameOver() {
  //10, 18 this exact coordinate is set to goal. when player moves here, the game ends.
  if (px === 10 && py === 18) {
    fill("lime");
    textSize(54);
    textAlign(CENTER);
    text("You won. Good job!", width/2, height/2+15);
    noLoop(); //ends the loop/Game
  }
}
