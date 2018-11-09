// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let board = [];
let player = 1;
let turn = true;
let win = false;

function setup() {
  board = make2Darray(500, 500);
  for (i=0; i<3; i++) {
    for (j=0; j<3; j++) {
      board[i][j] = 0;
    }
  }
  ellipseMode(CORNER);
  createCanvas(600, 600);
  background(100);
  fill(0);
  rect(0,0,600,600);
  stroke(255);
  line(0, 200, 600, 200);
  line(0, 400, 600, 400);
  line(200, 0, 200, 600);
  line(400, 0, 400, 600);
}

function draw() {}

function mouseClicked() {
  placeCounter(player);
  if (turn === false) {
    player = -player;
  }
}

// Function to draw a counter on the board
function placeCounter(player) {
  xDim = floor(mouseX/200);
  yDim = floor(mouseY/200);

  if (player===1) {
		colour = 255;
	}
	else {
		colour = 140;
	}
  fill(colour);

  if (board[yDim][xDim] === 0) {
    board[yDim][xDim] = player;
    ellipse(xDim*200+50, yDim*200+50, 100, 100);
    turn = false;
    validateWin(player);
  }
}

// Check for win
function validateWin(player) {
  if ((board[0][0] + board[1][0] + board[2][0] === 3) || (board[0][0] + board[1][1] + board[2][2] === 3) || (board[0][0] + board[0][1] + board[0][2] === 3) || (board[1][0] + board[1][1] + board[1][2] === 3) || (board[2][0] + board[2][1] + board[2][2] === 3) || (board[0][1] + board[1][1] + board[2][1] === 3) || (board[0][2] + board[1][2] + board[2][2] === 3) || (board[2][0] + board[1][1] + board[0][2] === 3)) {
    win = true;
  } else if ((board[0][0] + board[1][0] + board[2][0] === -3) || (board[0][0] + board[1][1] + board[2][2] === -3) || (board[0][0] + board[0][1] + board[0][2] === -3) || (board[1][0] + board[1][1] + board[1][2] === -3) || (board[2][0] + board[2][1] + board[2][2] === -3) || (board[0][1] + board[1][1] + board[2][1] === -3) || (board[0][2] + board[1][2] + board[2][2] === -3) || (board[2][0] + board[1][1] + board[0][2] === -3)) {
    win = true;
  }

  if (win === true) {
    if (player === -1) { player = 2; }
    fill(0);
    stroke(0);
    rect(0, 0, 600, 600);
    fill(255);
    textSize(32);
    text("WINNER IS PLAYER " + player + "!", 100, 290);
  }
}

// Make 2D Array (by Tim, https://www.openprocessing.org/user/91337)
function make2Darray(cols, rows) {
  let arr = Array(cols)
  for (let i = 0; i < arr.length; i++) {
    arr[i] = Array(rows)
  }
  return arr;
}
