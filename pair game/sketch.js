// paired programing assignment
// Muhammad Sheikh, Santanu Deb
// 12/2/2018
// Extra for Experts:
//
// BY Muhammad and Santanu
// STATE TWO WAS MADE by : Muhammad
//
// STATE ONE AND THREE WAS by Santanu
//
// directed by Muhammad
//
// developed by Muhammad and Santanu
//
// Designed by Santanu
//
//


///////////////////////////////////////////////////////////////////////////////////////////

// STATING letAIABLES

let state = 0;
let easyMode, onGround, died, deathScreen,changeMode;
let tickSpeed = 8;
let offGround = false;
let poly = [];
let score = 0;
let playerImg;
let font,hardFont;
let easyButtonX = 450;
let easyButtonY = 250;
let hardButtonX = 200;
let hardButtonY = 250;
let angle = 0.0;
let jitter = 0.0;
let menuMusic,gameMusic,endMusic,dieSound;

//////////////////////////////////////////////////////////////////////////////////////////

let cube = {
  x: 150,
  y: 300,
  velocity: 0,
  g: 1,
  size: 60,
  jump: 14,
};

/////////////////////////////////////////////////////////////////////////////////////////

let pointyThing = {
  x: -300,
  y: 400,
  s: 25,
  speed: 2,
};

////////////////////////////////////////////////////////////////////////////////////////////

function preload() {
  // is loaded before setup() and draw() are called
  font = loadFont("assets/strasua.ttf");
  hardFont = loadFont("assets/Curse of the Zombie.ttf");
  menuMusic = loadSound("assets/music1.mp3");
  gameMusic = loadSound("assets/music2.mp3");
  dieSound = loadSound("assets/die.mp3");
}

////////////////////////////////////////////////////////////////////////////////////////

function setup() {
  textFont(font);
  createCanvas(800, 600);
  menuMusic.setVolume(0.2);
  menuMusic.loop();
  gameMusic.setVolume(0.2);
}

// /////////////////////////////////////////////////////////////////////////////////////////
function newTri() {
  // new vectors for pointyThing
  poly[0] = createVector(pointyThing.x - pointyThing.s, pointyThing.y);
  poly[1] = createVector(pointyThing.x + pointyThing.s, pointyThing.y);
  poly[2] = createVector(pointyThing.x, pointyThing.y - pointyThing.s * 2);
  died = collideRectPoly(cube.x - cube.size, cube.y - cube.size, cube.size, cube.size, poly);
}

////////////////////////////////////////////////////////////////////////////////////////

function resetPos() {
  pointyThing.x = 899;
  score = 0;
}

///////////////////////////////////////////////////////////////////////////////////////

function mousePressed() {
  easyMode = collidePointRect(mouseX, mouseY, easyButtonX, easyButtonY, 150, 50);
  if (easyMode === true && state === 0){
    gameMusic.play();
    menuMusic.stop();
    state = 1;
  }
  deathScreen = collidePointRect(mouseX, mouseY, 300, 200, 250, 100);
  if (deathScreen === true && state === 2) {
    state = 0;
    gameMusic.stop();
    menuMusic.play();
    resetPos();
  }
  changeMode = collidePointRect(mouseX,mouseY,hardButtonX,hardButtonY,150,50);
  if (changeMode === true){
    menuMusic.stop();
    gameMusic.play();
    state = 1;
    return changeMode = true;
  }
}

///////////////////////////////////////////////////////////////////////////////////////////

function keyPressed() {
  if (keyCode === 32 && state === 1 && offGround === false) {
    cube.velocity -= cube.jump;
    offGround = true;
  }
}

/////////////////////////////////////////////////////////////////////////////////////////

function draw() {
  stroke("black");
  strokeWeight(10);
  fill("purple");
  rect(0, 0, width, height);

  ///////////////////////////////////////////////////////////////////////////////////////
  //state #0
  if (state === 0) {
    let hitbox = collidePointRect(mouseX, mouseY, easyButtonX, easyButtonY, 150, 50);
    if (hitbox) {
      fill("lightgreen");
    }
    else {
      fill(8, 200, 55);
    }
    rectMode(CORNER);
    strokeWeight(5);
    rect(easyButtonX, easyButtonY, 150, 50);
    textSize(25);
    fill("black");
    noStroke();
    text("play",499,289);
    //text on the home screen...
    fill("black");
    textSize(15);
    text("A pair programing Project by Santanu Deb and Muhammad .S", 50, 550);
    fill(8, 200, 55);
    strokeWeight(5);
    stroke("red");
    textSize(60);
    rect(50,125,700,30);

    fill("black");
    text("Geometry jump!", 130, 150);
    hardtext();
    spinningThingy();
  }

  ///////////////////////////////////////////////////////////////////////////////////////////
  //state #1

  if (state === 1) {
    rectMode(CORNER);
    //ground
    fill("blue");
    stroke(4, 90, 226);
    rect(-50, 400, 1000, 200);
    //the cube physics

    for (let i = 0; i < tickSpeed; i++) {
      //checks if the cube is hitting the pointyThing.
      newTri();
      //makes the pointyThing move...
      if (died === false) {
        pointyThing.x -= pointyThing.speed / tickSpeed;
      }
      if (died === true) {
        dieSound.setVolume(0.1);
        dieSound.play();
        gameMusic.stop();
        state = 2;
      }

      cube.y += cube.velocity / tickSpeed;
      onGround = collideRectRect(-50, 400, 10000, 200, cube.x - cube.size, cube.y - cube.size, cube.size, cube.size);
      if (onGround === false) {
        cube.velocity += cube.g / tickSpeed;
        //////////////////////////////////////////////////////////////////////////////////////////
        //draw the spiki boi
        fill("blue");
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
    /////////////////////////////////////////////////////////////////////////////////////////
    //draws cube
    stroke("black");
    fill(random(255),random(255),random(255));
    ellipse(cube.x - cube.size, cube.y - cube.size, cube.size, cube.size);
    //shows the score
    score++;

    textSize(30);
    noStroke();
    fill("yellow");
    text("score: " + score , 10, 40);

    if (changeMode === true) {
      pointyThing.speed = score/3;
    }
    else {
      pointyThing.speed = score / 10;
    }
    if (pointyThing.speed > 35) {
      pointyThing.speed = 35;
    }
  }
  /////////////////////////////////////////////////////////////////////////////////////////
  //state #DEATH

  if (state === 2) {
    let hitbox = collidePointRect(mouseX, mouseY, 320, 200, 200, 100);
    if (hitbox) {
      fill("#EE82EE");
    }
    else {
      fill("PURPLE");
    }
    //deathScreenawn button
    rectMode(CORNER);
    stroke("darkgreen");
    rect(300, 200, 250, 100);
    textSize(20);
    noStroke();
    fill(0);
    text("return to main menu", 310, 265);

    //happy message
    textSize(40);
    stroke("darkred");
    fill("red");
    text(" you   are    died! ", 200, 145);

    //shows the score
    fill("yellow");
    noStroke();
    text("You got: " + score + " points!", 150, 400);

  }
}

//////////////////////////////////////////////////////////////////////////////////////////////

function hardtext(){
  push();
  // Hard option for try hards
  let hitboxtwo = collidePointRect(mouseX, mouseY, hardButtonX, hardButtonY, 150, 50);
  if (hitboxtwo) {
    fill("lightgreen");
  }
  else {
    fill(8, 200, 55);
  }
  textSize(25);
  strokeWeight(9);
  stroke("black");
  textFont(hardFont);
  rect(hardButtonX,hardButtonY,150,50);
  fill("red");
  text("HARD",hardButtonX/0.840,hardButtonY/0.870);
  fill("black");
  pop();
}
/////////////////////////////////////////////////////////////////////////////////////////////

function spinningThingy(){
  stroke("green");
  fill("purple");
  push();
  if (second() % 1 === 0) {
    jitter = (-0.1, 0.1);
  }
  //increase the angle value using the most recent jitter value
  angle = angle + jitter;
  //use cosine to get a smooth CW and CCW motion when not jittering
  let c = sin(angle)-720;
  //move the shape to the center of the canvas
  translate(750, 550);
  //apply the final rotation
  rotate(c);
  rectMode(CENTER);
  rect(0, 0, 25, 25);
  ellipse(0,0,7.5,7.5);
  ellipseMode(CENTER);
  pop();
}
