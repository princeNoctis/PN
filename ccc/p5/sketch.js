// gridsize assignment
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let scene = [];

let nx = 0;
let ny = 0;

let wid = 125;
let hei = 125;

let nsx = 0;
let nsy = 0;

let finish = 0;


function setup() {
  createCanvas(600, 400);

  //generate scene

  for (let x = 0; x < 50; x++) {
    scene[x] = [];
    for (let y = 0; y < 50; y++) {
      if (x < 5 && y < 5 || x > 44 && y > 44) {
        scene[x][y] = 0;
      }
      else {
        if (random(1) < 0.9) {
          scene[x][y] = 0;
        }
        else {
          scene[x][y] = 1;
        }

      }
      if (x === 49 && y === 49) {
        scene[x][y] = 2;
      }
    }
  }
}



function movePlayer() {

  //player movment

  if (keyIsDown(UP_ARROW)) {
    nsy -= 0.1;
  }
  if (keyIsDown(LEFT_ARROW)) {
    nsx -= 0.1;
  }
  if (keyIsDown(DOWN_ARROW)) {
    nsy += 0.1;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    nsx += 0.1;
  }
}

function varaibles() {
  nsx = nsx / 1.03;
  nsy = nsy / 1.03;

  hei += nsy;
  wid += nsx;

  //screen movement and safe gaurds

  if (nx + 10 * 50 < wid) {
    nx += abs(nsx);
  }
  if (nx + 2 * 50 > wid) {
    nx -= abs(nsx);
  }
  if (ny + 6 * 50 < hei) {
    ny += abs(nsy);
  }
  if (ny + 2 * 50 > hei) {
    ny -= abs(nsy);
  }
  if (wid < 0) {
    wid = 0;
  }
  if (hei < 0) {
    hei = 0;
  }
  if (wid > 50 * 50) {
    wid = 50 * 50;
  }
  if (hei > 50 * 50) {
    hei = 50 * 50;
  }
  if (nx < 0) {
    nx = 0;
  }
  if (ny < 0) {
    ny = 0;
  }
  if (nx > 37.99 * 50) {
    nx = 37.99 * 50;
  }
  if (ny > 42 * 50) {
    ny = 42 * 50;

  }
}

function generateArea() {
  //genarate new scene

  for (let x = round(nx / 50 - 0.4); x < round(nx / 50 - 1) + 13; x++) {
    for (let y = round(ny / 50 - 0.4); y < round(ny / 50 - 1) + 9; y++) {
      if (scene[x][y] === 0) {
        fill(200, 200, 0);
        rect(x * 50 - nx, y * 50 - ny, 50, 50);
      }
      else if (scene[x][y] === 1) {
        fill(0, 0, 0);
        rect(x * 50 - nx, y * 50 - ny, 50, 50);
        if (wid > x * 50 && hei > y * 50 && wid < x * 50 + 50 && hei < y * 50 + 50) {
          nx = 0;
          ny = 0;
          wid = 125;
          hei = 125;
          nsx = 0;
          nsy = 0;
        }
      }
      else {
        fill(random(255), random(255), random(255));
        rect(x * 50 - nx, y * 50 - ny, 50, 50);
        if (wid > x * 50 && hei > y * 50 && wid < x * 50 + 50 && hei < y * 50 + 50 && finish === 0) {
          finish = 1;
        }
      }
    }
  }

}

function finishCube() {
  //run finish animtion

  if (finish > 0) {
    finish = finish * 1.1;
    background(255, 255, 255, finish);
    fill(255,0,0);
    textSize(50);
    text("YAY you win", 270, 200);
    if (finish > 255) {
      noLoop();
    }
  }

}

function draw() {
  background(0);
  movePlayer();
  fill(255);
  ellipse(wid - nx, hei - ny, 10, 10);
}
