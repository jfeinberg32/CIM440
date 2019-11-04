var rock, paper, scissors;
var playerSelection, computerSelection;

function setup() {
  // put setup code here
  createCanvas(600,500);

}

function draw() {
  // put drawing code here
  background(60,150,220);
  textSize(50);
  textFont("Power Red and Green");

  rock = createButton("Rock");
  rock.position(30,125);
  rock.mousePressed(function(){
    playerSelection = "rock";
    computerSelection = random("rock","paper","scissors");
  });

  paper = createButton("Paper");
  paper.position(30,150);
  paper.mousePressed(function(){
    playerSelection = "paper";
    computerSelection = random("rock","paper","scissors");
  });

  scissors = createButton("Scissors");
  scissors.position(30,175);
  scissors.mousePressed(function(){
    playerSelection = "scissors";
    computerSelection = random("rock","paper","scissors");
  });

  console.log(playerSelection, computerSelection);

  if (playerSelection == "rock" && computerSelection == "paper") {
      text("You lose, paper beats rock", 250,30);
    } else if (playerSelection == "paper" && computerSelection == "rock") {
      text("You win, paper beats rock", 250,30);
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
      text("You win, rock beats scissors");
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
      text("You lose, rock beats scissors", 250, 30);
    } else if (playerSelection == "") {

    }
}
