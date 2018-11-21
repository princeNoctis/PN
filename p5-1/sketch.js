// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let gif_loadImg, gif_createImg;
let tiles;
let levelBackground;
let platform, coin, box, fly, p1, slime, empty;
let tilesHigh, tilesWide;
let tileWidth, tileHeight;
let levelToLoad;
let lines;
let stopMove;

function preload() {
  //load level data
  levelToLoad = "assets/22.txt";
  lines = loadStrings(levelToLoad);
  //load background
  levelBackground = loadImage("assets/level_background.png");
  //load tile images
  platform = loadImage("assets/platform.png");
  coin = loadImage("assets/coin.png");
  box = loadImage("assets/boxItem.png");
  fly = createImg("assets/dragon_flying.gif");
  slime = loadImage("assets/slimeWalk1.png");
  //empty = loadImage("assets/empty.png");
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
  else if (location === "F") {
    fly.position(50,0);
  }
  else if (location === "S") {
    image(slime, x * tileWidth, y * tileHeight, tileWidth, tileHeight);
  }
  else if ( location === "E") {
    image(empty, x * tileWidth, y * tileHeight, tileWidth, tileHeight);
  }

}

function keyPressed(){
  if (keyCode === "RIGHT ARROW"){
    return stopMove = true;
  }
}

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
