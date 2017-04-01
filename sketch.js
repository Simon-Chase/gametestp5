function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(255);
  fill(0);
  noStroke();
  ellipse(300 + cos(-rotationX)*200, 300 + sin(-rotationY)*200, 50, 50);
}
