
function setup() {
    createCanvas(windowWidth, windowHeight);
    background(255);
    frameRate(20);
}

function draw() {
    noStroke();
    fill(0, random(0,255), random(255));
    rect(0,random(windowHeight), windowWidth, random(200));
    
    noStroke();
    fill(255);
    rect(0, random(windowHeight), windowWidth, random(4));
    }
    

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}