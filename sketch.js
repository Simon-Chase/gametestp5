function setup() {
  angleMode("degrees");
  createCanvas(600, 400);
}

function draw() {
  background(255);
  fill(0);
  rectMode(CENTER);
  noStroke();
  push();
  translate(300, 200);
  rotate(-rotationX);
  rect(0, 0, 300, 200);
  pop();
}
