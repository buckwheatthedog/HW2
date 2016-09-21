function setup() {

  var y = 0;
  createCanvas(600, 600);
  background(0);
  for (var x = 25; x <= width; x = x + 25) {
    if (x < width / 2) {
      for (y = 25; y < x; y = y + 25) {
        ellipse(x, y, 25, 25);
      }
    } else {
      for (y = 25; y < width - x; y = y + 25) {
        ellipse(x, y, 25, 25);
        println(x, y);
        //ellipse(y, y + 25, 25, 25);
        //     //  if (y == width / 2) {

      }
    }
  }
}
}
