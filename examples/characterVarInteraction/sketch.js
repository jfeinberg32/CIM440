//These variables are available to use throughout entire program
var pointX = 0;
var pointY = 0;
var faceColor = "white";

var colorButton;

function setup() {
  // put setup code here
  createCanvas(500,500);
  pointX = width/2;
  pointY = height/2;

//  console.log("pointX " + pointX + " pointY " + pointY);

//The scope of this variable is only available inside the setup function
var message = "Hello";

//This goes in the setup function becuase it is part of the p5.dom library which allows you to generate HTML objects
colorButton = createButton("Click to Turn Purple");
colorButton.position(20,20);
colorButton.mousePressed(function(){
  faceColor = "purple";
});

}

function draw() {
  // put drawing code here
  background(255);

  //use an if statement to change the background color
  if(mouseX < width/2){
    //console.log("left hand side");
    background("blue");
  }
  if(mouseX > width/2){
    //console.log("right hand side");
    background("red");
  }

  //pointX = 100;
  //pointY = 100;
  pointX = mouseX;
  pointY = mouseY;



  fill(faceColor);
  rect(pointX -100 ,pointY -100,200,200); //face
  fill(255);
  ellipse(pointX, pointY, 10,10);
  ellipse(pointX + 20, pointY -20, 30,30);
  ellipse(pointX - 20, pointY -20, 30,30);

  // arc(x,y,width,height,start,end)
  arc(pointX,pointY + 10,50,50,0,PI);

  //ellipse(point2, point2, 10,10);

}//end of draw


//start of interactive functions
function mousePressed(){
  //faceColor = "blue";
}

function mouseReleased(){
  //faceColor = "white";
}

function keyReleased(){
  //faceColor = "red";
}

function keyPressed(){
  //console.log("key " + key);
  //console.log("keyCode " + keyCode);
  //conditional: if condition equals true, then do what is inside curly braces
  // == means one side equals the other
  if(key == "w"){
  //what you want to happen
    faceColor = "white";
  }
  if(key == "b"){
  //what you want to happen
    faceColor = "blue";
  }
  if(key == "r"){
    faceColor = "red";
  }


}//end of keyPressed function
