
var slot;
var num1 = 0;
var num2 = 0;
var num3 = 0;
var num4 = 0;
var num5 = 0;
var num6 = 0;

function setup() {
  // put setup code here
  createCanvas(400,400);
  background(0);
}

function draw() {
  // put drawing code here
  for (var i = 0; i < 100000; i++) {
    slot = int(random(1,7));
}

if (slot == 1) {
  num1++;
} else if (slot == 2) {
  num2++;
} else if(slot == 3){
  num3++;
} else if (slot == 4) {
  num4++;
} else if (slot == 5) {
  num5++;
} else if (slot == 6) {
  num6++;
}


console.log(num1,num2,num3,num4,num5,num6);

}
