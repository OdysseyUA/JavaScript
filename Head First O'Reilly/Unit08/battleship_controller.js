/**
 * Created by Odyssey on 01.11.2015.
 */

var controller = {
    guesses: 0,

    processGuess: function (guess) {
        var location = parseGuess(guess);

        if (location) {
            this.guesses++;

            var hit = model.fire(location);

            if (hit && model.shipsSunk === model.numShips) {
                view.displayMessage("You sank all my battleships, in " +
                    this.guesses + " guesses");

                document.getElementById("inputArea")
                    .parentNode
                    .removeChild(document.getElementById("inputArea"));
            }
        }
    }
};
