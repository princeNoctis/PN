// gridsize assignment
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let area = [];
let nx = 0;
let nx = 0;
let bx = 125;
let by = 125;
let wid = 0;
let hei = 0;
let finish = 0;

function setup() {
	createCanvas(600, 400);
	//generate area
	for (let x = 0; x < 50; x++) {
		area[x] = [];
		for (let y = 0; y < 50; y++) {
			if (x < 5 && y < 5 || x > 44 && y > 44) {
				area[x][y] = 0;
			}
			else {
				if (random(1) < 0.8) {
					area[x][y] = 0;
				}
				else {
					area[x][y] = 1;
				}

			}
			if (x == 49 && y == 49) {
				area[x][y] = 2;
			}
		}
	}
}

function draw() {
	//player movment
	if (keyIsDown(UP_ARROW)) {
		hei -= 0.05;
	}
	if (keyIsDown(LEFT_ARROW)) {
		wid -= 0.05;
	}
	if (keyIsDown(DOWN_ARROW)) {
		hei += 0.05;
	}
	if (keyIsDown(RIGHT_ARROW)) {
		wid += 0.05;
	}
	wid = wid / 1.03;
	hei = hei / 1.03;
	by += hei;
	bx += wid;
		//screen movement and safe gaurds
	if (nx + 10 * 50 < bx) {
		nx += abs(wid);
	}
	if (nx + 2 * 50 > bx) {
		nx -= abs(wid);
	}
	if (nx + 6 * 50 < by) {
		nx += abs(hei);
	}
	if (nx + 2 * 50 > by) {
		nx -= abs(hei);
	}
	if (bx < 0) {
		bx = 0;
	}
	if (by < 0) {
		by = 0;
	}
	if (bx > 50 * 50) {
		bx = 50 * 50;
	}
	if (by > 50 * 50) {
		by = 50 * 50;
	}
	if (nx < 0) {
		nx = 0;
	}
	if (nx < 0) {
		nx = 0;
	}
	if (nx > 37.99 * 50) {
		nx = 37.99 * 50;
	}
	if (nx > 42 * 50) {
		nx = 42 * 50;
	}
	//display area
	for (let x = round(nx / 50 - 0.5); x < round(nx / 50 - 0.5) + 13; x++) {
		for (let y = round(nx / 50 - 0.5); y < round(nx / 50 - 0.5) + 9; y++) {
			if (area[x][y] === 0) {
				fill(200, 200, 200);
				rect(x * 50 - nx, y * 50 - nx, 50, 50);
			} else if (area[x][y] == 1) {
				fill(0, 0, 0);
				rect(x * 50 - nx, y * 50 - nx, 50, 50);
				if (bx > x * 50 && by > y * 50 && bx < x * 50 + 50 && by < y * 50 + 50) {
					nx = 0;
					nx = 0;
					bx = 125;
					by = 125;
					wid = 0;
					hei = 0;
				}
			}
			else {
				fill(0, 255, 0);
				rect(x * 50 - nx, y * 50 - nx, 50, 50);
				if (bx > x * 50 && by > y * 50 && bx < x * 50 + 50 && by < y * 50 + 50 && finish === 0) {
					finish = 1;
				}
			}
		}
	}
	fill(100, 100, 255);
	ellipse(bx - nx, by - nx, 10, 10);
		//run finish animtion
	if (finish > 0) {
		finish = finish * 1.1;
		background(255, 255, 255, finish);
		fill(0);
		textSize(50);
		text("YAY you win", 270, 200);
		if (finish > 255) {
			noLoop();
		}
	}
}
