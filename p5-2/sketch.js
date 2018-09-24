var button;
function setup(){
	createCanvas(400, 200);
	background(0);
	let button = createButton("Simple Button");
	button.position(10, 300);
	button.mousePressed(clickFunction);
}

function clickFunction(){
	background(random(255));
}
