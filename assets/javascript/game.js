var randomChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var wins = 0;
var losses = 0;
var guesses = 9;
var guessesLeft = 9;
var guessedLetters = [];
var letterToGuess = null;


var randomGuess = randomChoices[Math.floor(Math.random() * randomChoices.length)];

var remainingGuesses = function () {
    document.getElementById("Guesses").innerHTML = "Guesses Left: " + guessesLeft;
};

var remainingLetters = function () {
    this.letterToGuess = this.randomChoices[Math.floor(Math.random() * this.randomChoices.length)];
};

var soFar = function () {
    document.getElementById("SoFar").innerHTML = "Your Guesses: " + guessedLetters.join(', ');
};

var reset = function () {
    totalGuesses = 9;
    guessesLeft = 9;
    guessedLetters = [];

    remainingGuesses();
    remainingLetters();
    soFar();
}

remainingGuesses();
remainingLetters();

document.onkeyup = function (event) {
    guessesLeft--;
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

    guessedLetters.push(userGuess);
    remainingGuesses();
    soFar();


    if (guessesLeft > 0) {
        if (userGuess == letterToGUess) {
            wins++;
            document.getElementById("Wins").innerHTML = "Wins: " + wins;
            alert("You have a talant !");
            reset();
        }

    } else if (guessesLeft == 0) {
        losses++;
        document.getElementById("Losses").innerHTML = "Losses: " + losses;
        alert("Sorry buddy, you have to try harder !");
        reset();
    }
};
