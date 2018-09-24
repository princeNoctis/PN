let timer = 30
var button;




function setup() {
  createCanvas(1024, 600);
  gardener = loadImage("assets/gardener.png");  // loading the image of the gardener
  crop = loadImage("assets/grass.png");
  bg = loadImage("assets/bg.jpg");
}

function draw() {
  background(bg);
  textSize(50);
  // loading the image of the gardener
  image(gardener, 20,50, gardener.width/2, gardener.height/2);
  image(crop,225,125,crop.width/2, crop.height/2);
  text(timer, width/2,50);

  // frameCount --> this keeps track of the number of times the program has gone throught the code, 60 = 1 second
  // % ---> this is the Modulo operator, it divides numbers and evaluates to the remainder: 17 % 5 = 2
  // this can be used to determine if the number on the left is divisible by the number on the right

  if (frameCount % 60 == 0 && timer > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
    timer --;
  }
  if (timer == 0) {
    text("GAME OVER",200,175, width/2, height*0.7);
    textAlign(CENTER, CENTER);

  }

}
