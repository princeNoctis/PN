// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let scene = 0;
let start, groundSmash, death, resp;
let tickSpeed = 10;
let inAir = false;
let poly = [];
let score = 0;


let player = {
	x: 150,
	y: 300,
	velocity: 0,
	g: 1,
	size: 60,
	jump: 14,
}

let spike = {
	x: -300,
	y: 400,
	s: 25,
	speed: 2,

}

function updateTriPos() {
	//at first this stuff was a bit touch and go...
	poly[0] = createVector(spike.x - spike.s, spike.y)
	poly[1] = createVector(spike.x + spike.s, spike.y)
	poly[2] = createVector(spike.x, spike.y - spike.s * 2)
	death = collideRectPoly(player.x - player.size, player.y - player.size, player.size, player.size, poly);
	//println(death);

}

function resetPos() {
  spike.x = 1000
  score = 0;

}

function setup() {
	createCanvas(800, 500);

}

function mousePressed() {
  start = collidePointRect(mouseX, mouseY, 300, 200, 200, 100);
  if (start === true && scene === 0) {
    scene = 1;

	}
	resp = collidePointRect(mouseX, mouseY, 300, 200, 200, 100);
	if (resp === true && scene === 2) {
		scene = 1;
		resetPos();
	}
}

function keyPressed() {
	if (key === " " && scene === 1 && inAir === false) {
		player.velocity = -player.jump;
		inAir = true;
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
	//scene #1 (start page)

	if (scene === 0) {
		rectMode(CORNER);
		fill("green");
		strokeWeight(5);
		rect(300, 200, 200, 100);
		textSize(60);
		fill("black");
		noStroke();
		text("Play!", 337, 270);

		//text on the home screen...
		fill("black");
		textSize(20);
		text("A pair programing Project by Santanu Deb and Muhammad", 10, 490);

		fill(8, 173, 55);
		strokeWeight(5);
		stroke("darkgreen");
		textSize(60);

		text("Shape Dash!", 200, 150);

	}

	//------------------------------------------------------------------------
	//scene #2 (game screen)

	if (scene === 1) {
		rectMode(CORNER);
		//ground
		fill("darkblue");
		stroke(4, 90, 226);
		rect(-50, 400, 10000, 200);
		//the player physics IE: gravity.                              ps i am afraid to make a jumping mecanisim... (i survived makin' it..)

		for (i = 0; i < tickSpeed; i++) {
			//checks if the player is hitting the spike.
			updateTriPos();
			//makes the spike move...
			if (death === false) {
				spike.x -= spike.speed / tickSpeed;

			}
			if (death === true) {
				scene = 2;
			}

			player.y += player.velocity / tickSpeed;
			groundSmash = collideRectRect(-50, 400, 10000, 200, player.x - player.size, player.y - player.size, player.size, player.size);
			if (groundSmash === false) {
				player.velocity += player.g / tickSpeed;

				//draw the spiki boi
				fill("red");
				stroke("darkred");
				strokeWeight(10);
				triangle(spike.x - spike.s, spike.y, spike.x + spike.s, spike.y, spike.x, spike.y - spike.s * 2);

			}
			if (groundSmash === true) {
				player.y -= player.velocity;
				player.velocity = 0;
				inAir = false;

				if (spike.x < -100) {
					spike.x = random(1500, 2000);

				}

			}

			player.y += player.velocity / tickSpeed;

		}

		//draws player
		stroke("darkgreen");
		fill("green");
		rect(player.x - player.size, player.y - player.size, player.size, player.size);

		//shows the score
		score++;

		textSize(30);
		noStroke();
		fill("yellow");
		text("Points: " + round(score / 10), 10, 40);

		//sets the spike speed
		spike.speed = score / 30;
		if (spike.speed > 35) {
			spike.speed = 35;
		}
	}

	//--------------------------------------------------------------------------------------------------------
	//scene #3 (death sceen)\

	if (scene === 2) {
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
		textSize(60);
		stroke("darkred");
		fill("red");
		text("u is ded!", 290, 145);

		//shows the score
		fill("yellow");
		noStroke();
		text("You got: " + round(score / 10) + " points!", 175, 400);

	}


}
