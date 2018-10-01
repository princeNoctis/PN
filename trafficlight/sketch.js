// Traffic Light Starter Code
// Dan Schellenberg
// Sept 25, 2018

// GOAL: make a 'traffic light' simulator. For now, just have the light
// changing according to time. You may want to investigate the millis()
// function at https://p5js.org/reference/

let state;
let lastTimeSwitchedColor;

const red = 3000;
const green = 4000;
const yellow = 1000;

function setup() {
  createCanvas(600, 600);
  state = 1;
  lastTimeSwitchedColor = 0;
}

function draw() {
  rectMode(CENTER);
  fill(0);
  rect(width/2, height/2, 75, 200, 10);
  background(255);
  drawOutlineOfLights();
  diplayCorrectLight();
  checkForStateChange();
}
function drawOutlineOfLights() {
  function diplayRedLight() {
    fill(255,0,0);
    ellipse(width/2, height/2 - 65, 50, 50); //top
  }

  function diplayYellowLight() {
    fill(255,255,0);
    ellipse(width/2, height/2, 50, 50); //middle
  }

  function diplayGreenLight() {
    fill(0,255,0);
    ellipse(width/2, height/2 + 65, 50, 50); //bottom
  }
}
function diplayRedLight() {
  fill(255,0,0);
  ellipse(width/2, height/2 - 65, 50, 50); //top
}

function diplayYellowLight() {
  fill(255,255,0);
  ellipse(width/2, height/2, 50, 50); //middle
}

function diplayGreenLight() {
  fill(0,255,0);
  ellipse(width/2, height/2 + 65, 50, 50); //bottom
}

function diplayCorrectLight() {
  if (state === 1) {
    diplayRedLight();
  }
  else if (state === 2) {
    diplayYellowLight();
  }
  else if (state === 3) {
    diplayGreenLight();
  }
}
function checkForStateChange() {
  let et = millis() - lastTimeSwitchedColor;
  if (state === 1 && et >= red){
    state = 2;
    lastTimeSwitchedColor = millis();
  }
  else if (state === 2 && et >= yellow){
    state = 3;
    lastTimeSwitchedColor = millis();
  }
  else if (state === 3 && et >= green){
    state = 1;
    lastTimeSwitchedColor = millis();
  }
}

//box
rectMode(CENTER);
fill(0);
rect(width/2, height/2, 75, 200, 10);

//lights
fill(255);
ellipse(width/2, height/2 - 65, 50, 50); //top
ellipse(width/2, height/2, 50, 50); //middle
ellipse(width/2, height/2 + 65, 50, 50); //bottom
