# What code draws the blades of grass?
  function draw() {
    stroke(random(60, 70), 100, 90);
    line(x, height-10, x+random(-10, 10), height-10-random(h));
    noStroke();
  }

# What code makes the "lawnmower" come by? How often does it come by?
  if (random(100) > 99.9) {
    fill(255);
    rect(0, 0, width, height-15);
    h = 10;
  }
  the statement generates random numbers, and if the number is greater than 99.9 the lawnmower goes nuts.

# What's the point of the h variable?
  h is the base height of the grass.

# What does the -10 do in the second and fourth arguments of the line function, height-10-random(h) ? Why is it there?
  that line is what makes the grass "grow."
