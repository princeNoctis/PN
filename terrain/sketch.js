// Project Title
// Your Name
// Date


let x;
let time = 0;
let rects = [];
let rectWidth;
let numberOfRects;










function setup() {
  createCanvas(windowWidth, windowHeight);
  numberOfRects = 10;
  rectWidth = width / numberOfRects;
  generateRectangles();

}

function draw() {
  background(255);
  ellipse(x, height/2, 30,30);
  fill(0);
  x = noise(time)*width;
  ellipse(x,height/2,30,30);
  time += 0.02;

}
function displayRects() {
  for (let i = 0; i < rects.length; i++) {
    rect(rects[i].x,rects[i].y,h,[tl],[tr],[br],[bl])
  }
}



function generateRectangles() {
  for (let i = 0; i <numberOfRects; i++){
    let rectHeight = noise(time) * height;
    let someRect = {
      x:  i *rectWidth,
      y:  i *height - rectHeight,
      width : rectWidth,
      height : rectHeight,
    };
    rects.push(someRect);
    time += 0.02;

  }

}
