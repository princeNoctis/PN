// levelone Assignment
// Muhammad Sheikh
// oct.27,2018
// Extra for Experts:
//

let playerWidth;
let playerHeight;
let px = 5;
let py = 5;
let rows1 = 5;
let cols1 = 5;
let levelone;
let cellsize1;
let state = 0;
let leveltwo;
let cellsize2;
let rows2 = 5;
let cols2 = 5;

function preload() {
  levelone = loadStrings("assets/Level1.txt");
  leveltwo = loadStrings("assets/Level2.txt");
}

function setup() {
  createCanvas(600, 600);
  rows1 = levelone[0].length;
  cols1 = levelone[0].length;
  cellsize1 = width / cols1;
  //levelone = createRandom2dArray(cols, rows);
  cleanUplevelone();
}

function draw() {
  background(255);
  displaylevelone();
  displayleveltwo();

}

function cleanUplevelone() {
  for (let i=0; i<levelone.length; i++) {
    levelone[i] = levelone[i].split("");  //turns it into a 2d array
  }
}


function displayleveltwo() {
  for (let y = 0; y < rows2; y++) {
    for (let x = 0; x < cols2; x++) {
      if (leveltwo[y][x] === "2") {
        fill(0,0,255);
      }
      else if (leveltwo[y][x] === "0"){
        fill(255);
      }
      else if (leveltwo[y][x] === "3"){
        fill(random(255),0,0);
      }
      else if (leveltwo[y][x] === "5"){
        fill(255,0,0);
      }
      else {
        fill(100,150,170);
      }
      noStroke();
      rect(x*cellsize2, y*cellsize2, cellsize2, cellsize2);
    }
  }
}

function displaylevelone() {
  for (let y = 0; y < rows1; y++) {
    for (let x = 0; x < cols1; x++) {
      if (levelone[y][x] === "2") {
        fill(0,0,255);
      }
      else if (levelone[y][x] === "0"){
        fill(255);
      }
      else if (levelone[y][x] === "3"){
        fill(random(255),0,0);
      }
      else if (levelone[y][x] === "5"){
        fill(255,0,0);
      }
      else {
        fill(0,150,0);
      }
      noStroke();
      rect(x*cellsize1, y*cellsize1, cellsize1, cellsize1);
    }
  }
}


function cube(){
  for (let i = 0; i < px; i++){
    for (let j = 0; j < py; j++){
      if (levelone[state] === 0 && [i][j] === 2 ) {
        px=j;
        py=i;
        return;
      }
    }
  }

}


function keyPressed(){
  if (keyCode === RIGHT_ARROW ){
    for (let i = 0; i< "1";i++){
      levelone[6][4] = "2";
    }
  }
   if (keyCode === RIGHT_ARROW ){
    for (let i = 0; i< "1";i++){
      levelone[6][4] = "2";
    }
  }
}
