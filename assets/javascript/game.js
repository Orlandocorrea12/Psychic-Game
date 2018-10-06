var alphabet = "abcdefghijklmnopqrstuvwxyz";

var randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];

var wins = document.getElementById("wins")

var losses = document.getElementById("losses")

var remGuesses = document.getElementById("remGuesses")

var guesses = document.getElementById("guesses")

var winsNum = 0;

var lossNum = 0;

var remGuessNum = 8;

var guessLetter = [];

wins.textContent = "Wins: " + winsNum;

losses.textContent = "Losses: " + lossNum;

remGuesses.textContent = "Remaining Guesses: " + remGuessNum;

guesses.textContent = "Your Guesses: " + guessLetter;

function win() {

    winsNum++;

    wins.textContent = "Wins: " + winsNum.toString();

    

    reset();

}

function lose() {

    lossNum++;

    losses.textContent = "Losses: " + lossNum.toString();

    remGuessNum = 8;

    remGuessNum.textContent = remGuessNum;

    reset();
}

function wrongGuess(userGuess) {

    remGuessNum--;
    guessLetter.push(userGuess);
    remGuesses.textContent = "Remaining Guesses: " + remGuessNum;
    guesses.textContent = guesses.textContent + " " + userGuess;
}

function reset(){
    randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
    remGuessNum = 8;
    remGuesses.textContent = "Remaining Guesses: " ;
    guesses.textContent = "Your Guesses:";
}


console.log(randomLetter)

document.onkeyup = function (start) {

    var userGuess = start.key;
    var isValidKey = true;
    if (alphabet.indexOf(userGuess) < 0) {
        if(remGuessNum < 8){
            isValidKey = false;
        }
        
    }

    if (isValidKey == false) {
        alert('Only letters a-z are valid')
    } else {
        if (randomLetter == userGuess) {

            win();

        }

        else if (remGuessNum == 0) {

            lose()


        }

        else {

            wrongGuess(userGuess)


        }
    }

    console.log(userGuess);

}