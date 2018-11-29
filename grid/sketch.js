let x=500;
let y=500;
let gravity = 0;
let keys = [];
let img,player;



function preload() {
  img = loadImage("assets/player.gif");
}

function keyPressed() {
  keys[keyCode] = true;
}

function keyReleased() {
  keys[keyCode] = false;
}

function setup() {
  createCanvas(windowWidth, windowHeight);


}

function mayNotWork(x,y){
  player = image(img,x,y,100,100);
}

function block(x,y,w,h){
  rect(x,y,w,h);

}

function draw() {
	background(50,255,70);
	fill(255,100,0);
	mayNotWork(x,y-100);
	text(y,200,200);

	if(keys[LEFT_ARROW]){
	x = x - 5;
	}

	if(keys[RIGHT_ARROW]){
	x = x + 5;
	}

	gravity = gravity + 0.192;

	y = y + gravity;

	if(keys[UP_ARROW] && y >= 500){
	gravity = -7;
	}

	if(y > 500){
	y = 500;
	if(keys[UP_ARROW] === false){
	gravity = 0;
	}
	}

}
