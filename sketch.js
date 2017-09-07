function setup() {
  createCanvas(500,500);
}

function draw() {
  background(mouseX,mouseX,mouseY);
  fill(mouseY,mouseY,mouseX);
  ellipse(mouseX,mouseY,50,50);
  
}