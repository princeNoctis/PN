// Intereactive scene
// Muhammad Sheikh
// Mon.24,2018
// Extra for Experts:
// - added music, keyIsPressed mouse zoom out, and made own shape and resize window

// varaiables and Lets
let pos = 25;
let backgroundMusic;
let spellSound;
let pat;

function preload() {
  // preload the background music and spell sound Bazinga!
  backgroundMusic = loadSound("assets/326553__shadydave__the-sonata-piano-loop.mp3");
  spellSound = loadSound("assets/Bazinga Sound Clip.mp3");
}

function setup() {
  // center the square, make the background music loop and setVolume and Patricks image
  rectMode(CENTER);
  createCanvas(windowWidth, windowHeight);
  backgroundMusic.setVolume(0.4);
  spellSound.setVolume(0.9);
  backgroundMusic.loop();
  pat = loadImage("assets/patrick.png");
}

function draw() {
  //text size, text and mouse pressed, key pressed functions, displaying patrick image and code for the square in the middle of screen.
  textSize(8);
  text("zoom in and out with mousewheel and hold mouse button + press e ", 22, 130);
  text("w for white screen or reset", 22, 150);
  text("b for black screen", 22, 170);
  text(" press any mouse button to make Sheldon say Bazinga!! ", 22, 190);
  text(" and lastly press s and mouse for Patrick!! ", 22, 220);
  // display ellipse after sheldons bazinga voice
  if (mouseIsPressed && keyIsPressed) {
    if (key === "e") {
      ellipse(mouseX, mouseY, 30, 30);
    }
  }
  //displaying patrick near mouse cursor
  if (keyIsPressed) {
    if (key === "s") {
      image(pat, mouseX, mouseY, 100, 100);
    }
  }
  // the square is rgb and turn bigger and smaller when scrolled down and up
 push();
 noStroke();
 fill(random(255),random(255),random(255));
 rect(width / 2, height / 2, 100 + pos, 100 + pos);
 pop();

}
// able to resize canvas
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
//function for mousewheel
function mouseWheel(event) {
  pos += event.delta;
  posRev = height - 10 - pos;
}
// functions for black and white screen
function keyTyped() {
  if (key === "w") {
    background(255);
  }
  else if (key === "b") {
    background(0);
  }
}

function mousePressed() {
  // make the text turn random colors when clicked
  fill(random(255),random(255),random(255));
  spellSound.play();
}
