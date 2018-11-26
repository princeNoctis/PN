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
let platform, coin,finish,dirt;
let tilesHigh, tilesWide;
let tileWidth, tileHeight;
let levelToLoad;
let lines;
let stopMove;
let x, y;
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
}

function setup() {
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
  menu();
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
  if (gamestate === 2){
    image(levelBackground, 0, 0, width, height);

    for (let y = 0; y < tilesHigh; y++) {
      for (let x = 0; x < tilesWide; x++) {
        showTile(tiles[x][y], x, y);
      }
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

function menu() {
  // //This function displayes all of the main menu
  // background(10);
  // // display();
  // //All the menu text stuff
  // fill(0, 255, 0);
  // textSize(55);
  // text("2D PLATFORMER GAME", width/2, 100);
  // textSize(20);
  // text("Press P to pause have fun", width/2, 350);
  //
  //
  // //Drawing the start button
  // rectMode(CENTER);
  //
  // //If the mouse hovers over the button, using a state variable, it will change color.
  // if (dist(mouseX, mouseY, width/2 - 150, 450, 300, 100)) {
  //   hoveringButton = true;
  //   if (mouseIsPressed) {
  //     display();
  //     //If they hit the button, the game will begin
  //   }
  // }
  // else {
  //   hoveringButton = false;
  // }
  //
  // if (hoveringButton) {
  //   //Changing the fill colors
  //   fill(60, 0, 0);
  // }
  // else {
  //   fill(255, 0, 0);
  // }
  //
  // rect(width/2, 500, 300, 100);
  // //Start button
  // rectMode(CORNER);
  //
  // fill(255);
  // textSize(35);
  // text("START", width/2, 510);
  // //Putting text into the button
}
