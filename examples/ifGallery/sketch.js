// sloth "IMG_3883" by JohnHedtke is licensed under CC BY-NC-SA 2.0 https://search.creativecommons.org/photos/217faedd-d06a-48ba-91f7-f4d4c6dafa04
// puppy "puppies" by www.petian.net is licensed under CC BY-NC-ND 2.0  https://search.creativecommons.org/photos/4f271583-e45d-4faf-bfc8-7291c7c1e3c3
// dinosaur "Rupenhorn Dinosaur #4" by Kristian_Laban is licensed under CC BY-NC 2.0 https://search.creativecommons.org/photos/96213ba5-e9b6-4f2f-91e4-da28b9fcad22
// girl "Yellow Hood" by Alvaro Alvarez is licensed under CC BY-NC-ND 4.0
// seal "Bilateria (bilaterally symmetrical animals)" is licensed under CC BY-ND 3.0
// frog "Amphibia (frogs, salamanders, and caecilians)" is licensed under CC BY-NC-ND 3.0

var puppy, dinosaur, sloth, girl, seal, frog;
var pButton, dButton, sButton, gButton, seButton, fButton;
var currentImage = 0; //currentAnimal works because currentImage is defined
var currentAnimal; //defining currentAnimal wouldn't work because the images have no value yet

function preload() {
  // load media
  puppy = loadImage("images/puppy.jpg");
  dinosaur = loadImage("images/dinosaur.jpg");
  sloth = loadImage("images/sloth.jpg");
  girl = loadImage("images/girl.jpg");
  seal = loadImage("images/seal.jpg");
  frog = loadImage("images/frog.jpg");
}

function setup() {
  // put setup code here
  createCanvas(400, 400);

  pButton = createButton("puppy");
  pButton.mousePressed(function() {
    currentImage = 0;
  });

  dButton = createButton("dinosaur");
  dButton.mousePressed(function() {
    currentImage = 1;
  });

  sButton = createButton("sloth");
  sButton.mousePressed(function() {
    currentImage = 2;
  });

  gButton = createButton("girl");
  gButton.mousePressed(function() {
    currentImage = 3;
  });

  seButton = createButton("seal");
  seButton.mousePressed(function() {
    currentImage = 4;
  });

  fButton = createButton("frog");
  fButton.mousePressed(function() {
    currentImage = 5;
  });
}

function draw() {
  // put drawing code here
  //console.log("currentImage = " + currentImage);
  background(255);
  if (currentImage == 0) {
    //image(puppy,0,0,puppy.width/2,puppy.height/2);
    currentAnimal = puppy;
  } else if (currentImage == 1) {
    //image(dinosaur,0,0,dinosaur.width/2,dinosaur.height/2);
    currentAnimal = dinosaur;
  } else if (currentImage == 2) {
    //image(sloth,0,0,sloth.width/2,sloth.height/2);
    currentAnimal = sloth;
  } else if (currentImage == 3) {
    currentAnimal = girl;
  } else if (currentImage == 4) {
    currentAnimal = seal;
  } else if (currentImage == 5) {
    currentAnimal = frog;
  }

  image(currentAnimal, 0, 0, currentAnimal.width / 2, currentAnimal.height / 2);
}
