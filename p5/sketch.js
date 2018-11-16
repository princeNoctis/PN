let bird_loadimg, bird_createimg;

function preload(){
  bird_loadimg = loadImage ("assets/sorry.gif");
  bird_createimg = createImg("assets/sorry.gif");
}

function setup() {
  createCanvas(500, 500);
  background("yellow");
  //noLoop();
}

function draw() {
  bird_createimg.position(width/2,height/2); //loads GIF correctly
}
