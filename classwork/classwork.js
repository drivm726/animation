/*
  Classwork
*/
var circleY = 0;
var speed1 = -4;
var circleX = 0;
var speed2 = -4;
function setup(){
  createCanvas(windowWidth, windowHeight);
}

function draw(){
background("white");

if (mouseIsPressed){
fill(204,204,255);

}


  ellipse(circleX, height/2, 50,50);
  if (circleX >= width || circleX <=0){
    speed1 = -speed1;
  }

  circleX = circleX + speed1;

  ellipse (width/2, circleY, 50, 50);
  if (circleY >= height || circleY <= 0){
    speed2 = -speed2;
  }
  circleY = circleY + speed2;


}
