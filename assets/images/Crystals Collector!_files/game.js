$(document).ready(function(){
var randomNumber = Math.floor(Math.random() * 101) + 19;

var gem1 = Math.floor(Math.random() * 11) + 1;
var gem2 = Math.floor(Math.random() * 11) + 1;
var gem3 = Math.floor(Math.random() * 11) + 1;
var gem4 = Math.floor(Math.random() * 11) + 1;

var totalScore = 0;
var wins = 0;
var losses = 0;

$("#randomNumber").text(randomNumber);
$("#totalWins").text(wins);
$("#totalLosses").text(losses);
$("#totalScore").text(totalScore);


reset();

$("#gem1").on("click", function(){
    totalScore += gem1;

    console.log("New total score is: "+ totalScore);
    
    $("#totalScore").text(totalScore);
    
    if (totalScore == randomNumber) {
        winner();
    } else if (totalScore > randomNumber) {
        loser();
    }
});

$("#gem2").on("click", function(){
    totalScore += gem2;

    console.log("New total score is: "+ totalScore);
    
    $("#totalScore").text(totalScore);
    
    if (totalScore == randomNumber) {
        winner();
    } else if (totalScore > randomNumber) {
        loser();
    }
});

$("#gem3").on("click", function(){
    totalScore += gem3;

    console.log("New total score is: "+ totalScore);
    
    $("#totalScore").text(totalScore);
    
    if (totalScore == randomNumber) {
        winner();
    } else if (totalScore > randomNumber) {
        loser();
    }
});

$("#gem4").on("click", function(){
    totalScore += gem4;

    console.log("New total score is: "+ totalScore);
    
    $("#totalScore").text(totalScore);
    
    if (totalScore == randomNumber) {
        winner();
    } else if (totalScore > randomNumber) {
        loser();
    }
});

function winner() {
    console.log("Total Score: " + totalScore);
    console.log("Random Number: " + randomNumber);
    alert("You Win!")
    wins++;
    $("#totalWins").text(wins);
    reset();
}

function loser(){
    console.log("Total Score: " + totalScore);
    console.log("Random Number: " + randomNumber);
    alert("You Lose!");
    losses++;
    $("#totalLosses").text(losses);
    reset();
}

function reset() {
    randomNumber = Math.floor(Math.random() * 101) + 19;
    console.log("New Random Number: " + randomNumber);
    $("#randomNumber").text(randomNumber);

    gem1 = Math.floor(Math.random() * 11) + 1;
    gem2 = Math.floor(Math.random() * 11) + 1;
    gem3 = Math.floor(Math.random() * 11) + 1;
    gem4 = Math.floor(Math.random() * 11) + 1;

    totalScore = 0;
    $("#totalScore").text(totalScore);
}
});