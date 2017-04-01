function setup() {
    angleMode('degrees')
    createCanvas(600, 600);
}

function draw() {
    background(255);
    textSize(50);
    textAlign(CENTER);
    push();
    translate(300, 300);
    rotate(-rotationX);
    fill(0);
    noStroke();
    text(rotationX, 0, 0);
    pop();
}
