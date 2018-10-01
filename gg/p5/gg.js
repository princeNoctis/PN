// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let backgroundMusic;
let spellSound;

function preload(){
  backgroundMusic = loadSound("assets/g.mp3");
  spellSound = loadSound("assets/b.wav");

}


function setup() {
  backgroundMusic.setVolume(0.2);
  backgroundMusic.loop();
  createCanvas(windowWidth, windowHeight);
}

function draw() {

}

function mousePressed() {
  fill(random(255),random(255),random(255),random(255),random(255));
  ellipse(random(width),random(height), 50, 50);
  spellSound.play();
}  
