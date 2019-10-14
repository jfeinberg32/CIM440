/*
[ ] = aesthetic
[x] = 1 and 6 rolls much less often bc of rounding
[ ] = can't go backwards in amount of dice
[ ] = use arrays

*/
var currentOption = 1;
var diceNumber = 0;
var roll1 = 0;
var roll2 = 0;
var roll3 = 0;
var die1,die2,die3;
var playBX = 150;
var playBY = 150;
var playBXSize = 300;
var playBYSize = 60;

function setup() {
  // put setup code here
  createCanvas(800,500);

  die1 = createButton("1");
  die1.position(100,10);
  die1.mousePressed(function(){
    diceNumber = 1;
  });
  die2 = createButton("2");
  die2.position(100,35);
  die2.mousePressed(function(){
    diceNumber = 2;
  });
  die3 = createButton("3");
  die3.position(100,60);
  die3.mousePressed(function(){
    diceNumber = 3;
  });
}//end setup

function draw() {
  // put drawing code here
  background(78, 174, 242);
  //gridlines
  // line(0,250,800,250);
  // line(0,125,800,125);
  // line(0,375,800,375)
  // line(400,0,400,500);
  // line(200,0,200,500);
  // line(600,0,600,500);
  rect(playBX, playBY, playBXSize, playBYSize);
  text("Click to Roll!", 220, 187);
  console.log(roll1,roll2,roll3);

  textSize(70);
  text("Dice Game", 200, 100);

  textSize(20);
  text("Choose how many dice you want to roll.", 10, 10, 95, 280);


  if (diceNumber == 1) {
    rect(100, 225, 100, 100);
  } else if (diceNumber == 2) {
    rect(100, 225, 100, 100);
    rect(250, 225, 100, 100);
  } else if (diceNumber == 3) {
    rect(100, 225, 100, 100);
    rect(250, 225, 100, 100);
    rect(400, 225, 100, 100);
  }

  //drawing the dice dots
  if(diceNumber == 1){
    if (roll1 == 1) {
      //ellipses
    } else if (roll1 == 2) {

    } else if (roll1 == 3) {

    } else if (roll1 == 4) {

    } else if (roll1 == 5) {

    } else if (roll1 == 6) {

    }
  }


}//end draw

function mousePressed(){
  if (mouseX > playBX && mouseX < playBX + playBXSize && mouseY > playBY && mouseY < playBY + playBYSize) {
    if (diceNumber == 1) {
      roll1 = int(random(1,7));
    }
    if (diceNumber == 2) {
      roll1 = int(random(1,7));
      roll2 = int(random(1,7));
    }
    if (diceNumber == 3) {
      roll1 = int(random(1,7));
      roll2 = int(random(1,7));
      roll3 = int(random(1,7));
    }
  }
}
