function setup() {
  createCanvas(600, 600);
  angleMode('degrees');
}

function draw() {
  background(255);
  fill(0);
  noStroke();
  ellipse(300 + cos(90-rotationX)*200, 300 + sin(90-rotationY)*200, 50, 50);
}
