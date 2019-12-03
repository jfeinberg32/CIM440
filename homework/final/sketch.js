// **if possible**
// ----------------------------------------------------------------------------

// [] = try to create online scoreboard with google sheets
// [] = create parallax background


// **MAIN**
// ----------------------------------------------------------------------------

// [] = create obstacles/enemies
// [] = move the background around character
// [] = only be able to jump once at a time
// [] = create score (probably using millis, or 1 point for each enemy, or both)

// move background with arrow keys !!






var gameState = false;
var settingState = false;
var playButton, settingButton;
var mario;
var characterX = 100;
var platform;
var input, inputButton;
var marioimg, enemyimg, backgroundsky;
var enemyX;

var GRAVITY = 1;
var JUMP = 12;
var rightSpeed = 5;
var leftSpeed = -5;

function preload() {
  marioimg = loadImage("images/mario.png");
  backgroundsky = loadImage("images/backgroundsky.jpg")

}

function setup() {
  createCanvas(1000, 450);

  //Play Button
  playButton = new Clickable();
  playButton.locate(400, 200);
  playButton.resize(200, 100);
  playButton.text = "Click to Play";
  playButton.textSize = 30;
  //add playButton.onHover function

  //Setting Button
  settingButton = new Clickable();
  settingButton.locate(900, 350);
  settingButton.resize(60, 60);
  settingButton.text = "Settings"
  settingButton.textSize = 15;

  //sprites
  mario = createSprite(characterX, 285, 30, 65);
  mario.limitSpeed(2);


  //enemy = createSprite(enemyX, 300, 25, 55);


  platform = createSprite(500, 400, 1000, 100);
  platform.shapeColor = "green";

}

function draw() {
  background(backgroundsky);

  playButton.onPress = function() {
    playButton.strokeWeight = 4;
    playButton.textSize = 33;
  }

  //start game
  playButton.onRelease = function() {
    gameState = true;
  }

  //go to settings
  settingButton.onRelease = function() {
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
    // ** ENTIRE GAME HERE **

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
    } else if (keyDown(37)) {
      mario.velocity.x = leftSpeed;
    } else {
      mario.velocity.x = 0;
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
