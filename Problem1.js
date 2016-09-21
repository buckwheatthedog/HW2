function setup() {
  createCanvas(200, 200);
  background(0);

  var i = 1;
  while (i < 23) {
    ellipse(20, 20, 10, 10);
    ellipse(10, 10, 10, 10);
    ellipse(30, 30, 10, 10);
    ellipse(40, 40, 10, 10);
    ellipse(50, 50, 10, 10);
    ellipse(60, 60, 10, 10);
    ellipse(70, 70, 10, 10);
    ellipse(80, 80, 10, 10);
    ellipse(90, 90, 10, 10);
    ellipse(40, 40, 10, 10);
    ellipse(50, 50, 10, 10);
    ellipse(60, 60, 10, 10);
    ellipse(70,70,10,10);
    ellipse(80,80,10,10);
    ellipse(90, 90, 10, 10);
    ellipse(100, 100, 10, 10);
    ellipse(110, 110, 10, 10);
    ellipse(120, 120, 10, 10);
    ellipse(130, 130, 10, 10);
    ellipse(140, 140, 10, 10);
    ellipse(150,150,10,10);
    ellipse(160,160,10,10); 
    ellipse(170, 170, 10, 10);
    ellipse(180, 180, 10, 10);
    ellipse(190, 190, 10, 10);
    
    i = i + 1;
  }    
}


// or, alteratively you could use the bottom code:

//function setup() {
//  createCanvas(400, 400);
//  background(0);

//  for (var x = 10; x < width; x = x + 23) {
//    for (var y = 10; y < height; y = y + 23) {
//      ellipse(x, y,23 ,23);
//    }
//  }
//}
