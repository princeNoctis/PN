// pair game
// mining game
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

// let playerY,playerX;

// function setup() {
//   createCanvas(800,600);
//   // createSprite(400, 200, 50, 50);
// }
//
// function draw() {
//   background(255,255,255);
//   // rect(pla)
//   // drawSprites();
//   // if (keyIsDown(87)) {
//   //   playerY -= 10;
//   // }
//   // if (keyIsDown(65)) {
//   //   playerX -= 10;
//   // }
//   // if (keyIsDown(83)) {
//   //   playerY += 10;
//   // }
//   // if (keyIsDown(68)) {
//   //   playerX += 10;
//   // // }
//   teri(startingPoints,1);
// }
let coin, asterisk, cloud, circle;

function setup() {
  createCanvas(800, 400);

  coin = createSprite(200, 200);
  coin.addAnimation("normal","assets/frame_00_delay-0.1s.png");
  asterisk = createSprite(200, 200);
  asterisk.addAnimation("normal", "assets/frame_0_delay-0.05s.png","assets/frame_1_delay-0.05s.png");


}

function draw() {
  background(255, 255, 255);

  asterisk.position.x = mouseX;
  asterisk.position.y = mouseY;

  //check and resolve the inteactions between sprites

  //sprite.overlap() returns true if overlapping occours
  //note: by default the check is performed on the images bounding coin
  //press mouse button to visualize them
  //collide also returns a true/false but it can simply be used to
  //resolve collisions.
  //If overlapping with coin asterisk will be placed
  //in the closest non overlapping position
  asterisk.collide(coin);

  //displace is the opposite of collide, the sprite in the parameter will
  //be pushed away but the sprite calling the function

  //if debug is set to true bounding coines, centers and depths are visualized
  asterisk.debug = mouseIsPressed;
  coin.debug = mouseIsPressed;

  drawSprites();
}
