// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let gif_loadImg, gif_createImg;

let tiles;

let levelBackground;

let platform, coin, player,finish;
let coinsCollected = 0;

let tilesHigh, tilesWide;
let tileWidth, tileHeight;

let levelToLoad;
let py;
let px;
let lines;


class Player {
  constructor(x,y,onGrund){
    this.x = x;
    this.y = y;
    this.dx = x;
    this.dy = y;
    this.onGrund = true;
  }

}



class Coin {
  constructor(x,y,){

  }
}

function preload() {
  //load level data
  levelToLoad = "assets/22.txt";
  lines = loadStrings(levelToLoad);
  //load background
  finish = loadImage("assets/finish.png");
  player = loadImage("assets/player.png");
  levelBackground = loadImage("assets/level_background.png");
  //load tile images
  platform = loadImage("assets/empty.png");
  coin = loadImage("assets/coin.png");
}

function setup() {
  // keep this a 4:3 ratio, or it will stretch in weird ways
  createCanvas(800, 600);

  tilesHigh = lines.length;
  tilesWide = lines[0].length;

  tileWidth = width / tilesWide;
  tileHeight = height / tilesHigh;

  tiles = createEmpty2dArray(tilesWide, tilesHigh);

  //put values into 2d array of characters
  for (let y = 0; y < tilesHigh; y++) {
    for (let x = 0; x < tilesWide; x++) {
      let tileType = lines[y][x];
      tiles[x][y] = tileType;
    }
  }
}

function draw() {
  display();
}

function display() {
  image(levelBackground, 0, 0, width, height);

  for (let y = 0; y < tilesHigh; y++) {
    for (let x = 0; x < tilesWide; x++) {
      showTile(tiles[x][y], x, y);
    }
  }
}

function showTile(location, x, y) {
  if (location === "#") {
    image(platform, x * tileWidth, y * tileHeight, tileWidth, tileHeight);
  }
  else if (location === "C") {
    image(coin, x * tileWidth, y * tileHeight, tileWidth, tileHeight);
  }
  else if (location === "B") {
    image(box, x * tileWidth, y * tileHeight, tileWidth, tileHeight);
  }
  else if (location === "P") {
    image(player, x * tileWidth, y * tileHeight, tileWidth, tileHeight);
  }
  else if (location === "S") {
    image(finish, x * tileWidth, y * tileHeight, tileWidth, tileHeight);
  }

}

// function keyPressed(){
//   if (keyCode === "RIGHT ARROW"){
//   }
// }



function createEmpty2dArray(cols, rows) {
  let randomGrid = [];
  for (let x = 0; x < cols; x++) {
    randomGrid.push([]);
    for (let y = 0; y < rows; y++) {
      randomGrid[x].push(0);
    }
  }
  return randomGrid;
}

function bondories(){
  for (let y=0; y<tilesWide;y++){
    for (let x=0; x<tilesHigh;x++){
      py = py++;
      px = px++;
    }
  }
}

function coins() {



}

function finishStar(){

}

function onGround() {



}
