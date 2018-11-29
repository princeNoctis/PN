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
let plat,platform,coin,finish,dirt;
let player,img,character;
let tilesHigh, tilesWide;
let tileWidth, tileHeight;
let levelToLoad;
let lines,circles;
let stopMove;
let x, y,gravity;
let isMovingUp, isMovingDown, isMovingLeft, isMovingRight;
let gamestate;
let hoveringButton;
let bugs = [];
let px,py,pw,ph;
// let song;




function preload() {
  //load level data
  levelToLoad = "assets/22.txt";
  lines = loadStrings(levelToLoad);
  //load background
  levelBackground = loadImage("assets/level_background.png");
  //load tile images
  plat = loadImage("assets/platform.png");
  coin = loadImage("assets/coin.png");
  dirt = loadImage("assets/empty.png");
  finish = loadImage("assets/finish.png");
  // song = loadSound("assets/song.mp3");
  img = loadImage("assets/player.gif");
}

function setup() {
  px = 200;
  py = 200;
  // song.setVolume(0.5);
  gamestate = 1;
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
    // song.loop();
  }
  if (gamestate === 2) {
    display();
    p1();
  }
}

function display() {

  if (gamestate === 1) {
    displayStartScreen();
  }
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

function showTile(location, x, y) {
  if (location === "#") {
    platform = image(plat, x * tileWidth, y * tileHeight, tileWidth, tileHeight);
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


function p1(){
  player = image(img,px,py,100,100);

  if (keyIsDown(65)) { // "a"
    px -= 5;
  }
  if (keyIsDown(68)) { // "d"
    px += 5;
  }
  if (keyIsDown(87)) { // "w"
    py -= 5;
  }
  if (keyIsDown(83)) { // "s"
    py += 5;
  }

  if(keyIsDown(87) && y >= 50){
    gravity = -7;
  }

  gravity = gravity + 0.3;

  y = y + gravity;

  if(y > 500){
    y = 500;
    if(keyIsDown(87) === false){
      gravity = 0;
    }
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

function displayStartScreen() {
  background(0,0,255);
  let buttonWidth = 300;
  let buttonHeight = 150;
  let leftSide = width / 2 - buttonWidth / 2;
  let topSide = height / 2 - buttonHeight / 2;
  let rightSide = leftSide + buttonWidth;
  let bottomSide = topSide + buttonHeight;
  fill(255,0,0);
  // if (gamestate === 2){
  //   // noLoop(song);
  //
  if (mouseX >= leftSide && mouseX <= rightSide && mouseY >= topSide && mouseY <= bottomSide) {
    fill(125);
    if (mouseIsPressed) {
      gamestate = 2;
    }
  }
  rect(leftSide, topSide, buttonWidth, buttonHeight);


}
