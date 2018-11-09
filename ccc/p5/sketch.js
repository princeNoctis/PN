// gridsize assignment
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let nombreLigne = 20;
let fps = 10;

let heightG;
let hud = 100;
let score = 0;

let x = 1;
let y = 1;

let xf = 1;
let yf = 1;

let sizeX;
let sizeY;

let l = 30;
let c;

let gameOver;

function setup() {
	createCanvas(600, 600 + hud);
	frameRate(fps);
	background(255);

	heightG = height - hud;
	gameOver = false;

	sizeX = (width / nombreLigne);
	sizeY = (heightG / nombreLigne);
	x = (width / nombreLigne);
	y = (heightG / nombreLigne);

	xf = random(1, nombreLigne);
	yf = random(1, nombreLigne);

	fill(255);
	rect(0, hud, width - 1, height - hud -1);
}


function draw() {
	rectMode(CORNER);
	fill(255, fps+l);
	rect(0, hud, width - 1, height - hud -1);
	fill(100);
	rect(0, 0, width - 1, hud);
	grid();
  move();
	game_over();
	if(gameOver == true){
		text('GAME OVER !', 10, 152);
	}
	snake();
	food();
	scoreD();
}


function grid() {
	for (let i = 1; i <= nombreLigne; i++) {
		line(sizeX * i , 0 + hud, sizeX * i , height);
		line(0, sizeY * i + hud, width, sizeY * i + hud);
	}
}



function snake() {
	rectMode(CENTER);
	fill(0);
	rect(x / 2, y / 2 + hud, sizeX - 5, sizeY - 5);
}


function move() {
	if(gameOver == false)
	{
		switch (keyCode)
		{
			case 37: //key code for left
				x -= sizeX * 2;
				break;
			case 38: //key code for up
				y -= sizeY * 2;
				break;
			case 39: //key code for right
				x += sizeX * 2;
				break;
			case 40: //key code for down
				y += sizeY * 2;
				break;
		}

		if(x / (sizeX * 2) + 0.5 > nombreLigne){
			x = sizeX;
		}

		if(x / (sizeX * 2) + 0.5 <= 0){
			x = width*2 - sizeX;
		}

		if(y / (sizeY * 2) + 0.5 > nombreLigne){
			y = sizeY;
		}

		if(y / (sizeY * 2) + 0.5 <= 0){
			y = heightG*2 - sizeY;
		}
	}
}


function food() {
	fill(0);
	ellipse((sizeX * xf) - (sizeX / 2), (sizeY * yf) - (sizeY / 2) + hud, sizeX - 5, sizeY - 5);

	if (x / (sizeX * 2) + 0.5 == xf & y / (sizeY * 2) + 0.5 == yf) {
		xf = parseInt(random(1, nombreLigne));
		yf = parseInt(random(1, nombreLigne));
		score++;
		l--;
	}
}


function scoreD(){
	textSize(32);
	fill(255);
	text('score : ', 10, 30);
	text(score, 135, 32);
}


function game_over(){
	c = get(x / 2, y / 2 + hud);
  fill(255);
	text('color : ', 10, 82);
	text(c[0], 135, 82);
	if(c[0] > 40 & c[0] < 220){
		gameOver = true;
	}
}
