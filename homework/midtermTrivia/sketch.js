/* log:
[ ] need to get rid of playbutton hitzone after its been hit


*/

var startgame = false;
var currentOption = -1;
var question = ["What is the capital of New Jersey?"];
var optionsA = ["Trenton",];
var aX = 220;
var aY = 300;
var optionsB = ["Newark",];
var bX = 460;
var bY = 300;
var optionsC = ["Livingston",];
var cX = 210;
var cY = 425;
var optionsD = ["Morristown",];
var dX = 450;
var dY = 425;



//answer boxes
var answerboxX = [0,200,450];
var answerboxXSize = 150;
var answerboxY = [0,250,375];
var answerboxYSize = 100;

//play button
var playX = 330;
var playY = 325;
var playXSize = 140;
var playYSize = 100;

//qtext
var qtextX = 105;
var qtextY = 100;


function setup() {
  // put setup code here
  createCanvas(800,500);
}

function draw() {
  // put drawing code here
  background(125, 220, 255);
  //gridlines
  // line(0,250,800,250);
  // line(0,125,800,125);
  // line(0,375,800,375)
  // line(400,0,400,500);
  // line(200,0,200,500);
  // line(600,0,600,500);

  if (startgame == true) {
    if (currentOption == 0) {
        //Question 1
        textSize(30);
        text("Question " + currentOption, 100, 35);
        rect(100,50, 600, 100);
        text(question[currentOption], qtextX, qtextY);
        //box a
        rect(answerboxX[1],answerboxY[1],answerboxXSize,answerboxYSize);
        text(optionsA[currentOption],aX,aY);
        //box b
        rect(answerboxX[2],answerboxY[1],answerboxXSize,answerboxYSize);
        text(optionsB[currentOption],bX,bY);
        //box c
        rect(answerboxX[1],answerboxY[2],answerboxXSize,answerboxYSize);
        text(optionsC[currentOption],cX,cY);
        //box d
        rect(answerboxX[2],answerboxY[2],answerboxXSize,answerboxYSize);
        text(optionsD[currentOption],dX,dY);
      } else if (currentOption == 1) {
        //Question 2
        text("Question " + currentOption, qtextX, qtextY);
        rect(100,50, 600, 100);
        rect(answerboxX[1],answerboxY[1],answerboxXSize,answerboxYSize);
        text(optionsA[currentOption],aX,aY);
        //box b
        rect(answerboxX[2],answerboxY[1],answerboxXSize,answerboxYSize);
        //box c
        rect(answerboxX[1],answerboxY[2],answerboxXSize,answerboxYSize);
        //box d
        rect(answerboxX[2],answerboxY[2],answerboxXSize,answerboxYSize);
      }
  } else {
    rect(playX,playY,playXSize,playYSize);
    textSize(60);
    text("Play", 340, 390);
    //header
    textSize(74);
    text('Trivia Mania', 200, 200);

  }
  //header


}//end draw

function mousePressed(){
  if (mouseX > playX && mouseX < playX + playXSize && mouseY > playY && mouseY < playY + playYSize) {
    console.log("play button hit");
    startgame = true;
    currentOption = currentOption + 1;
  /* END LOOP  if (currentOption > ______whatever last option is) {
      send back to start ; currentOption = -1;
  } */
  }
}
