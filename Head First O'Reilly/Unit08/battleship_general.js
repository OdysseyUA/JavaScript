function parseGuess(guess) {
    var alphabet = ["A", "B", "C", "D", "E", "F", "G"];

    if (guess === null || guess.length !== 2) {
        alert("Oops, please enter a letter and a number on the board.");
    } else {
        var firstChar = guess.charAt(0);

        var row = alphabet.indexOf(firstChar.toUpperCase());
        var column = guess.charAt(1);

        if (isNaN(row) || isNaN(column)) {
            alert("Oops, that isn't on the board.");
        } else if (row < 0 || row >= model.boardSize || column < 0 || column >= model.boardSize) {
            alert("Oops, that's off the board!");
        } else {
            return row + column;
        }
    }

    return null;
}

function handleFireButton() {
    var guessInput = document.getElementById("guessInput");
    var guess = guessInput.value;

    controller.processGuess(guess);
    guessInput.value = "";

    console.log("test " + guess);
}

function handleKeyPress(e) {
    var fireButton = document.getElementById("fireButton");

    if (e.keyCode === 13) {
        fireButton.click();
        return false;
    }
}

function init() {
    var fireButton = document.getElementById("fireButton");
    fireButton.onclick = handleFireButton;

    var guessInput = document.getElementById("guessInput");
    guessInput.onkeydown = handleKeyPress;

    model.generateShipLocations();
}


window.onload = init;