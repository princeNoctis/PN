// Traffic Light Starter Code
// Dan Schellenberg
// Sept 25, 2018

// GOAL: make a 'traffic light' simulator. For now, just have the light
// changing according to time. You may want to investigate the millis()
// function at https://p5js.org/reference/

millis();

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(255);
  drawOutlineOfLights();
}

function drawOutlineOfLights() {
  //box
  rectMode(CENTER);
  fill(0);
  rect(width/2, height/2, 75, 200, 10);

  //lights
  if (millis() >= 4000) {
    fill(255,0,0);
    ellipse(width/2, height/2 - 65, 50, 50); //top
    fill(255);
  }
  else{
    fill(255);
    ellipse(width/2, height/2 - 65, 50, 50); //top
  }
  fill(255);
  ellipse(width/2, height/2, 50, 50); //middle
  fill(255);
  ellipse(width/2, height/2 + 65, 50, 50); //bottom
}
