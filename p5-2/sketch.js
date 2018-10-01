var button;
var x = 200;
var y = 200;


function setup() {
	let button = createButton("Menu");
	button.position(500, 550);
	button.mousePressed(clickFunction);
  createCanvas(600, 600);
}

function draw() {
  background(220);
  fill(0);
  ellipse(x,y,25,25);
	rect(width/2,height/2,10,60);
	fill(34,0,34)


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
