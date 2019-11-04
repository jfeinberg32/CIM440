var button1;
var button2;

var soundFile;
var videoFile;

function preload() {
  soundFile = loadSound("assets/CowMoo.mp3");
  videoFile = createVideo("assets/cow.mp4");
}

function setup() {
  // put setup code here
  createCanvas(400, 400);
  button1 = new hitzoneObject(100, 200, 50, "red","Stop Button",loadImage("assets/stop.png"));
  button2 = new hitzoneObject(200, 200, 50, "green","Play Button",loadImage("assets/play.png"));

  videoFile.hide();

} // end setup

function draw() {
  // put drawing code here
  background(255);

  button1.display();
  button1.check();
  //console.log(button1.overlay);
  button2.display();
  button2.check();
  //console.log(button2.overlay);

  fill(0);
  text("Knock Knock", 100, 50);
  text("Who's there?", 100, 75);
  text("Interrupting cow", 100, 100);
  text("Interrupting cow who?", 100, 125);
} // end draw


function mousePressed() {
  if (button1.overlay == true) {
    //console.log(button1.label);
    soundFile.stop();
    videoFile.stop();
    videoFile.hide();

  } //end button1

  if (button2.overlay == true) {
    //console.log(button2.label);
    soundFile.stop();
    soundFile.play();
    videoFile.show();
    videoFile.style("display","inline-block");
    videoFile.play();

  } //end button2

} // end mousePressed


class hitzoneObject {
  constructor(tempX, tempY, tempSize, tempColor, tempLabel, tempImage) {
    this.x = tempX;
    this.y = tempY;
    this.boxSize = tempSize;
    this.boxColor = tempColor;
    this.overlay = false;
    this.label = tempLabel;
    this.image = tempImage;
  } //end constructor

  display() {
    fill(this.boxColor);
    //rect(this.x, this.y, this.boxSize, this.boxSize);
    image(this.image,this.x,this.y,this.boxSize,this.boxSize);
    text(this.label,this.x-5,this.y-15);

    if (this.overlay == true) {
      fill(127,127);
      rect(this.x, this.y, this.boxSize, this.boxSize);
    }
  } // end display

  check() {
    if ((mouseX > this.x) && (mouseX < this.x + this.boxSize) && (mouseY > this.y) && (mouseY < this.y + this.boxSize)) {
      //console.log("on button " + this.boxColor)
      this.overlay = true;
    } else {
      //console.log("off button")
      this.overlay = false;
    }
  } // end check

} // end of hitzoneObject object
