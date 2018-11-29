//  ______	 ____     ______   __
// 0 0 ||  0 |___| 0  |		 | 0 | \   |
// 0 0 ||  0 |\		 0  |		 | 0 |  \  |  MAZE
// 0 0 ||	 0 | 	\  0  |____| 0 |   \_|

// grid assignment
// muhammad sheikh
// nov.13,2018
// I used the music from youtube here is the link. all credit goes to Daft Punk
// https://www.youtube.com/watch?v=YKEZoOjc6to
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
//

// my array var
let scene = [];

// some other vars
let appalase;
let backgroundMusic;

let nx = 0;
let ny = 0;

let wid = 125;
let hei = 125;

let nsx = 0;
let nsy = 0;

let finish = 0;
let bike;

// preload function for our background music
function preload() {
  backgroundMusic = loadSound("assets/Daft Punk - The Son of Flynn.mp3");
}

function setup() {

  // back ground volume
  backgroundMusic.setVolume(0.5);
  backgroundMusic.loop();

  //canvas size
	createCanvas(600, 400);

	//generate grid and make the area 50 by 50 max

	for (let x = 0; x < 50; x++) {
		scene[x] = [];
		for (let y = 0; y < 50; y++) {
			if (x < 5 && y < 5 || x > 44 && y > 44) {
				scene[x][y] = 0;
			}
			else {

        // number of black squares on the grid
				if (random(2) < 1.6) {
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


function draw() {

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
  if (nx > 39.99 * 50) {
    nx = 42 * 50;
  }
  if (ny > 39.99 * 50) {
    ny = 42 * 50;
  }
  // call all the functions
	background(0);
	movePlayer();
	generateMaze();
	finishcube();
	playerModel();
	fill(255);
  textSize(10);
  text("black cubes are LAVA and the blue is land, suppose you are on a tron light bike  ", 10, 10);
}


function movePlayer() {

	//player movement
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
function draw() {
	background(0);


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

  // speed of the player/bike
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


// function for our tron bike+
function tronBike(){

  // push and pop soo the stroke only applies to player and bike
	push();
	fill(50, 130, 255);
  stroke(0);
	strokeWeight(2);
	ellipseMode(CENTER);
	bike = ellipse(wid - nx, hei - ny, 5, 20);
	pop();
}

function playerModel(){

  // same thing as the tron bike function
  push();
	fill(random(255));
  stroke(0);
	strokeWeight(2);
	tronBike();
  ellipse(wid - nx, hei - ny, 5, 5);
  pop();
}

function generateMaze() {

  // the most diffcult part, generate new holes when moving closer to the end of the canvas
	for (let x = round(nx / 50 - 0.4); x < round(nx / 50 - 1) + 13; x++) {
		for (let y = round(ny / 50 - 0.4); y < round(ny / 50 - 1) + 9; y++) {
			if (scene[x][y] === 0) {

        // grid color excluding the holes
				fill(50, 130, 255);
				rect(x * 50 - nx, y * 50 - ny, 50, 50);
			}
			else if (scene[x][y] === 1) {

        // holes aka black squares
				fill(0, 0, 0);
				rect(x * 50 - nx, y * 50 - ny, 50, 50);
				if (wid > x * 50 && hei > y * 50 && wid < x * 50 + 50 && hei < y * 50 + 50) {

          // if the player is on or near the holes reset the location
					nx = 0;
					ny = 0;
					wid = 125;
					hei = 125;
					nsx = 0;
					nsy = 0;
				}
			}
      else {

        // and this is the finish cube
        fill(random(255), random(255), random(255));
        rect(x * 50 - nx, y * 50 - ny, 50, 50);
        if (wid > x * 50 && hei > y * 50 && wid < x * 50 + 50 && hei < y * 50 + 50 && finish === 0) {
          finish = 1;
				}
			}
		}
	}
}

// function for the finish cube
function finishcube(){
  // this if statement is saying if the var finish is greater than 0
  // which it is when the player goes over it. change the state and display the ending
  // screen.

	if (finish > 0) {
		finish = finish * 1.1;
		background(255, 255, 255, finish);
		fill(255,0,0);
		textSize(15);
		text("YAY, you made it through", width/2, height/2);
	}
}
