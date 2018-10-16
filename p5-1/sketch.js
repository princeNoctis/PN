// State variables Assignment
// Muhammad Sheikh
//
// Extra for Experts:
// i used the translate function and state function as the starting screen and added some a sound
//and background music. press r to RESET
// global variables


// ALL REQURED LET VALUES
let x;
let y;
let bocSize = 35;

let overBoc = false;
let locked = false;
let xOffset = 0.0;

let yOffset = 0.0;
let time = 50;
let state;

let score;



function setup() {

  createCanvas(windowWidth, windowHeight);
  ellipseMode(RADIUS);
  strokeWeight(2);
  // SET THE STATE TO 1
  state = 1;
  x = width / 2;
  y = height;
//SET SCORE INT VAL TO 0
  score = 0;
  draw();
}

function draw() {
  //DECLARE THE EACH STATE IS AND INPUT THE SCORE TEXT PLUS THE CURRENT INT VALUE OF SCORE
  let outside = color(0);
  if (state === 1) {
    displayStartScreen();
  }
  else if (state === 2) {
    displaygame();
  }

  push();
  translate(80, 80);
  fill(outside);

  textAlign(CENTER, CENTER);
  textSize(25);
  text("score =" + score, 100, 10);

  pop();
}

function displayStartScreen() {
  // variables FOR THIS FUNCTION
  let buttonWidth = 400;
  let buttonHeight = 200;
  let leftSide = width / 2 - buttonWidth / 2;

  let topSide = height / 2 - buttonHeight / 2;
  let rightSide = leftSide + buttonWidth;
  let bottomSide = topSide + buttonHeight;

  let inside = color(204, 102, 0);
  let middle = color(204, 153, 0);
  let outside = color(153, 51, 0);
  // IF THE MOUSE CURSOR IS OVER THE RECTANGLE CHANGE COLOR AND IF CLICKED CHANGE TO STATE 2, SO THE ACTUAL GAME
  fill(0,0,240);
  if (mouseX >= leftSide && mouseX <= rightSide && mouseY >= topSide && mouseY <= bottomSide) {
    fill(125);
    if (mouseIsPressed) {
      state = 2;
    }
  }
  // TEXT FOR CLICKING ON RECT
  push();
  translate(80, 80);
  fill(outside);

  textAlign(CENTER, CENTER);
  textSize(25);
  text("CLICK RECTANGLE",400,400);

  pop();
  rect(leftSide, topSide, buttonWidth, buttonHeight);
}

function displaygame() {
  // SEPREAT FUNCTION FOR THE GAME LOADING THE BACKGROUND AND ELLIPSE AND SET THE X AND Y VALUES PLUS
  // IF THE Y OR X IS LESS THAN 0 RESET RANDOMLY SO IT WILL APPEAR RANDOMLY
  background(234,150,50);
  ellipse(x,y,bocSize,bocSize);
  // Jiggling randomly on the horizontal axis
  x = x + random(-10, 8);
  // Moving at a constant speed
  y = y - 5;

  // Reset to the bottom or right
  if (y < 0) {
    y = random(height);
    fill(0);
  }
  else if (x < 0) {
    x = random(width);
    fill(0);
  }
  // Test if the cursor is over the CIRCLE
  if (mouseX > x-bocSize && mouseX < x+bocSize &&
      mouseY > y-bocSize && mouseY < y+bocSize) {
    overBoc = true;
    if(!locked) {
      stroke(255);
      fill(255);
    }
  } else {
    stroke(156,39,176);
    fill(255);
    overBoc = false;
  }
  timer();


}

function timer() {
  // THE TIMER FUNCTION, IF THE TIME IS LOWER THAN THE VALUE OF TIME GAME OVER AND SHOW YOUR SCORE
  textAlign(CENTER, CENTER);
  textSize(25);
  text(time, 50, 50);

  if (frameCount % 60 === 0 && time > 0) {
    time --;
  }

  if (time === 0) {
    text("!!GAME OVER!!", width/2, height*0.7);
    text("score: " + score, width/2, height*0.5);
    noLoop();
  }
}

function mousePressed() {
  // FUNCTION FOR IF THE MOUSE IS OVER CIRCLE CHANGE THE COLOR
  if(overBoc) {
    locked = true;
    fill(255, 255, 255);
  } else {
    locked = false;
  }
  // FUNCTION FOR CLICKING INSIDE OF THE CIRCLE AND MAKING IT SCORE
  xOffset = mouseX-x;
  yOffset = mouseY-y;
  let d = dist(mouseX, mouseY, x, y);
  // CLICKING TO SCORE A POINT
  // AND MAKING IT DO IT EVERYTIME
  // MOUSE IS CLICKED IN THE RADIUS OF THE CIRCLE
  if (d < 35) {
    score = (1 + score);
    fill(255,0,0);
    redraw();
  }
}

function keyTyped() {
  // TYPE THE R TO RESET THE GAME AND RERUN SETUP()
  if (key === "r") {
    setup();
  }
}

function mouseReleased() {
  // IF MOUSE IS OFF THE CIRCLE MAKE LOCKED FALSE
  locked = false;
}
