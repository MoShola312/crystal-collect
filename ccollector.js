var goal = Math.floor(Math.random() * 100);
var currentScore = 0;
var win = 0;
var lose = 0;
var plusRed = Math.floor(Math.random() * 10);
console.log("red " + plusRed);
var plusGreen = Math.floor(Math.random() * 20);
console.log("green " + plusGreen);
var plusPurple = Math.floor(Math.random() * 30);
console.log("purle " + plusPurple);
var plusEmerald = Math.floor(Math.random() * 15);
console.log("emerald " + plusEmerald);


$("#goal").text(goal);

$("#red").on("click", function() {
  addRed()
  $("#currentScore").html(currentScore)
  ifWon()
})

$("#green").on("click", function() {
  addGreen()
  $("#currentScore").html(currentScore)
  ifWon()
})

$("#purple").on("click", function() {
  addPurple()
  $("#currentScore").html(currentScore)
  ifWon()
})

$("#emerald").on("click", function() {
  addEmerald()
  $("#currentScore").html(currentScore)
  ifWon()
})




function addRed(){
  currentScore += plusRed;
  console.log("Score " + currentScore);
  // return currentScore;
}

function addGreen(){
  currentScore += plusGreen;
  console.log("Score " + currentScore);
  // return currentScore;
}

function addEmerald(){
  currentScore += plusEmerald;
  console.log("Score " + currentScore);
  // return currentScore;
}

function addPurple(){
  currentScore += plusPurple;
  console.log("Score " + currentScore);
  // return currentScore;
}

function ifWon() {
  if(currentScore === goal){
    win++;
    $("#win").html(win);
    $("#winLose").html("<p>You Win!</p>");
    endGame();
  } else if (currentScore > goal){
    lose++;
    $("#lose").html(lose);
    // $("#total").append("<p>You Lose</p>");
    $("#winLose").html("<p>You Lose!</p>");
    endGame();
  }
}


console.log("goal: " + goal);
console.log("C: " + currentScore);

function endGame() {
  plusRed = Math.floor(Math.random() * 10);
  console.log("red " + plusRed);
  plusGreen = Math.floor(Math.random() * 20);
  console.log("green " + plusGreen);
  plusPurple = Math.floor(Math.random() * 30);
  console.log("purple " + plusPurple);
  plusEmerald = Math.floor(Math.random() * 15);
  console.log("emerald " + plusEmerald);
  goal = Math.floor(Math.random() * 100);
  $("#goal").text(goal);
  currentScore = 0;
  $("#currentScore").html(currentScore)
}
