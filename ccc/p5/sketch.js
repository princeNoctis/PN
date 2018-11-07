// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let b=1;//block
let p=2;//player
let g=3;//goal
let f=4;//death
let t=5;//standstill goal
let px=0;
let py=0;
let dir=0;
let start = [];
let stage=0;






let level= [[
   [1, 1, 1, 1, 1, 1, 1],
   [1, 0, 0, 0, 0, 0, 1],
   [1, 0, 0, 1, 0, 0, 1],
   [1, 0, 0, 0, 0, 3, 1],
   [1, 0, 0, 0, 0, 0, 1],
   [1, 2, 0, 0, 1, 0, 1],
   [1, 1, 1, 1, 1, 1, 1],
 ],
 [
   [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
   [0, 1, 0, 0, 0, 1, 0, 0, 0, 0],
   [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
   [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
   [0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
   [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
   [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
   [0, 2, 0, 0, 0, 0, 0, 0, 1, 0],
   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
   [0, 0, 0, 0, 0, 0, 3, 1, 0, 0],
 ]
]

function setup() {
  createCanvas(500,500);
  start=new int[level.length][2];
  findstart();
}

function draw() {
  background(55);
  player();
  if (level[stage][py][px]==7&&dir==0) {
    level[stage][py][px]-=2;
    stage++;
    stage%=level.length;
    level[stage][start[stage][0]][start[stage][1]]+=2;
  }
  if (dir!=0) {
    move();
  }
  show();
}

function show(){
  strokeWeight(0);
  for (let i=0; i<level[stage].length; i++) {
    for (let j=0; j<level[stage][i].length; j++) {
      if (level[stage][i][j]==1) {
        fill(255);
        stroke(255);
      }
      else if (level[stage][i][j]==2) {
        fill(0, 0, 255);
        stroke(0, 0, 255);
      }
      else if (level[stage][i][j]==3) {
        fill(0, 255, 0);
        stroke(0, 255, 0);
      }
      else if (level[stage][i][j]==4) {
        fill(255, 0, 0);
        stroke(255, 0, 0);
      }
      else if (level[stage][i][j]==5) {
        fill(255, 255, 0);
        stroke(255, 255, 0);
      }
      else {
        noStroke();
        fill(55);
      }
    let x = width/level[stage][i].length;
    let y = height/level[stage].length;
    rect(x*j, y*i, x, y);
    }
  }
}

function player() {
  for (int i=0; i<level[stage].length; i++) {
    for (int j=0; j<level[stage][i].length; j++) {
      if (level[stage][i][j]==2||level[stage][i][j]==7) {
        px=j;
        py=i;
        return;
      }
    }
  }
}
function findstart() {
  for (int k=0; k<level.length; k++) {
    for (int i=0; i<level[k].length; i++) {
      for (int j=0; j<level[k][i].length; j++) {
        if (level[k][i][j]==2) {
          start[k][0]=i;
          start[k][1]=j;
          if (k!=0) {
            level[k][i][j]=0;
          }
        }
      }
    }
  }
}
function coins() {
  let coins=0;
  for(int i=0;i<level[stage].length;i++){
    for(int j=0;j<level[stage][i].length;j++){
      if(level[stage][i][j]==6){
        coins=1;
      }
    }
  }
  return coins;
}
function move() {
  if (dir==1) {
    if (py==0) {
      level[stage][start[stage][0]][start[stage][1]]+=2;
      level[stage][py][px]-=2;
      dir=0;
      return;
    } else {
      if (level[stage][py-1][px]==1) {
        dir=0;
        return;
      } else if (level[stage][py-1][px]==3) {
        level[stage][py][px]-=2;
        stage++;
        stage%=level.length;
        level[stage][start[stage][0]][start[stage][1]]+=2;
        dir=0;
        return;
      } else if (level[stage][py-1][px]==4) {
        level[stage][start[stage][0]][start[stage][1]]+=2;
        level[stage][py][px]-=2;
        player();
        dir=0;
        return;
      } else {
        level[stage][py][px]-=2;
        level[stage][py-1][px]+=2;
        return;
      }
    }
  }

  if (dir==2) {
    if (px==level[stage][py].length-1) {
      level[stage][start[stage][0]][start[stage][1]]+=2;
      level[stage][py][px]-=2;
      dir=0;
      return;
    } else {
      if (level[stage][py][px+1]==1) {
        dir=0;
        return;
      } else if (level[stage][py][px+1]==3) {
        level[stage][py][px]-=2;
        stage++;
        stage%=level.length;
        level[stage][start[stage][0]][start[stage][1]]+=2;
        dir=0;
        return;
      } else if (level[stage][py][px+1]==4) {
        level[stage][start[stage][0]][start[stage][1]]+=2;
        level[stage][py][px]-=2;
        player();
        dir=0;
        return;
      } else {
        level[stage][py][px]-=2;
        level[stage][py][px+1]+=2;
        return;
      }
    }
  }

  if (dir==3) {
    if (py==level[stage].length-1) {
      level[stage][start[stage][0]][start[stage][1]]+=2;
      level[stage][py][px]-=2;
      dir=0;
      return;
    } else {
      if (level[stage][py+1][px]==1) {
        dir=0;
        return;
      } else if (level[stage][py+1][px]==3) {
        level[stage][py][px]-=2;
        stage++;
        stage%=level.length;
        level[stage][start[stage][0]][start[stage][1]]+=2;
        dir=0;
        return;
      } else if (level[stage][py+1][px]==4) {
        level[stage][start[stage][0]][start[stage][1]]+=2;
        level[stage][py][px]-=2;
        player();
        dir=0;
        return;
      } else {
        level[stage][py][px]-=2;
        level[stage][py+1][px]+=2;
        return;
      }
    }
  }

  if (dir==4) {
    if (px==0) {
      level[stage][start[stage][0]][start[stage][1]]+=2;
      level[stage][py][px]-=2;
      dir=0;
      return;
    } else {
      if (level[stage][py][px-1]==1) {
        dir=0;
      } else if (level[stage][py][px-1]==3) {
        level[stage][py][px]-=2;
        stage++;
        stage%=level.length;
        level[stage][start[stage][0]][start[stage][1]]+=2;
        dir=0;
      } else if (level[stage][py][px-1]==4) {
        level[stage][start[stage][0]][start[stage][1]]+=2;
        level[stage][py][px]-=2;
        player();
        dir=0;
        return;
      } else {
        level[stage][py][px]-=2;
        level[stage][py][px-1]+=2;
      }
    }
  }
}

function keyPressed() {
  if (dir==0) {
    if (key=='w'||key=='W') {
      dir=1;
    } else if (key=='d'||key=='D') {
      dir=2;
    } else if (key=='s'||key=='S') {
      dir=3;
		} else if (key=='a'||key=='A') {
      dir=4;
    }else if (key=='r'||key=='R') {
    level[stage][start[stage][0]][start[stage][1]]+=2;
    level[stage][py][px]-=2;
    player();
    dir=0;
  }
  }
}
