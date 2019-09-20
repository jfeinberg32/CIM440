// Sloth image "IMG_3883" by JohnHedtke is licensed under CC BY-NC-SA 2.0 https://search.creativecommons.org/photos/217faedd-d06a-48ba-91f7-f4d4c6dafa04
// Puppy image "puppies" by www.petian.net is licensed under CC BY-NC-ND 2.0  https://search.creativecommons.org/photos/4f271583-e45d-4faf-bfc8-7291c7c1e3c3
// dinosaur "Rupenhorn Dinosaur #4" by Kristian_Laban is licensed under CC BY-NC 2.0 https://search.creativecommons.org/photos/96213ba5-e9b6-4f2f-91e4-da28b9fcad22

var puppy, dinosaur, sloth;
var pButton, dButton, sButton;
var currentImage = 0; //currentAnimal works because currentImage is defined
var currentAnimal; //defining currentAnimal wouldn't work because the images have no value yet

function preload(){
  // load media
  puppy = loadImage("images/puppy.jpg");
  dinosaur = loadImage("images/dinosaur.jpg");
  sloth = loadImage("images/sloth.jpg");
}

function setup() {
  // put setup code here
  createCanvas(400,400);

  pButton = createButton("puppy");
  pButton.mousePressed(function(){
    currentImage = 0;
  });

  dButton = createButton("dinosaur");
  dButton.mousePressed(function(){
    currentImage = 1;
  });

  sButton = createButton("sloth");
  sButton.mousePressed(function(){
    currentImage = 2;
  });

}

function draw() {
  // put drawing code here
  //console.log("currentImage = " + currentImage);
  background(255);
  if (currentImage == 0) {
    //image(puppy,0,0,puppy.width/2,puppy.height/2);
    currentAnimal = puppy;
  } else if (currentImage == 1){
    //image(dinosaur,0,0,dinosaur.width/2,dinosaur.height/2);
    currentAnimal = dinosaur;
  } else if (currentImage == 2) {
    //image(sloth,0,0,sloth.width/2,sloth.height/2);
    currentAnimal = sloth;
  }

  image(currentAnimal,0,0,currentAnimal.width/2,currentAnimal.height/2);
}
