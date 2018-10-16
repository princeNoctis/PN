// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
// global variables

let cx;
let cy;
let bocSize = 30;
let overBoc = false;
let locked = false;
let xOffset = 0.0;
let yOffset = 0.0;
let time = 60;
let state;
let bugs = [];



function setup() {
  createCanvas(windowWidth, windowHeight);
  cx = random(width/2.0);
  cy = random(height/2.0);
  ellipseMode(RADIUS);
  strokeWeight(2);
  state = 1;
  for (var i=0; i<50; i++) {
    bugs.push(new Jitter());
  }
}

function draw() {
  if (state === 1) {
    displayStartScreen();
  }
  else if (state === 2) {
    displaygame();
  }

}

function displayStartScreen() {
  let buttonWidth = 400;
  let buttonHeight = 200;
  let leftSide = width / 2 - buttonWidth / 2;
  let topSide = height / 2 - buttonHeight / 2;
  let rightSide = leftSide + buttonWidth;
  let bottomSide = topSide + buttonHeight;
  let inside = color(204, 102, 0);
  let middle = color(204, 153, 0);
  let outside = color(153, 51, 0);

  fill(0);
  if (mouseX >= leftSide && mouseX <= rightSide && mouseY >= topSide && mouseY <= bottomSide) {
    fill(125);
    if (mouseIsPressed) {
      state = 2;
    }
  }
  push();
  translate(80, 80);
  fill(outside);
  textAlign(CENTER, CENTER);
  textSize(25);
  text("CLICK RECTANGLE",850,400);
  pop();
  rect(leftSide, topSide, buttonWidth, buttonHeight);
}

function mousePressed() {
  if(overBoc) {
    locked = true;
    fill(255, 255, 255);
  } else {
    locked = false;
  }

  xOffset = mouseX-bx;
  yOffset = mouseY-by;

}

function timer() {
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(25);
  text(time, 50, 50);
  if (frameCount % 60 === 0 && time > 0) {
    time --;
  }
  if (time === 0) {
    text("!!GAME OVER!!", width/2, height*0.7);
    noLoop();
  }
}

function displaygame() {
  background(234,12,123);
  for (var i=0; i<bugs.length; i++) {
    bugs[i].move();
    bugs[i].display();
  }

  // Test if the cursor is over the box
  if (mouseX > cx-bocSize && mouseX < cx+bocSize &&
      mouseY > cy-bocSize && mouseY < cy+bocSize) {
    overBoc = true;
    if(!locked) {
      stroke(255);
      fill(244,122,158);
    }
  } else {
    stroke(156,39,176);
    fill(244,122,158);
    overBoc = false;
  }
  timer();
  // Jiggling randomly on the horizontal axis
  cx = cx + random(-1, 1);
  // Moving up at a constant speed
  cy = cy - 1;

  // Reset to the bottom
  if (cy < 0) {
    cy = height;
  }
  // Draw the box

}

function keyTyped() {
  if (key === "r") {
    setup();
  }
}

function mouseReleased() {
  locked = false;
}


function Jitter() {
  this.x = random(width);
  this.y = random(height);
  this.diameter = random(10, 100);
  this.speed = 1;

  this.move = function() {
    if (this.y < 0) {
      this.y = height;
    }
    if (this.x < 0) {
      this.x = width;
    }
    this.x = this.x + random(-8, 3);
    // Moving up at a constant speed
    this.y = this.y - 2;
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  };

  this.display = function() {
    ellipse(this.x, this.y, this.diameter, this.diameter);
  };
}
