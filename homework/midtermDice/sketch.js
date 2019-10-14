/*
[ ] = use an array to organize the roll distributions
[ ] = does my randomizer give a fair distribution?

*/

var currentOption = 1;
var roll1 = 0;
var roll2 = 0;
var total;
var total1 = 0;
var total2 = 0;
var total3 = 0;
var total4 = 0;
var total5 = 0;
var total6 = 0;
var totalButton;
var showTotal = false;
var rslider, bslider, gslider;

function setup() {
  // put setup code here
  createCanvas(800,500);

  totalButton = createButton("Click to toggle Total");
  totalButton.position(50,100);
  totalButton.mousePressed(function(){
    showTotal = !showTotal;
  });

  rslider = createSlider(0,255,78);
  rslider.position(575,50);
  rslider.style('width','150px')

  gslider = createSlider(0,255,174);
  gslider.position(575,75);
  gslider.style('width','150px')

  bslider = createSlider(0,255,242);
  bslider.position(575,100);
  bslider.style('width','150px')

}//end setup

function draw() {
  textFont("Power Green");
  // put drawing code here
  rval = rslider.value();
  gval = gslider.value();
  bval = bslider.value();
  background(rval, gval, bval);
  textSize(25);
  text("Change background color here:",460,45);

  textSize(15);
  text("r Value:", 515, 65);
  text("g Value:", 515, 90);
  text("b Value:", 515, 115);

  textSize(30);
  text("Roll Distributions: ",550,200);
  text("1 = " + total1, 650, 230);
  text("2 = " + total2, 650, 260);
  text("3 = " + total3, 650, 290);
  text("4 = " + total4, 650, 320);
  text("5 = " + total5, 650, 350);
  text("6 = " + total6, 650, 380);

if (currentOption == 0){
  textSize(70);
  text("Dice Game", 225, 100);

  } else {
   fill(255);
   rect(175, 250, 200, 200);
   rect(425, 250, 200, 200);
   rect(350, 100, 100, 100);
   fill(0);
   textSize(45);
   text("Click to roll dice", 100, 70);
    }

  if(roll1 == 1){
    fill(0);
    ellipse(275, 350, 20, 20);
  } else if (roll1 == 2) {
    fill(0);
    ellipse(200,275,20,20);
    ellipse(350,425,20,20);
  } else if (roll1 == 3) {
    fill(0);
    ellipse(200,275,20,20);
    ellipse(350,425,20,20);
    ellipse(275,350,20,20);
  } else if (roll1 == 4) {
    fill(0);
    ellipse(200,275,20,20);
    ellipse(350,425,20,20);
    ellipse(200,425,20,20);
    ellipse(350,275,20,20);
  } else if (roll1 == 5) {
    fill(0);
    ellipse(200,275,20,20);
    ellipse(350,425,20,20);
    ellipse(200,425,20,20);
    ellipse(350,275,20,20);
    ellipse(275,350,20,20);
  } else if (roll1 == 6) {
    fill(0);
    ellipse(200,275,20,20);
    ellipse(350,425,20,20);
    ellipse(200,425,20,20);
    ellipse(350,275,20,20);
    ellipse(200,350,20,20);
    ellipse(350,350,20,20);
  }

  if(roll2 == 1){
    fill(0);
    ellipse(525, 350, 20, 20);
  } else if (roll2 == 2) {
    fill(0);
    ellipse(450,275,20,20);
    ellipse(600,425,20,20);
  } else if (roll2 == 3) {
    fill(0);
    ellipse(450,275,20,20);
    ellipse(600,425,20,20);
    ellipse(525,350,20,20);
  } else if (roll2 == 4) {
    ellipse(450,275,20,20);
    ellipse(600,425,20,20);
    ellipse(450,425,20,20);
    ellipse(600,275,20,20);
  }else if (roll2 == 5) {
    fill(0);
    ellipse(450,275,20,20);
    ellipse(600,425,20,20);
    ellipse(450,425,20,20);
    ellipse(600,275,20,20);
    ellipse(525,350,20,20);
  } else if (roll2 == 6) {
    ellipse(450,275,20,20);
    ellipse(600,425,20,20);
    ellipse(450,425,20,20);
    ellipse(600,275,20,20);
    ellipse(450,350,20,20);
    ellipse(600,350,20,20);
  }

if (showTotal == true) {
  total = roll1 + roll2;
  textSize(30);
  text("The total is _" + total + "_", 25,150);
}

  if (mouseX > 350 && mouseX < 450 && mouseY > 100 && mouseY < 200) {
    fill(244, 115, 33);
    rect(325, 98, 164, 104);
    fill(0);
    textSize(60);
    text("Roll!", 345, 170);
  }
}//end draw

function mousePressed(){
  if (mouseX > 350 && mouseX < 450 && mouseY > 100 && mouseY < 200) {
    roll1 = int(random(1,7));
    roll2 = int(random(1,7));
    if (roll1 == 1) {
      total1++;
    } else if (roll1 == 2) {
      total2++;
    } else if (roll1 == 3) {
      total3++;
    } else if (roll1 == 4) {
      total4++;
    } else if (roll1 == 5) {
      total5++;
    } else if (roll1 == 6) {
      total6++;
    }

    if (roll2 == 1) {
      total1++;
    } else if (roll2 == 2) {
      total2++;
    } else if (roll2 == 3) {
      total3++;
    } else if (roll2 == 4) {
      total4++;
    } else if (roll2 == 5) {
      total5++;
    } else if (roll2 == 6) {
      total6++;
    }

  }
}
