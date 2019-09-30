// sloth "IMG_3883" by JohnHedtke is licensed under CC BY-NC-SA 2.0 https://search.creativecommons.org/photos/217faedd-d06a-48ba-91f7-f4d4c6dafa04
// puppy "puppies" by www.petian.net is licensed under CC BY-NC-ND 2.0  https://search.creativecommons.org/photos/4f271583-e45d-4faf-bfc8-7291c7c1e3c3
// dinosaur "Rupenhorn Dinosaur #4" by Kristian_Laban is licensed under CC BY-NC 2.0 https://search.creativecommons.org/photos/96213ba5-e9b6-4f2f-91e4-da28b9fcad22
// girl "Yellow Hood" by Alvaro Alvarez is licensed under CC BY-NC-ND 4.0
// seal "Bilateria (bilaterally symmetrical animals)" is licensed under CC BY-ND 3.0
// frog "Amphibia (frogs, salamanders, and caecilians)" is licensed under CC BY-NC-ND 3.0

var currentImage = 0; //currentAnimal works because currentImage is defined

var imageArray = [];

var hitX = [200,300,73,136,223,283,328,390];
var hitY = [300,300,33];
var hitSizeX = [50,53,76,42,30,48,43];
var hitSizeY = 23;

var navMenu = 0;

function preload() {
  // load media
  imageArray[0] = loadImage("images/puppy.jpg");
  imageArray[1] = loadImage("images/dinosaur.jpg");
  imageArray[2] = loadImage("images/sloth.jpg");
  imageArray[3] = loadImage("images/girl.jpg");
  imageArray[4] = loadImage("images/seal.jpg");
  imageArray[5] = loadImage("images/frog.jpg");
}

function setup() {
  // put setup code here
  createCanvas(500,400);
}//end of setup

function draw() {
  // put drawing code here
  //console.log(mouseX, mouseY);
    background(3, 161, 252);
    text("Basic Image Gallery", 15, 20);
    text("Click the arrows", 10, 120);
    text("to shuffle through", 10, 140);
    text("the gallery, or", 10, 160);
    text("click the image's", 10, 180);
    text("name to jump to", 10, 200);
    text("the image.", 10, 220);

  if (navMenu == 0) {
    fill(175);
    rect(hitX[2], hitY[2], hitSizeX[1], hitSizeY)
  } else if (navMenu == 1) {
    fill(175);
    rect(hitX[3], hitY[2], hitSizeX[2], hitSizeY)
  } else if (navMenu == 2) {
    fill(175);
    rect(hitX[4], hitY[2], hitSizeX[3], hitSizeY)
  } else if (navMenu == 3) {
    fill(175);
    rect(hitX[5], hitY[2], hitSizeX[4], hitSizeY)
  } else if (navMenu == 4) {
    fill(175);
    rect(hitX[6], hitY[2], hitSizeX[5], hitSizeY)
  } else if (navMenu == 5) {
    fill(175);
    rect(hitX[7], hitY[2], hitSizeX[6], hitSizeY)
  }

  fill(0);
  textSize(17);
  text("Puppy", 75, 50);
  text("Dinosaur", 140, 50);
  text("Sloth", 225, 50);
  text("Girl", 285, 50);
  text("Seal", 335, 50);
  text("Frog", 395, 50);
  image(imageArray[currentImage], 150, 75, imageArray[currentImage].width/4, imageArray[currentImage].height/4);

  fill(0,255,50);
  rect(hitX[0],hitY[0],hitSizeX[0],hitSizeX[0]);
  rect(hitX[1],hitY[1],hitSizeX[0],hitSizeX[0]);

  fill(0);
  rect(310,320,20,10);
  rect(220,320,20,10);
  triangle(330, 310, 330, 340, 345, 325);
  triangle(220, 310, 220, 340, 205, 325);


}//end of draw

//back button
function mousePressed(){
  if(mouseX > hitX[0] && mouseX < hitX[0] + hitSizeX[0] && mouseY > hitY[0] && mouseY < hitY[0] + hitSizeX[0]){
    console.log("Button Back");
    currentImage = currentImage - 1;
    navMenu = navMenu - 1;
    if (currentImage == -1) {
      currentImage = 5;
    }//end of recycle currentImage
    if (navMenu == -1){
      navMenu = 5;
    }
  }//end of hitzone
    else if (mouseX > hitX[1] && mouseX < hitX[1] + hitSizeX[0] && mouseY > hitY[1] && mouseY < hitY[1] + hitSizeX[0]) {
      console.log("Button Forward");
      currentImage = currentImage + 1;
      navMenu = navMenu + 1;
      if (currentImage == 6) {
        currentImage = 0;
      }//end of recycle currentImage
      if (navMenu == 6) {
        navMenu = 0;
      }
    }
//puppy
  if(mouseX > hitX[2] && mouseX < hitX[2] + hitSizeX[1] && mouseY > hitY[2] && mouseY < hitY[2] + hitSizeY){
    currentImage = 0;
    navMenu = 0;
  }
//dinosaur
  if(mouseX > hitX[3] && mouseX < hitX[3] + hitSizeX[2] && mouseY > hitY[2] && mouseY < hitY[2] + hitSizeY){
    currentImage = 1;
    navMenu = 1;
  }
//sloth
  if(mouseX > hitX[4] && mouseX < hitX[4] + hitSizeX[3] && mouseY > hitY[2] && mouseY < hitY[2] + hitSizeY){
    currentImage = 2;
    navMenu = 2;
  }
//girl
  if(mouseX > hitX[5] && mouseX < hitX[5] + hitSizeX[4] && mouseY > hitY[2] && mouseY < hitY[2] + hitSizeY){
    currentImage = 3;
    navMenu = 3;
  }
//seal
  if(mouseX > hitX[6] && mouseX < hitX[6] + hitSizeX[5] && mouseY > hitY[2] && mouseY < hitY[2] + hitSizeY){
    currentImage = 4;
    navMenu = 4;
  }
//frog
  if(mouseX > hitX[7] && mouseX < hitX[7] + hitSizeX[6] && mouseY > hitY[2] && mouseY < hitY[2] + hitSizeY){
    currentImage = 5;
    navMenu = 5;
  }


}//end mousePressed
