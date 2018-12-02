// paired programing assignment
// Muhammad Sheikh, Santanu Deb
// 12/2/2018
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
// BY Muhammad and Santanu
// STATE TWO WAS MADE BY : Muhammad
//
//
// STATE ONE AND THREE WAS BY Santanu




let state = 0;
let start, onGround, died, resp;
let tickSpeed = 10;
let offGround = false;
let poly = [];
let score = 0;


let cube = {
	x: 150,
	y: 300,
	velocity: 0,
	g: 1,
	size: 60,
	jump: 14,
};

let pointyThing = {
	x: -300,
	y: 400,
	s: 25,
	speed: 2,

};

function newTri() {
	// new vectors
	poly[0] = createVector(pointyThing.x - pointyThing.s, pointyThing.y);
	poly[1] = createVector(pointyThing.x + pointyThing.s, pointyThing.y);
	poly[2] = createVector(pointyThing.x, pointyThing.y - pointyThing.s * 2);
	died = collideRectPoly(cube.x - cube.size, cube.y - cube.size, cube.size, cube.size, poly);
	//println(died);

}

function resetPos() {
  pointyThing.x = 1000;
  score = 0;

}

function setup() {
	createCanvas(800, 600);

}

function mousePressed() {
  start = collidePointRect(mouseX, mouseY, 300, 200, 200, 100);
  if (start === true && state === 0) {
    state = 1;

	}
	resp = collidePointRect(mouseX, mouseY, 300, 200, 200, 100);
	if (resp === true && state === 2) {
		state = 1;
		resetPos();
	}
}

function keyPressed() {
	if (key === " " && state === 1 && offGround === false) {
		cube.velocity = -cube.jump;
		offGround = true;
	}

}

//--------------------------------------------------------------------

function draw() {
	stroke(0);
	background(100);
	strokeWeight(10);
	fill("teal");
	rect(0, 0, width, height);

	//---------------------------------------------------------------------
	//state #1 (start page)

	if (state === 0) {
		rectMode(CORNER);
		fill("green");
		strokeWeight(5);
		rect(300, 200, 200, 100);
		textSize(60);
		fill("black");
		noStroke();
		text("play", 337, 270);

		//text on the home screen...
		fill("black");
		textSize(20);
		text("A pair programing Project by Santanu Deb and Muhammad .S", 10, 490);

		fill(8, 173, 55);
		strokeWeight(5);
		stroke("darkgreen");
		textSize(60);

		text("Mini Geometry Dash!", 200, 150);

	}

	//------------------------------------------------------------------------
	//state #2 (game screen)

	if (state === 1) {
		rectMode(CORNER);
		//ground
		fill("blue");
		stroke(4, 90, 226);
		rect(-50, 400, 1000, 200);
		//the cube physics IE: gravity.

		for (let i = 0; i < tickSpeed; i++) {
			//checks if the cube is hitting the pointyThing.
			newTri();
			//makes the pointyThing move...
			if (died === false) {
				pointyThing.x -= pointyThing.speed / tickSpeed;

			}
			if (died === true) {
				state = 2;
			}

			cube.y += cube.velocity / tickSpeed;
			onGround = collideRectRect(-50, 400, 10000, 200, cube.x - cube.size, cube.y - cube.size, cube.size, cube.size);
			if (onGround === false) {
				cube.velocity += cube.g / tickSpeed;

				//draw the spiki boi
				fill("red");
				stroke("darkred");
				strokeWeight(10);
				triangle(pointyThing.x - pointyThing.s, pointyThing.y, pointyThing.x + pointyThing.s, pointyThing.y, pointyThing.x, pointyThing.y - pointyThing.s * 2);

			}
			if (onGround === true) {
				cube.y -= cube.velocity;
				cube.velocity = 0;
				offGround = false;

				if (pointyThing.x < -100) {
					pointyThing.x = random(1500, 2000);

				}

			}

			cube.y += cube.velocity / tickSpeed;

		}
		//draws cube
		stroke("darkgreen");
		fill("green");
		rect(cube.x - cube.size, cube.y - cube.size, cube.size, cube.size);

		//shows the score
		score++;

		textSize(30);
		noStroke();
		fill("yellow");
		text("score: " + score , 10, 40);

		//sets the pointyThing speed
		pointyThing.speed = score / 30;
		if (pointyThing.speed > 35) {
			pointyThing.speed = 35;
		}
	}

	//--------------------------------------------------------------------------------------------------------
	//state #3 (died sceen)\

	if (state === 2) {
		//respawn button
		rectMode(CORNER);
		fill("green");
		stroke("darkgreen");
		rect(300, 200, 200, 100);
		textSize(40);
		noStroke();
		fill(0);
		text("Restart", 330, 265);

		//happy message
		textSize(50);
		stroke("darkred");
		fill("red");
		text("u is ded!", 290, 145);

		//shows the score
		fill("yellow");
		noStroke();
		text("You got: " + score + " points!", 175, 400);

	}
}
