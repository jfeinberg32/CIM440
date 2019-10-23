
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
  totalButton.position(25,20);
  totalButton.mousePressed(function(){
    showTotal = !showTotal;
  });

  rslider = createSlider(0,255,255);
  rslider.position(100,400);
  rslider.style('width','150px')

  gslider = createSlider(0,255,255);
  gslider.position(100,425);
  gslider.style('width','150px')

  bslider = createSlider(0,255,255);
  bslider.position(100,450);
  bslider.style('width','150px')

}//end setup

function draw() {
  textFont("Power Green");
  // put drawing code here

  rval = rslider.value();
  gval = gslider.value();
  bval = bslider.value();
  background(78,174,242);
  textSize(25);
  text("Change dice color here:",5,385);

  textSize(60);
  text("Dice Game", 425, 65);

  textSize(20);
  text("r Value:", 25, 415);
  text("g Value:", 25, 440);
  text("b Value:", 25, 465);

  textSize(30);
  text("Roll Distributions: ",15,130);
  text("1 = " + total1, 30, 160);
  text("2 = " + total2, 30, 190);
  text("3 = " + total3, 30, 220);
  text("4 = " + total4, 30, 250);
  text("5 = " + total5, 30, 280);
  text("6 = " + total6, 30, 310);

   fill(rval,gval,bval);
   //dice
   rect(300, 250, 200, 200);
   rect(550, 250, 200, 200);
   fill(0);

  if(roll1 == 1){
    fill(0);
    ellipse(400, 350, 20, 20);
  } else if (roll1 == 2) {
    fill(0);
    ellipse(325,275,20,20);
    ellipse(475,425,20,20);
  } else if (roll1 == 3) {
    fill(0);
    ellipse(325,275,20,20);
    ellipse(475,425,20,20);
    ellipse(400,350,20,20);
  } else if (roll1 == 4) {
    fill(0);
    ellipse(325,275,20,20);
    ellipse(475,425,20,20);
    ellipse(325,425,20,20);
    ellipse(475,275,20,20);
  } else if (roll1 == 5) {
    fill(0);
    ellipse(325,275,20,20);
    ellipse(475,425,20,20);
    ellipse(325,425,20,20);
    ellipse(475,275,20,20);
    ellipse(400,350,20,20);
  } else if (roll1 == 6) {
    fill(0);
    ellipse(325,275,20,20);
    ellipse(475,425,20,20);
    ellipse(325,425,20,20);
    ellipse(475,275,20,20);
    ellipse(325,350,20,20);
    ellipse(475,350,20,20);
  }

  if(roll2 == 1){
    fill(0);
    ellipse(650, 350, 20, 20);
  } else if (roll2 == 2) {
    fill(0);
    ellipse(575,275,20,20);
    ellipse(725,425,20,20);
  } else if (roll2 == 3) {
    fill(0);
    ellipse(575,275,20,20);
    ellipse(725,425,20,20);
    ellipse(650,350,20,20);
  } else if (roll2 == 4) {
    ellipse(575,275,20,20);
    ellipse(724,425,20,20);
    ellipse(575,425,20,20);
    ellipse(725,275,20,20);
  }else if (roll2 == 5) {
    fill(0);
    ellipse(575,275,20,20);
    ellipse(725,425,20,20);
    ellipse(575,425,20,20);
    ellipse(725,275,20,20);
    ellipse(650,350,20,20);
  } else if (roll2 == 6) {
    ellipse(575,275,20,20);
    ellipse(725,425,20,20);
    ellipse(575,425,20,20);
    ellipse(725,275,20,20);
    ellipse(575,350,20,20);
    ellipse(725,350,20,20);
  }

  fill(255);
  rect(20,50,210,40);
  if (showTotal == true) {
    total = roll1 + roll2;
    fill(0);
    textSize(30);
    text("The total is _" + total + "_", 25,80);

    text(roll1, 390, 475);
    text(roll2, 650, 475);
  }

  //roll button
  fill(255);
  rect(400, 100, 250, 100);
  fill(0);
  textSize(55);
  text("Roll!",485,170);
  if (mouseX > 400 && mouseX < 650 && mouseY > 100 && mouseY < 200) {
    rect(399,99,252,102);
    fill(255);
    textSize(60);
    text("Roll!",485,170);
    fill(0);
  }

  if (roll1 == 1 && roll2 == 1) {
    for (var i = 0; i < 10; i++) {
      textSize(15);
      text("Snake Eyes", random(width),random(height))
    }
  }
}//end draw

function mousePressed(){
  if (mouseX > 400 && mouseX < 650 && mouseY > 100 && mouseY < 200) {
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
