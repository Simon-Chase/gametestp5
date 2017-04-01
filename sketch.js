function setup() {
    angleMode('degrees')
    createCanvas(600, 600);
}

function draw() {
    background(255);
    textSize(200);
    textAlign(CENTER);
    push();
    rotate(-rotationX);
    fill(0);
    noStroke();
    text('^', 300, 300);
    pop();
}
