// Inereactive scene
// Muhammad
// Mon.24,2018
// Extra for Experts:
// - added music

// Making some new variables
var stars = [];
var speed;
var x, y;
var bg;

let backgroundMusic;
// preloading the music
function preload() {
  backgroundMusic = loadSound("assets/song.mp3");
}

function setup() {
  // set volume
  backgroundMusic.setVolume(0.2);
  // make the music in loop
  backgroundMusic.loop();
  createCanvas(windowWidth, windowHeight);
  for (var e = 0; e < 400; e++) {
    stars[e] = new Star();
  }
  bg = loadImage("assets/starsa.jpg");  // Load the image
}

function draw() {
  background(bg)
  // mouse function and mapping speed
  speed = map(mouseX, 4, width/2, 0, 50);
  // Specifies an amount to displace objects within the display window
  translate(width/2, height/2);
  // for every star gone make a new one in a random spot
  for (var e = 0; e < stars.length; e++) {
    stars[e].update();
    stars[e].show();
  }
}
