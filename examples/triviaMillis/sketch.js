// I do not own the rights to any images used here. Images only for educational purposes;
// iceland : https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwiukeChxfvkAhXyuFkKHae4BJMQjRx6BAgBEAQ&url=https%3A%2F%2Fwww.tourradar.com%2Ft%2F88570&psig=AOvVaw1hANtZ-doYY3Ds38JvaZTx&ust=1570035796751903
// ocean : https://portal.aodn.org.au/proxy?url=http%3A%2F%2Fgeoserver-static.aodn.org.au%2Fgeoserver%2Fwms%3FLAYERS%3Dbaselayers%253Adefault_bathy%26FORMAT%3Dimage%252Fpng%26SERVICE%3DWMS%26VERSION%3D1.1.1%26REQUEST%3DGetMap%26STYLES%3D%26SRS%3DEPSG%253A4326%26BBOX%3D-180%2C-90%2C0%2C90%26WIDTH%3D256%26HEIGHT%3D256
// danny devito : https://www.google.com/url?sa=i&source=images&cd=&ved=&url=https%3A%2F%2Fitsalwayssunny.fandom.com%2Fwiki%2FFrank_Reynolds&psig=AOvVaw2I2jUhcTF_dLeEBIzF1A9F&ust=1570035847217524


var questions = ["Is iceland always covered in ice?","What ocean lies to the east of the US?", "Who plays Frank Reynolds on the show 'It's Always Sunny in Philadelphia?"];
var options = ["1) True 2) False","1) Pacific 2) Eastern 3) Indian 4) Atlantic","1) Rob McElhenny 2) Glenn Howerton 3) Danny Devito 4) Charlie Day"];
var answers = [1, 3, 2];

var button = [];
var currentOption = -1; //this variable is the driver

var currentQuestion = 0;

var answerText = "";

var imageArray = [];

//millis variables
var startTimer = false;
var interval = 5000;
var prevMillis = 0;

function preload(){
  imageArray[0] = loadImage("iceland.jpg");
  imageArray[1] = loadImage("ocean.jpg");
  imageArray[2] = loadImage("frank.jpg");
}

function setup() {
  // put setup code here
  createCanvas(500,400);

  button[0] = createButton("1");
  button[0].position(10,300);
  button[0].mousePressed(function(){
    currentOption = 0;
  });

  button[1] = createButton("2");
  button[1].position(60,300);
  button[1].mousePressed(function(){
    currentOption = 1;
  });

  button[2] = createButton("3");
  button[2].position(110,300);
  button[2].mousePressed(function(){
    currentOption = 2;
  });

  button[3] = createButton("4");
  button[3].position(160,300);
  button[3].mousePressed(function(){
    currentOption = 3;
  });

}//end of setup

function draw() {
  // put drawing code here
  background(60, 198, 240);
  //heading
  textSize(30);
  text("Trivia Quiz", 20, 40,)
  //question
  textSize(18);
  textStyle(BOLD);
  text(questions[currentQuestion], 20, 90, 500, 50);
  //options
  textSize(12);
  textStyle(NORMAL);
  text(options[currentQuestion], 20, 150);
  //image
  image(imageArray[currentQuestion], 225 , 165);
  //correct or incorrect

  if (startTimer == true) {
    text(answerText, 20, 200);
    if (millis()-prevMillis > interval) {
      prevMillis = millis();
      startTimer = false
      console.log("Timer ended");
    }
  }

  //hides 3,4 during Q1
  if(currentQuestion == 0){
    button[2].hide();
    button[3].hide();
  }else{
    button[2].show();
    button[3].show();
  }


  if (currentOption != -1) {
    if (currentOption == answers[currentQuestion]) {
        //console.log("correct");
      answerText = "Correct!";
      currentQuestion = currentQuestion + 1;
      if (currentQuestion == questions.length) {
        currentQuestion = 0;
      }

      }else {
        //console.log("incorrect");
        answerText = "Incorrect";
    }//end else

    currentOption = -1;
    startTimer = true;
    prevMillis = millis();

  }//end if statement

}//end of draw
