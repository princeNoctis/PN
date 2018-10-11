// Project Title
// Muhammad Sheikh
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let box;
let boy;
let circleSize = 30;
let overcircle = false;
let xOffset = 0.0;
let yOffset = 0.0;
let x, y;


function setup() {
  createCanvas(windowWidth, windowHeight);
  box = width/2.0;
  boy = height/2.0;
  ellipseMode(RADIUS);
  noStroke();
}

function draw() {
  background(0);
<<<<<<< HEAD
  overCircle = dist(mouseX,mouseY,x,y)
  if overCircle > RADIUS {
    fill(134,155,243);
=======
  stroke(50);
  if (mouseX > box-circleSize && mouseX < box+circleSize &&
      mouseY > boy-circleSize && mouseY < boy+circleSize) {
    overcircle = true;
>>>>>>> 3714f74fb883e4ff1bb971bc2080ee05c522fc51
  }
  else {
    fill(244,56,200);
  }
<<<<<<< HEAD
  ellipse(RADIUS)
=======
  ellipse(box, boy, circleSize, circleSize);
  translate(box,boy);
  box = box + random(-3, 2);
  boy = boy - 1;

  if (boy < 0) {
    boy = windowHeight;
  }
  if (box < 0) {
    box = windowWidth;
  }
>>>>>>> 3714f74fb883e4ff1bb971bc2080ee05c522fc51

}

function mousePressed() {
  if(overcircle) {
    fill(random(255, 255, 255));
  }
  xOffset = mouseX-box;
  yOffset = mouseY-boy;

}
