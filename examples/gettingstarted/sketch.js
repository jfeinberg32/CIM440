function setup() {
  // put setup code here
  createCanvas(500, 500);
  background("salmon");

  //fill("green");
  //stroke("white"); //outline of the shape
  //ellipse(250, 250, 500, 500); //(x, y, w, h)

}

function draw() {
  // put drawing code here

  strokeWeight(1);
  //left eye
  ellipse(100, 100, 20, 20);
  //right eye
  ellipse(140, 100, 20, 20);

  //mouth
  rect(90, 140, 60, 30); //draws from top left corner, (x, y, w, h)

  //pupils
  strokeWeight(5);
  point(100, 100);
  point(140, 100);

  //mouth line
  strokeWeight(2);
  line(90, 155, 150, 155);

  //console.log("width " + width);
  //console.log("height " + height);

  triangle(100, 100, 200, 200, 300, 300);




}
