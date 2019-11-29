// [] = fix background image to char
// [] = add char animations
// [] = create obstacles
// [] = move the background
// [] = create enemies
// [] = fix move controls


var gameState = false;
var settingState = false;
var playButton, settingButton;
var mario;
var characterX = 100;
var platform;
var input, inputButton;
var marioimg;

var GRAVITY = 1;
var JUMP = 12;
var rightSpeed = 5;
var leftSpeed = -5;

function preload() {
  marioimg = loadImage("images/mario.png");

}

function setup() {
  createCanvas(1000, 450);

  //Play Button
  playButton = new Clickable();
  playButton.locate(400, 200);
  playButton.resize(200, 100);
  playButton.text = "Click to Play";
  playButton.textSize = 30;

  //Setting Button
  settingButton = new Clickable();
  settingButton.locate(900, 350);
  settingButton.resize(60, 60);
  settingButton.text = "Settings"
  settingButton.textSize = 15;

  //sprites
  mario = createSprite(characterX, 285, 30, 65);
  mario.limitSpeed(2);


  platform = createSprite(500, 400, 1000, 100);
  platform.shapeColor = "tan";

}

function draw() {
  background(175);

  //start game
  playButton.onPress = function() {
    gameState = true;
  }

  //go to settings
  settingButton.onPress = function() {
    settingState = true;
  }

  //game state
  if (gameState == false && settingState == false) {
    textFont("Power Red and Blue Intl");
    textSize(90);
    text("Game Title", 340, 100);

    playButton.draw();
    settingButton.draw();

  } else if (gameState == true && settingState == false) {
    // entire game

    //base



    //instructions
    fill(0);
    textSize(30);
    text("Use arrow keys to move, X to jump and Z to fire", 20, 40);

    //main character
    mario.velocity.y += GRAVITY;
    mario.addImage(marioimg);

    //collide w ground
    if (mario.collide(platform)) {
      mario.velocity.y = 0;
    }

    if (keyDown(39)) {
      mario.velocity.x = rightSpeed;
    }
    if (keyDown(37)) {
      mario.velocity.x = leftSpeed;
    }
    //jump
    if (keyWentDown('x')) {
      mario.velocity.y = -JUMP;
    }
    //fire



    //gravity


    //randomize enemy
    drawSprites();
  } else if (settingState == true && gameState == false) {
    textSize(40);
    text("Enter Character Code:", 300, 100);



    // //character selector
    // input = createInput("Text",'text');
    // input.position(400,200);
    //
    //
    // inputButton = createButton("Submit");
    // inputButton.position(575,200);
    // inputButton.mousePressed(characterCode);


  }


}

//
// function attack(image, direction) {
//
// }


// function characterCode() {
//   const code = input.value();
//   input.value('');
// }
