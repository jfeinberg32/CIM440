var gameState = false;
var playButton;
var mainmenu;
var gameOver;
var mario, enemy, fireballs;
var characterX = 200;
var platform;
var marioimg, enemyimg, backgroundsky, fireballimg;
var enemyX;
var backgroundx = 500;
var score;
var time;
var obstacleX;
var obstacleWidth;

var GRAVITY = 1;
var JUMP = 15;
var SPEED1 = 5;
var SPEED2 = 7;

function preload() {
  marioimg = loadImage("images/mario.png");
  backgroundsky = loadImage("images/sky.jpg")
}

function setup() {
  var cnv = createCanvas(1000, 450);
  cnv.id("mycanvas");

  var container0 = createDiv();
  container0.id("container0");

  select("#container0").html("<h1>Danger Dash Game</h1>");
  select("#container0").style("width","1000px");
  select("#container0").style("margin","0 auto");
  cnv.parent("#container0");

  var container1 = createDiv();
  container1.id("container1");

  select("#container1").html("<h2>Please refresh the webpage after losing</h2>")

  //Play Button
  playButton = new Clickable();
  playButton.locate(400, 200);
  playButton.resize(200, 100);
  playButton.textFont = "Power Red and Blue Intl";
  playButton.text = "Click to Play";
  playButton.textSize = 30;

  mainmenu = new Clickable();
  mainmenu.locate(400,200);
  mainmenu.resize(200,100);
  mainmenu.textFont = "Power Red and Blue Intl";
  mainmenu.text = "Return to Main Menu";
  mainmenu.textSize = 20;

  background1 = createSprite(backgroundx, 225, 1000, 450);

  //sprites
  mario = createSprite(characterX, 285, 30, 65);

  obstacles = new Group();

  platform = createSprite(500, 400, 1000, 100);
  platform.shapeColor = "green";

  obstacleX = random(1000,1500);
  obstacleWidth = random(20,55);
  obstacle = createSprite(obstacleX, 330, obstacleWidth, 40);
  obstacle.velocity.x = 0;
  obstacle.shapeColor = "red";
}

function draw() {

  playButton.onPress = function() {
    playButton.strokeWeight = 4;
    playButton.textSize = 33;
  }

  //start game
  playButton.onRelease = function() {
    gameState = true;
    obstacle.velocity.x = random(-7,-12);
  }

  mainmenu.onRelease = function() {
    gameState = false;
    gameOver = false;
  }

  //game state
  if (gameState == false) {
    background(backgroundsky);
    textFont("Power Red and Blue Intl");
    textSize(90);
    textAlign("center");
    text("Danger Dash", width/2, 100);

    playButton.draw();
    drawSprite(platform);

    textAlign("center");
    textSize(40);
    text("Dodge the obstacles by jumping with 'Space'", width/2, height - 20);

  } else if (gameState == true) {
    // ** ENTIRE GAME HERE **
    //main character

    mario.velocity.y += GRAVITY;
    mario.addImage(marioimg);
    background1.addImage(backgroundsky);

    //collide w ground
    if (mario.collide(platform)) {
      mario.velocity.y = 0;
    }

    if (gameState == true) {
      background1.velocity.x = -SPEED1;
    }

    if (background1.position.x < 0) {
      background1.position.x = width;
    }

    //jump
    if (keyWentDown(32) && mario.overlap(platform)) {
      mario.velocity.y = -JUMP;
    }

    //create obstacle
    // for (var i = 0; i < 100; i++) {

    //   obstacle = createSprite(obstacleX, 325, obstacleWidth, 40);
    //   obstacles.add(obstacle);
    //   obstacle.addSpeed(10, 180);
    // }
     mario.collide(obstacle, playerHit);

     if(obstacle.position.x < -obstacle.width){
       obstacle.position.x = random(1000,1200);
       obstacle.width = random(40,80);
       obstacle.velocity.x = random(-5,-10);
     }

    drawSprites();


    score = int(time/100);
    time = millis();

    textFont("Power Red and Blue Intl");
    textSize(40);
    textAlign("right");
    text("Score: " + score, width - 20,40);
  }//end gameState
  if (gameOver == true) {
    mainmenu.draw();
  }
}

function playerHit(mario, obstacles) {
  //background1.velocity.x = 0;
  gameOver = true;
  mario.visible = false;
  background1.visible = false;
  obstacles.velocity.x = 0;
  textAlign("center");
  textSize(70);
  text("Game Over",500,125);
  textSize(45);
  text("Score is " + score,500,175);
}
