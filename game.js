var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern=[];
var userClickedPattern=[];
var level = 0;
var started = false;

$(document).keypress(function() {
  if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

$(".btn").click(function() {
var userChosenColor = $(this).attr("id");
userClickedPattern.push(userChosenColor);
playsound(userChosenColor);
$(this).addClass("pressed");
setTimeout(function() {
  $("#"+userChosenColor).removeClass("pressed");
},100);
checkAnswer(userClickedPattern.length-1);
});


function checkAnswer(currentLevel) {
  if (userClickedPattern[currentLevel]===gamePattern[currentLevel]) {
 if (userClickedPattern.length === gamePattern.length){
    setTimeout(function() {
      nextSequence();},1000);
  }
} else {
    $("h1").text("Game Over, Press Any Key to Restart")
    playsound("wrong");
    $("body").addClass("game-over");
    setTimeout(function() {
      $("body").removeClass("game-over")
    },200);
    startOver();
  }

}
function nextSequence() {
  userClickedPattern=[];
  var randomNumber = Math.floor(Math.random()*4);
level++
$("h1").text("Level "+level);
  var randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);
  $("#"+randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
playsound(randomChosenColor);
}
function playsound(soundname) {
  var audio = new Audio("sounds/"+soundname+".mp3");
  audio.play();
}
function startOver() {
 gamePattern=[];
 level = 0;
 started = false;
}
