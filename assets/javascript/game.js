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
$("#totalWins").text("Wins: " + wins);
$("#totalLosses").text("Losses: " + losses);
$("#totalScore").text(totalScore);


reset();

$("#gem1").on("click", function(){
    totalScore = totalScore + gem1;
    
    $("#totalScore").text(totalScore);
    
    if (totalScore == randomNumber) {
        winner();
    } else if (totalScore > randomNumber) {
        loser();
    }
});

$("#gem2").on("click", function(){
    totalScore = totalScore + gem2;
    
    $("#totalScore").text(totalScore);
    
    if (totalScore == randomNumber) {
        winner();
    } else if (totalScore > randomNumber) {
        loser();
    }
});

$("#gem3").on("click", function(){
    totalScore = totalScore + gem3;
    
    $("#totalScore").text(totalScore);
    
    if (totalScore == randomNumber) {
        winner();
    } else if (totalScore > randomNumber) {
        loser();
    }
});

$("#gem4").on("click", function(){
    totalScore = totalScore + gem4;
    
    $("#totalScore").text(totalScore);
    
    if (totalScore == randomNumber) {
        winner();
    } else if (totalScore > randomNumber) {
        loser();
    }
});

function winner() {
    values();
    alert("You Win!")
    wins++;
    $("#totalWins").text("Wins:" + wins);
    reset();
}

function loser(){
    values();
    alert("You Lose!");
    losses++;
    $("#totalLosses").text("Losses: " + losses);
    reset();
}

function values(){
    console.log("The value of Crystal 1 is: " + gem1);
    console.log("The value of Crystal 2 is: " + gem2);
    console.log("The value of Crystal 3 is: " + gem3);
    console.log("The value of Crystal 4 is: " + gem4);
    console.log("Total Score: " + totalScore);
    console.log("Random Number: " + randomNumber);
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