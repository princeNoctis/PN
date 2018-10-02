// Intereactive scene
// Muhammad Sheikh
// Mon.24,2018
// Extra for Experts:
// - added music, keyIsPressed

let backgroundMusic;
let spellSound;
let hitmaker;


function preload() {
  backgroundMusic = loadSound("assets/326553__shadydave__the-sonata-piano-loop.mp3");
  spellSound = loadSound("assets/Hitmarker - MLG Sound Effect (HD).mp3");
  hitmarker = loadImage("assets/hitmarker-transparent-white-5.png");
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
      fill(random(255), random(255), random(255), random(255));
      rect(mouseX, mouseY, 10, 10);
    }
  	if (key === "e") {
      fill(random(255), random(255), random(255), random(255));
      ellipse(mouseX, mouseY, 10, 10);
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
  noStroke();
  display(hitmarker);
  spellSound.play();
}
