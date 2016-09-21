function setup() {
  createCanvas(400, 400);
  background(255);

  noStroke(); 
  colorMode(HSB, 400);
  for (var x = 10; x < width; x = x + 23) {
    for (var y = 10; y < height; y = y + 23) {
      var r = random(400);
      fill(x, y, 400);
      ellipse(x, y, 23, 23);

    }
  }
}
