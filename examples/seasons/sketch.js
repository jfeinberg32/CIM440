
var seasonsSelect;
var seasonType = "";

//sun
var sunX = 0;
var sunY = 0;

//snow
var snowX = [];
var snowY = [];
var snowAmount = 100;

//leaves
var leafX = [];
var leafY = [];
var leafAmount = 100;
var leafImage;

function preload(){
  leafImage = loadImage("https://openclipart.org/image/300px/svg_to_png/257622/1470680735.png");
}

function setup() {
  // put setup code here
  createCanvas(400,400);
  //create dropdown menu
  seasonsSelect = createSelect();
  seasonsSelect.position(10,10);
  seasonsSelect.option("");
  seasonsSelect.option("fall");
  seasonsSelect.option("winter");
  seasonsSelect.option("spring");
  seasonsSelect.option("summer");
  seasonsSelect.changed(function(){
    seasonType = seasonsSelect.value();
  });

  sunX = width / 2;
  sunY = 650;

  //to randomize snow array
  for (var i = 0; i < snowAmount; i++) {
    snowX[i] = random(0,width); //choose number from 0 to width-1 (not inclusive)
    snowY[i] = random(0,-500); //why is it 0 to -500?
  }

  for (var i = 0; i < leafAmount; i++) {
    leafX[i] = random(-200,600);
    leafY[i] = random(0,-500);
  }

}//end setup

function draw() {
  // put drawing code here
  background(255);

  if (seasonType == "fall") {
    console.log("fall");

    for (var i = 0; i < leafAmount; i++) {
      image(leafImage, leafX[i], leafY[i], 20,20);

      if (leafY[i] < height-20) {
        leafY[i]++;
        leafX[i] = leafX[i] + sin(radians(frameCount));
      }

    }

  } else if (seasonType == "winter") {
    console.log("winter");

    for (var i= 0; i < snowAmount; i++) {
      snowY[i]++;
      ellipse(snowX[i], snowY[i], 10,10);

      if (snowY[i] > height) {
        snowY[i] = random(0,-500);
        snowX[i] = random(0,width);
      }

    }

  } else if (seasonType == "spring") {
    console.log("spring");
  } else if (seasonType == "summer") {
    console.log("summer");

    fill("orange");
    stroke("red");
    ellipse(sunX, sunY, width, height);

    if (sunY > height) {
      sunY = sunY - 1;
    }
    fill(255);
    stroke(0);
  } else {
    console.log("blank");
    fill(0);
    text("Make a selection", 100, 20);
    fill(255);
  }




}//end draw
