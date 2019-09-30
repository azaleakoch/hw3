var x = 210;
var y = 290;
var r = 0;
var size1 = 20
var speed = 5

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  noStroke();


  // draw smokestack
  fill(255);
  rect(195, height, 30, -100);

  // draw puff of smoke
  // fades darker as it gets closer to 0
  fill(y);
  translate(x, y);
  rotate(r);
  rect(-size1 / 2, -size1 / 2, size1, size1);

  // up 3 pixels
  y -= speed;
  size1 += 0.5


  // rotate 0.05 radians, which is about 2.8 degrees
  r += 0.05

  // if reach past the top a bunc
    speed -= 0.05
    size1 += 0.5
    r += 0.02
  
  if (speed <= 1) {
    speed = 1
  }

  if (y < -50) {
    speed = 5
    y = 290;
    size1 = 20
    r = 0
  }
}
