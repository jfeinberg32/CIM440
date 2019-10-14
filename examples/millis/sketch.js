
var interval = 1000;
var prevMillis = 0;
var counter = 0;

function setup() {
  // put setup code here
  createCanvas(400,400);
}


function draw() {
  // put drawing code here
  // console.log(millis);

  //basic timer
  if (millis() - prevMillis > interval) {
    prevMillis = millis();
    counter = counter + 1;
    console.log(counter);
  }
  

}
