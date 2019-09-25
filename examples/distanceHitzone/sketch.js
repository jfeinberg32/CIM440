var hitX = 100;
var hitY = 100;
var threshold = 20;
var hitDistance;
var changeBackground = "white";

function setup() {
  // put setup code here
  createCanvas(400,400);

}//end setup

function draw() {
  // put drawing code here
  background(changeBackground);
  ellipse(hitX, hitY, threshold*2, threshold*2);
  hitDistance = dist(mouseX, mouseY, hitX, hitY);
  //console.log("hitDistance " + hitDistance);
  if(hitDistance<=threshold){
    fill(175);
    text("Click Me", hitX,hitY+30);
    } else {
    fill(255);
  }
}//end draw loop

function mousePressed(){
  if(hitDistance<=threshold){
      changeBackground = "blue";
    } else {
      changeBackground = 255;
  }
}
