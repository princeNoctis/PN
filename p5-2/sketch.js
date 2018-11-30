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
let keys = [];
let x, y;
let isMovingUp, isMovingDown, isMovingLeft, isMovingRight;
let gamestate;
let gravity = 0;
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
  px = 0;
  py = 0;
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

function keyPressed() {
  keys[keyCode] = true;
}

function keyReleased() {
  keys[keyCode] = false;
}

function showTile(location, x, y) {
  if (location === "#") {
    image(plat, x * tileWidth, y * tileHeight, tileWidth, tileHeight);
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
  if(keys[LEFT_ARROW]){
    px = px - 5;
  }

  if(keys[RIGHT_ARROW]){
    px = px + 5;
  }

  gravity = gravity + 0.192;

  py = py + gravity;

  if(keys[UP_ARROW] && py >= 325){
    gravity = -7;
  }
  // if (px >= 725) {
  //   px = 725;
  // }
  if (px < -30){
    px = -30;
  }
}

function collideWithPlayer(){
  if (tiles[x][y] === "+"){
    rect(bx,by,tilesWide,tilesHigh);
  }
  if ( py > by){
    py = by;
    if(keys[UP_ARROW] === false){
      gravity = 0;
    }
  }
}




function p1(){
  player = image(img,px,py,100,100);

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
  textSize(15);
  text("hello so we made the basic version of mario game click in the button to start the game and enjoy",buttonWidth,buttonHeight,leftSide,topSide);
  if (mouseX >= leftSide && mouseX <= rightSide && mouseY >= topSide && mouseY <= bottomSide) {
    fill(125);
    if (mouseIsPressed) {
      gamestate = 2;
    }
  }
  rect(leftSide, topSide, buttonWidth, buttonHeight);


}
