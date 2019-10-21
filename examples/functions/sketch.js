function setup() {
  // put setup code here
  createCanvas(400,400);

  hello();
  goodbye("Zeven");
  goodbye("Jack");
}

function draw() {
  // put drawing code here
  background(255);
  // frameRate(5); can be used to slow down the animation, but changing frameRate will make interactions run extremely slowly
  for (var i = 0; i < 100; i++) {
    circleColor(random(width),random(height),random(255),random(255),random(255),random(200)); //passing these parameters to the function
  }

  console.log(circleHitzone(100,100));

}

function mousePressed() {
  if (circleHitzone(200,200 == true)) {
    console.log("mousePressed");
  }
  circleHitzone();
}

function hello() {
  console.log("Hello");
}

function goodbye(message) { //parameters
  console.log("Goodbye " + message);
}

function circleColor(xpos,ypos,r,g,b,cSize) { //parameters
  fill(r,g,b);
  ellipse(xpos,ypos,cSize,cSize);
}

function circleHitzone(distX,distY) {
  var curDist = dist(mouseX,mouseY,distX,distY)
  //console.log("curDist = " + curDist);
  fill(127);
  ellipse(distX,distY,100);
  if (curDist < 50) {
    return true;
  } else {
    return false;
  }
}
