/*
  Homework
*/

var circleX = 0;
function setup(){
  createCanvas(windowWidth, windowHeight);
}

function draw(){
  background("skyblue");

  if (circleX > windowWidth/2){
}
  if(mouseX > windowWidth/2){
  background("black");
  fill("skyblue");

  if (mouseIsPressed){
  fill(204,204,255);

  }

  }

  noStroke();
  fill("gold");
  ellipse(mouseX, mouseY, 50, 50);





//if the circle reaches the end of the window,
//reset it to 0 to start at the beginning of the frame
  if (circleX >= windowWidth){
    circleX = 0
  }
}
