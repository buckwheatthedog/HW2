function setup() {
  createCanvas(400, 400);
  background(0);

  for (var x = 10; x < width; x = x + 23) {
    for (var y = 10; y < height; y = y + 23) {
      ellipse(x, y,23 ,23);
    }
  }
}
