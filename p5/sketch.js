// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let fish;
let grayFish;



function preload() {
  fish = loadImage("assets/fish.jpg");
}



function setup() {
  createCanvas(600, 400);
  image(fish,0,0);
  grayFish = makeGrayscale(fish);
}

function draw() {
  background(0);
}

function makeGrayscale(sourceImage) {
  let img = createImage(sourceImage.width, sourceImage.height);

  sourceImage.loadPixels();
  img.loadPixels();

  for (let x = 0; x < img.width; x++) {
    for (let y = 0; y< img.height; x++) {
      let thisPixel = sourceImage.get(x,y);
      let r = red(thisPixel);
      let g = green(thisPixel);
      let b = blue(thisPixel);
      let average = (r+g+b) /3;
      let newPixel = color(average, average, average);
      img.set(x,y, newPixel);

    }
  }
  img.updatePixels();
  return img;
}
