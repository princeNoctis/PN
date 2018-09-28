var button;
var x = 200;
var y = 200;


function setup() {
	let button = createButton("reset");
	button.position(700, 650);
	button.mousePressed(resetSketch);
  createCanvas(600, 600);
}

function draw() {
  background(220);
  fill(0);
  ellipse(x,y,50,50);
	rect(width/2,height/2,50,100);

  //x = x + 1;


  if (x >= 600){
   x = 0;
  }

}
function clickFunction(){
	background(random(255));
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    y = y - 20;
  } else if (keyCode === DOWN_ARROW) {
   y = y + 20;
  }
  if (keyCode === LEFT_ARROW) {
    x = x - 20;
  } else if (keyCode === RIGHT_ARROW) {
    x = x + 20;
  }

}
