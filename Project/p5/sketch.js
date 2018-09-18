// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/17WoOqgXsRM

var stars = [];

var speed;

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (var i = 0; i < 400; i++) {
    stars[i] = new Star();
  }
}

function draw() {
  text('BETTER IN FULLSCREEN',width/2 , height///2)
  speed = map(mouseX, 3, width, 0, 50);
  background(0);
  translate(width / 2, height / 2);
  for (var i = 0; i < stars.length; i++) {
    stars[i].update();
    stars[i].show();
  }
}
