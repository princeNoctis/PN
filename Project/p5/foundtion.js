var stars = [];
var speed;

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (var i = 0; i < 400; i++) {
    stars[i] = new Star();
  }
  textAlign(CENTER);
  textSize(50);
}
function draw() {
  speed = map(mouseX, 5, width, 0, 50);
  background(0);
  translate(width / 2, height / 2);
  for (var i = 0; i < stars.length; i++) {
    stars[i].update();
    stars[i].show();
  }
}
