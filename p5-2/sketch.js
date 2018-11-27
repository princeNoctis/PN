// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
// Project Title
// Your Name
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
let x, y,px,py;
let isMovingUp, isMovingDown, isMovingLeft, isMovingRight;
let gamestate;
let hoveringButton;


function preload() {
  //load level data
  levelToLoad = "assets/22.txt";
  lines = loadStrings(levelToLoad);
  //load background
  levelBackground = loadImage("assets/level_background.png");
  //load tile images
  platform = loadImage("assets/platform.png");
  coin = loadImage("assets/coin.png");
  dirt = loadImage("assets/empty.png");
  finish = loadImage("assets/finish.png");
  players = loadImage("assets/player.gif");
}

function setup() {
  px = 0;
  py = 0;
  gamestate = "+";
  // keep this a 4:3 ratio, or it will stretch in weird ways
  createCanvas(800, 600);

  tilesHigh = lines.length;
  tilesWide = lines[0].length;

  tileWidth = width / tilesWide;
  tileHeight = height / tilesHigh;

  tiles = createempty2dArray(tilesWide, tilesHigh);
  x = width/2;
  y = height/2;
  isMovingUp = false;
  isMovingDown = false;
  isMovingLeft = false;
  isMovingRight = false;
  //put values into 2d array of characters
  for (let y = 0; y < tilesHigh; y++) {
    for (let x = 0; x < tilesWide; x++) {
      let tileType = lines[y][x];
      tiles[x][y] = tileType;
    }
  }
}



function draw() {
  movePlayer();
  if (gamestate === 1) {
    displayStartScreen();
  }
  if (gamestate === 2) {
    display();
  }
}

function display() {
  if (gamestate === 2){
    image(levelBackground, 0, 0, width, height);

    for (let y = 0; y < tilesHigh; y++) {
      for (let x = 0; x < tilesWide; x++) {
        showTile(tiles[x][y], x, y);
      }
    }
  }
  // player();

}
//
// function player(){
//   ellipseMode(CENTER);
//   ellipse(x,y,tilesWide,tilesHigh);
//   if (y >= 600 || y <= 0) {
//     y= y * -1.00001;
//   }
//   if (x  >= 800 || x <= 0) {
//     x= x * -1.00001;
//   }
// }

function showTile(location, x, y) {
  if (location === "#") {
    image(platform, x * tileWidth, y * tileHeight, tileWidth, tileHeight);
  }
  else if (location === "C") {
    image(coin, x * tileWidth, y * tileHeight, tileWidth, tileHeight);
  }
  else if ( location === "+") {
    image(dirt, x * tileWidth, y * tileHeight, tileWidth, tileHeight);
  }
  else if ( location === "f") {
    image(finish, x * tileWidth, y * tileHeight, tileWidth, tileHeight);
  }
  else if ( location === "S") {
    image(players, x * tileWidth, y * tileHeight, tileWidth, tileHeight);
  }

}

function movePlayer() {
  if (keyIsDown(68)) { // "a"
    x += 5;
  }
  if (keyIsDown(65)) { // "d"
    x -= 5;
  }
  if (keyIsDown(83)) { // "w"
    y += 5;
  }
  if (keyIsDown(87)) { // "s"
    y -= 5;
  }
}


function createempty2dArray(cols, rows) {
  let randomGrid = [];
  for (let x = 0; x < cols; x++) {
    randomGrid.push([]);
    for (let y = 0; y < rows; y++) {
      randomGrid[x].push(0);
    }
  }
  return randomGrid;
}

function keyPressed() {
  if (keyCode === 87) { //keycode 87 = w
    //condition for checking if the top square is white or green/destination
    if (tiles[py-1][px] === "+" || tiles[py-1][px] === "f") {
      tiles[py-1][px] = "S";
      tiles[py][px] = "+";
      py -= 1; //changes players current y position after moving
    }
  }
  if (keyCode === 65) { //keycode 65 = a
    //condition for checking if the left square is white or green/destination
    if (tiles[py][px-1] === "+" || tiles[py][px-1] === "f") {
      tiles[py][px-1] = "S";
      tiles[py][px] = "+";
      px -= 1;  //changes players current x position after moving
    }
  }
  if (keyCode === 83) { //keycode 83 = s
    //condition for checking if the bottom square is white or green/destination
    if (tiles[py+1][px] === "+" || tiles[py+1][px] === "f") {
      tiles[py+1][px] = "S";
      tiles[py][px] = "+";
      py += 1;  //changes players current y position after moving
    }
  }
  if (keyCode === 68) { //keycode 68 = d
    //condition for checking if the right square is white or green/destination
    if (tiles[py][px+1] === "+" || tiles[py][px+1] === "f") {
      tiles[py][px+1] = "S";
      tiles[py][px] = "+";
      px += 1;  //changes players current x position after moving
    }
  }
}



function displayStartScreen() {
  let buttonWidth = 400;
  let buttonHeight = 200;
  let leftSide = width / 2 - buttonWidth / 2;
  let topSide = height / 2 - buttonHeight / 2;
  let rightSide = leftSide + buttonWidth;
  let bottomSide = topSide + buttonHeight;
  fill(0);
  if (mouseX >= leftSide && mouseX <= rightSide && mouseY >= topSide && mouseY <= bottomSide) {
    fill(125);
    if (mouseIsPressed) {
      gamestate = 2;
    }
  }
  rect(leftSide, topSide, buttonWidth, buttonHeight);
}
