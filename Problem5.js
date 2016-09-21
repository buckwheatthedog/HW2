
function setup() {

  var y = 0;
  createCanvas(600, 600);
  background(0);
  for (var x = 25; x < width; x = x + 25) {
  ellipse(x, y + 25, 25, 25);

    for (var i = 25; i < width; i = i + 25) {
      ellipse(i, i + 25, 25, 25);
      if (i == width / 2) {
        ellipse(i, i - 25, 25, 25);
        ellipse(i, i - 24, 25, 25);
      }
    }
  }
}
