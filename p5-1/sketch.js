// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


class Particle {
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.size = 35;
    this.dx = random(-10,10);
    this.dy = random(-10,10);
    this.transparency = 255;
    this.color = color(random(255),random(255),random(255),this.transparency);
  }

  display() {
    fill(this.color);
    ellipse(this.x,this.y,this.size,this.size);
  }
  update() {
    this.transparency -= 5;
    this.color.setAlpha(this.transparency);
    this.x += this.dx;
    this.y += this.dy;
  }
}

let particle;




function setup() {
  createCanvas(windowWidth, windowHeight);
  particle = new Particle(width/2,height/2);
}

function draw() {
  particle.update();
  background(0);
  particle.display();
}
