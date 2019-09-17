var puppyImage;

var show;
var hide;

var showAndHide = false;

function preload() {
  // loads media
  puppyImage = loadImage("puppy.jpg");
}

function setup() {
  // put setup code here
  createCanvas(400,400);

  show = createButton("Show");
  hide = createButton("Hide");

  show.mouseReleased(function(){
    showAndHide = true;
  });

  hide.mouseReleased(function(){
    showAndHide = false;
  });

}

function draw() {
  // put drawing code here
  background(255);
  if(showAndHide == true){
    //image var, x pos, y pos, w, h
    image(puppyImage,0,0,puppyImage.width/4,puppyImage.height/4);

  }
text("Click show and hide to see a puppy",10,10);

}
