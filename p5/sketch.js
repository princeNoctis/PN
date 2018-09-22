let timer = 5

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(220);
  textSize(25);
  text(timer, width/2,50);

  // frameCount --> this keeps track of the number of times the program has gone throught the code, 60 = 1 second
  // % ---> this is the Modulo operator, it divides numbers and evaluates to the remainder: 17 % 5 = 2 
  // this can be used to determine if the number on the left is divisible by the number on the right

  if (frameCount % 60 == 0 && timer > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
    timer --;
  }
  if (timer == 0) {
    text("GAME OVER", width/2, height*0.7);
    textAlign(CENTER, CENTER);
  }

}
