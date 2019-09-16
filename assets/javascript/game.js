var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var winsCounter = 0;
var lossesCounter = 0;
var guessesLeftCounter = 9;

var winsHeadline = document.getElementById("wins");
var lossesHeadline = document.getElementById("losses");
var guessesLeft = document.getElementById("guessesLeft");
var yourGuesses = document.getElementById("yourGuesses");


document.onkeypress = function (wordGuess) {
    var userGuess = event.key;
    var i = [Math.floor((Math.random() * 26))];

    if (guessesLeftCounter > 0 && userGuess === alphabet[i]) {
        ++winsCounter;
        winsHeadline.textContent = ("Wins: " + winsCounter);

        --guessesLeftCounter;
        guessesLeft.textContent = ("Guesses Left: " + guessesLeftCounter);

        var yourGuessesPrint = document.createElement("span");
        yourGuessesPrint.textContent = (userGuess + "\xa0" + "\xa0" + "\xa0");
        yourGuesses.appendChild(yourGuessesPrint);
    } else if (guessesLeftCounter > 0) {
        ++lossesCounter;
        lossesHeadline.textContent = ("Losses: " + lossesCounter);

        --guessesLeftCounter;
        guessesLeft.textContent = ("Guesses Left: " + guessesLeftCounter);

        var yourGuessesPrint = document.createElement("span");
        yourGuessesPrint.textContent = (userGuess + "\xa0" + "\xa0" + "\xa0");
        yourGuesses.appendChild(yourGuessesPrint);
    } else { //reset counters and starting text
        winsCounter = 0;
        lossesCounter = 0;
        guessesLeftCounter = 9;
        winsHeadline.textContent = ("Wins: ");
        lossesHeadline.textContent = ("Losses: ");
        guessesLeft.textContent = ("Guesses Left: " + guessesLeftCounter);
        yourGuesses.textContent = "Your Guesses So Far: ";
        wordGuess: document.onkeypress;
    };

    

} //bracket for function wordGuess