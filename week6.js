// Set colour values
let colour = 0
let colourInc = 1

//Set up canvas size, colour, colour modes
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  colorMode(HSB, 255);
}

function draw() {
  //Removes black border around
  strokeWeight(0);

  if (mouseIsPressed) {
    
    //Colour increments
    colour = colour + colourInc;
    if (colour > 255){
      colour = 255;
      colourInc *= -1;
    }
    else if(colour < 0){
      colour = 0;
      colourInc *= -1;
    }
    
    // Change colour and draw ellipses at mouse
    fill(colour, 255, 255);
    ellipse(mouseX, mouseY, random(10,50), random(10,50));
  }
}
