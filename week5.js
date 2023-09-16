// Location of ball
var x = 50;
var y = 50;

// Speed
var speedX = 9;
var speedY = 5;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 255);
}

function draw() {
  
  // Draw background / ball
  background(0);
  circle(x, y, 75);
  
  // Moves ball
  x = x + speedX;
  y = y + speedY;
  
  // Bouncing around the frame
  if (x > width){
    fill(random(255), random(255), 255);
  	speedX = -9;
  }
  
  if (x < 0){
    fill(random(255), random(255), 255);
    speedX = 9;
  }
  
  if (y > height){
    fill(random(255),random(255), 255);
  	speedY = -5;
  }
  
  if (y < 0){
    fill(random(255),random(255), 255);
    speedY = 5;
  }
}
