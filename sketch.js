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
  rotate(rotationX);
  rect(300, 200, 300, 200);
  pop();
}
