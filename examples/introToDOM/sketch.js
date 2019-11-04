function setup() {
  // put setup code here
  var cnv = createCanvas(400, 400);
  cnv.id("mycanvas");

  var container0 = createDiv();
  container0.id("container0"); //why can't you just refer to it as the var?

  //find an id that equals container0
  //.html() injects html or text into another html tag
  // # designates an id
  select("#container0").html("<h1>Your sketch title here!</h1>");
  select("#container0").style("width","400px");
  select("#container0").style("margin","0 auto");

  cnv.parent("#container0");

  //select("#container0").html(" <<embed link>> ")

  select("body").style("background","red");

}

function draw() {
  // put drawing code here
  background(0);

}
