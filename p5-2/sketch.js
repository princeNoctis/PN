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

let gif_loadImg, gif_createImg;
let tiles;
let levelBackground;
let platform, coin,finish,dirt;
let tilesHigh, tilesWide;
let tileWidth, tileHeight;
let levelToLoad;
let lines;
let stopMove;
let x, y;
let isMovingUp, isMovingDown, isMovingLeft, isMovingRight;

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
}

function setup() {
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
  display();
  ellipseMode(CENTER);
  ellipse(x,y,tilesWide,tilesWide);
  movePlayer();
  if (y >= 600 || y <= 0) {
    y= y * -1.00001;
  }
  if (x  >= 800 || x <= 0) {
    x= x * -1.00001;
  }
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
