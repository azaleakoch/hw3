var x = 230;
var y = 220;

function setup() {
  createCanvas(400, 400);
  
}

function draw() {
  background(90,90,100);
  noStroke();
  
  // draw pipe
  rect(0, 200, x, 20);

  // draw drip
  ellipse(x, y, 9);

  // down 3 pixels each frame, but maybe should be accelerating?
  y = y + 5
  
  //text?
  if (y > height-100){
    textAlign(RIGHT);
    text('drip', 300, 250);
  }

  // if invisible for a full “height” amount…
  if (y > height+200) {
    // reset
    y = 220;
  }
}
