// Project Title
// Muhammad Sheikh
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
// got some help from p5js website.

function game() {
  let circleSize = 30;
  let clickedCircle = false;

  let box;
  let boy;
  let x, y;
  let state;


  let startScreen;
  let timer = 10;

  let score;


  function setup() {
    createCanvas(windowWidth, windowHeight);
    box = windowWidth;
    boy = windowHeight;
    ellipseMode(RADIUS);
    state = 1;
    startScreen = loadImage("assets/start screen.PNG");
    score = createDiv("Score = 0");
    score.position(20, 20);
    score.id = "score";
    score.style("color", "white");
  }

  function draw() {

    background(0);
    stroke(220);
    if (mouseX > box-circleSize && mouseX < box+circleSize &&
        mouseY > boy-circleSize && mouseY < boy+circleSize) {
      clickedCircle = true;
    }
    time();
    texts();
    if (state === 1) {
      displayStartScreen();
    }
    else if (state === 2) {
      ellipse(box, boy, circleSize, circleSize);
      box = box + random(-8, 2);
      boy = boy - 4;
      if (boy < 0) {
        boy = windowHeight;
        fill(255);
      }
      mouseIsPressed();
      if (box < 0) {
        box = windowWidth;
        fill(255);
        box = box + random(-8, 2);
        boy = boy - 4;

        if (boy < 0) {
          boy = windowHeight;
          fill(255);
        }
        if (box < 0) {
          box = windowWidth;
          fill(255);
      }
    }

  }



  function mousePressed() {
    // Check if mouse is inside the circle
    let d = dist(mouseX, mouseY, box, boy);
    if (d < box) {
      // Pick new random color values
      r = random(255);
      g = random(255);
      b = random(255);
      }
    }

  function displayStartScreen() {
    let buttonWidth = windowWidth;
    let buttonHeight = windowHeight;
    let leftSide = width / 2 - buttonWidth / 2;
    let topSide = height / 2 - buttonHeight / 2;
    let rightSide = leftSide + buttonWidth;
    let bottomSide = topSide + buttonHeight;
    image(startScreen,0, 0);

    if (mouseX >= leftSide && mouseX <= rightSide && mouseY >= topSide && mouseY <= bottomSide) {
      fill(200,200,34);
      if (mouseIsPressed) {
        state = 2;
      }
    }
    else {
      fill(0);
    }

  }

  function texts() {
    fill(0,0,255);
    text("click on circles to score points before time run out",800 ,20);
    textSize(20);
  }

  function time() {
    textAlign(CENTER, CENTER);
    textSize(20);
    text(timer, 0, 0);
    if (frameCount % 60 === 0 && timer > 0) {
      timer --;
    }
    if (timer === 0) {
      text("GAME OVER", width/2, height*0.7);
    }

    }

  }

  function scoreApoint() {
    if (mouseClicked) {
      let prevScore = parseInt(score.html().substring(8));
      text("Score = " + score,"30px Comic Sans MS", 10, 30, "white");
    }
  }

  function switchScreen() {
    if (state === 2) {
      draw();
   	}
  }
}
