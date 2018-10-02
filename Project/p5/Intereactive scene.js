// Intereactive scene
// Muhammad Sheikh
// Mon.24,2018
// Extra for Experts:
// - added music, keyIsPressed

let backgroundMusic;
let spellSound;


function preload() {
  backgroundMusic = loadSound("assets/326553__shadydave__the-sonata-piano-loop.mp3");
  spellSound = loadSound("assets/Hitmarker - MLG Sound Effect (HD).mp3");
}

function setup() {
  createCanvas(400, 400);
  background(255);
  backgroundMusic.setVolume(0.2);
  backgroundMusic.loop();
}

function draw() {
  if (mouseIsPressed && keyIsPressed) {
    if (key === "r") {
      random(255,255,255);
      rect(mouseX, mouseY, 10, 10,random(255,255,255));
    }
  	if (key === "e") {
      ellipse(mouseX, mouseY, 10, 10,random(255,255,255));
    }
  }
}

function keyTyped() {
  if (key === "w") {
    background(255);
  }
  else if (key === "b") {
    background(0);
  }
}

function mousePressed() {
  spellSound.play();
}
