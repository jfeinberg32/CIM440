var option1,option2,option3,option4;
var leaf, wind;
var animation = 0;
var leafAmount = 100;
var leafX = [];
var leafY = [];
var windAmount = 50;
var windX,windY = [];

function preload() {
  leaf = loadImage("images/leaf.png");
  wind = loadImage("images/wind.png");
}

function setup() {
  // put setup code here
  createCanvas(windowWidth,windowHeight);

  option1 = createButton("Windy Fall Day");
  option1.position(450,30);
  option1.size(150,75);
  option1.mousePressed(function(){
    animation == 1;
    console.log("fall");
  });

  for (var i = 0; i < leafAmount; i++) {
    leafX[i] = random(0,-500); //choose number from 0 to width-1 (not inclusive)
    leafY[i] = random(0,height); //why is it 0 to -500?
  }



  option2 = createButton("option2");
  option2.position(650,30);
  option2.size(150,75);
  option2.mousePressed(function(){
    //do something
  });

  option3 = createButton("option3");
  option3.position(850,30);
  option3.size(150,75);
  option3.mousePressed(function(){
    //do something
  });

  option4 = createButton("option4");
  option4.position(1050,30);
  option4.size(150,75);
  option4.mousePressed(function(){
    //do something
  });

}

function draw() {
  // put drawing code here
  background(60,150,220);
  textSize(50);
  textFont("Power Red and Green");
  text("Choose an animation", 25, 75);

if (animation == 1) {
  for (var i = 0; i < leafAmount; i++) {
    image(leaf, leafX[i], leafY[i], 20,20);

    if (leafX[i] < width) {
      leafX[i]++;
      // leafY[i] = leafY[i] + tan(radians(frameCount));
      }
    }
  }
}//end draw
