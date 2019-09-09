var legW = 20;
var legL = 60;
var armW = 70;
var armL = 15;
var eyeY = 165;
var hi = 'Hi!'
var name = 'My name is Jack.'

function setup() {
  // put setup code here

  createCanvas(500, 500);
  background("tan");
}

function draw() {
  // put drawing code here
fill("white");
strokeWeight(1);
//head
ellipse(240, 170, 60, 60);

//body
fill("red");
rect(200, 200, 80, 100);

fill("blue");
//left leg
rect(200, 300, legW, legL);

//right leg
rect(260, 300, legW, legL);

fill("white");
rect(130, 200, armW, armL);
fill("red");
rect(180, 200, 20, 15);

//right arm
fill("white");
rect(280, 200, armW, armL);
fill("red");
rect(280, 200, 20, 15);

noFill();
strokeWeight(3);
//pupils
point(230, eyeY);
point(250, eyeY);

//mouth
arc(240, 180, 30, 10, 0, PI);

//hat
fill("black");
rect(200, 130, 80, 20);
rect(220, 90, 40, 40);

//sun
fill("yellow");
ellipse(475, 0, 170, 170);

fill("white");

strokeWeight(1);
//speech
triangle(210, 180, 165, 140, 160, 170);
ellipse(125, 135, 100, 100);
fill("black");
text(hi, 115, 115);
text(name, 80, 135);

//house
//rect(350, 370, 125, 125);
//triangle(350, 370, 475, 370, 412.5, 330);
//rect(370, 390, 30, 30);

}
