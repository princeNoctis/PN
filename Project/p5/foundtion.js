var stars = [];
var speed;

function setup() {
  noStroke();
  createCanvas(windowWidth, windowHeight);
  for (var e = 0; e < 400; e++) {
    stars[e] = new Star();
  }
  textAlign(CENTER);
  textSize(50);
}
function draw() {
  // Mapping the stars
  speed = map(mouseX, 0, width/2, 0, 50);
  background(0);
  translate(width/2, height/2);
  for (var e = 0; e < stars.length; e++) {
    stars[e].update();
    stars[e].show();
  }
}
