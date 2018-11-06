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
}

function cleanUplevelone() {
  for (let i=0; i<levelone.length; i++) {
    levelone[i] = levelone[i].split("");  //turns it into a 2d array
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
      if (levelone[state][i][j] === 2 ) {
        px=j;
        py=i;
        return;
      }
    }
  }

}


function keyIsPressed(){


}
