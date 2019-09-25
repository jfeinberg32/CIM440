function setup() {
  // put setup code here
  createCanvas(500,550);
  background(74, 179, 224);
}

function draw() {
  // put drawing code here
  console.log("X = " + mouseX + ",Y = " + mouseY);
  strokeWeight(0);
  fill("white");
  //body
  rect(115, 350, 300, 300);
  fill(74, 179, 224);
  triangle(361, 349, 435, 388, 442, 313);
  triangle(165, 350, 85, 388, 89, 312);
  //neck
  fill(255);
  rect(200, 300, 100, 150);
  //head
  ellipse(250, 200, 200, 260);
  //tie
  fill(125);
  triangle(200, 348, 300, 348, 250, 412);
  triangle(200, 475, 300, 475, 250, 412);
  triangle(200, 475, 300, 475, 250, 600);
  //hair
  triangle(160, 140, 335, 130, 312, 47);
  triangle(160, 140, 260, 130, 290, 30);
  triangle(160, 140, 207, 55, 238, 82);
  triangle(208, 79, 240, 52, 244, 82);

}
