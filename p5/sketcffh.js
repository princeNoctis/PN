// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

class Walker {
  constructor() {
    this.x = width/2;
    this.y = height/2;
    this.color = "red";
    this.speed = 1;
  }
  display () {
    fill(this.color);
    ellipse(this.x,this.y,2,2);
  }

  move() {
    let choice = random(100);
    if ( choice < 25) {
      //up
      this.y -= this.speed;
    }
    else if (choice < 50){
      //down
      this.y += this.speed;
    }
    else if (choice < 75){
      //left
      this.x -= this.speed;
    }
    else{
      //right
      this.x += this.speed;
    }
  }

}

let me;

function setup() {
  createCanvas(windowWidth,windowHeight);
  me = new Walker();
}


function draw(){
  me.display();
  me.move();

}
