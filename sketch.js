var grav, Block, blocks, Ball, ball;
function setup() {
    angleMode('degrees')
    createCanvas(600, 600);
    grav = createVector(0, 0);
    Block = function(x, y, W, H) {
        this.pos = createVector(x, y);
        this.sz = {w: W, h: H};
    };
    Block.prototype.display = function() {
        fill(0);
        noStroke();
        rectMode(CENTER);
        rect(this.pos.x, this.pos.y, this.sz.w, this.sz.h);
    }
    blocks = [new Block (300, 575, 600, 50), new Block (300, 25, 600, 50), new Block (25, 300, 50, 600), new Block (575, 300, 50, 600)];
    
    Ball = function(x, y) {
        this.pos = createVector(x, y);
        this.p = createVector(0, 0);
        this.vel = createVector(0, 0);
    };
    Ball.prototype.update = function() {
        this.p.set(this.pos);
        this.vel.add(grav);
        this.pos.add(this.vel);
    };
    Ball.prototype.collide = function() {
        for (var i = 0; i < blocks.length; i++) {
            if (this.pos.x >= blocks[i].pos.x - blocks[i].sz.w/2 - 15 && this.p.x <= blocks[i].pos.x - blocks[i].sz.w/2 - 15 && this.vel.x >= 0 && this.pos.y >= blocks[i].pos.y - blocks[i].sz.h/2 - 15 && this.pos.y <= blocks[i].pos.y + blocks[i].sz.h/2 + 15) {
                this.vel.x /= 2;
                this.vel.x = -this.vel.x;
                this.pos.x = blocks[i].pos.x - blocks[i].sz.w/2 - 15;
            }
            if (this.pos.x <= blocks[i].pos.x + blocks[i].sz.w/2 + 15 && this.p.x >= blocks[i].pos.x + blocks[i].sz.w/2 + 15 && this.vel.x <= 0 && this.pos.y >= blocks[i].pos.y - blocks[i].sz.h/2 - 15 && this.pos.y <= blocks[i].pos.y + blocks[i].sz.h/2 + 15) {
                this.vel.x /= 2;
                this.vel.x = -this.vel.x;
                this.pos.x = blocks[i].pos.x + blocks[i].sz.w/2 + 15;
            }
            if (this.pos.y >= blocks[i].pos.y - blocks[i].sz.h/2 - 15 && this.p.y <= blocks[i].pos.y - blocks[i].sz.h/2 - 15 && this.vel.y >= 0 && this.pos.x >= blocks[i].pos.x - blocks[i].sz.w/2 - 15 && this.pos.x <= blocks[i].pos.x + blocks[i].sz.w/2 + 15) {
                this.vel.y /= 2;
                this.vel.y = -this.vel.y;
                this.pos.y = blocks[i].pos.y - blocks[i].sz.h/2 - 15;
            }
            if (this.pos.y <= blocks[i].pos.y + blocks[i].sz.h/2 + 15 && this.p.y >= blocks[i].pos.y + blocks[i].sz.h/2 + 15 && this.vel.y <= 0 && this.pos.x >= blocks[i].pos.x - blocks[i].sz.w/2 - 15 && this.pos.x <= blocks[i].pos.x + blocks[i].sz.w/2 + 15) {
                this.vel.y /= 2;
                this.vel.y = -this.vel.y;
                this.pos.y = blocks[i].pos.y + blocks[i].sz.h/2 + 15;
            }
        }
    };
    Ball.prototype.display = function() {
        fill(255, 0, 0);
        noStroke();
        ellipse(this.pos.x, this.pos.y, 30, 30);
    };
    ball = new Ball(300, 300);
}

function draw() {
    grav.set(cos(-rotationX), sin(-rotationX));
    background(255);
    ball.update();
    ball.collide();
    ball.display();
    for (var i = 0; i < blocks.length; i++) {
        blocks[i].display();
    }
}
