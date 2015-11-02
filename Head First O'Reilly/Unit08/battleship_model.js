/**
 * Created by Odyssey on 01.11.2015.
 */


var model = {
    boardSize: 7,
    numShips: 3,
    shipsSunk: 0,
    shipLength: 3,
    /*ships: [{locations: ["10", "20", "30"], hits: ["", "", ""]},
        {locations: ["32", "33", "34"], hits: ["", "", ""]},
        {locations: ["63", "64", "65"], hits: ["", "", "hit"]}],

    ships: [{locations: ["10", "11", "12"], hits: ["", "", ""]},
        {locations: ["06", "16", "26"], hits: ["", "", ""]},
        {locations: ["24", "34", "44"], hits: ["", "", ""]}],
    */

    //ships: [{locations: []}, {hits: []}], // ! NPE

    ships: [ { locations: [0, 0, 0], hits: ["", "", ""] },
        { locations: [0, 0, 0], hits: ["", "", ""] },
        { locations: [0, 0, 0], hits: ["", "", ""] } ],

    fire: function (guess) {
        var ship;
        //var locations;
        var index;

        for (var i = 0; i < this.numShips; i++) {
            ship = this.ships[i];
            //locations = ship.locations;
            index = ship.locations.indexOf(guess);

            if (index >= 0) {
                ship.hits[index] = "hit";
                view.displayHit(guess);
                view.displayMessage("HIT!");

                if (this.isSunk(ship)) {
                    view.displayMessage("You sank my battleship!");
                    this.shipsSunk++;
                }

                return true;
            }
        }

        view.displayMiss(guess);
        view.displayMessage("You missed.");
        return false;
    },

    isSunk: function (ship) {
        for (var i = 0; i < this.shipLength; i++) {
            if (ship.hits[i] != "hit") {
                return false;
            }
        }
        return true;
    },

    generateShipLocations: function() {
        var locations;
        for (var i = 0; i < this.numShips; i++) {
            do {
                locations = this.generateShip();
            } while (this.collision(locations));
            this.ships[i].locations = locations;
        }
    },

    collision: function(locations) {
        for (var i = 0; i < this.numShips; i++) {

            var ship = model.ships[i];
            for (var j = 0; j < locations.length; j++) {
                if (ship.locations.indexOf(locations[j]) >= 0) {
                    return true;
                }
            }
        }
        return false;
    },

    generateShip: function() {
        var direction = Math.floor(Math.random() * 2);
        var row, col;
        if (direction === 1) {
            // Сгенерировать начальную позицию для горизонтального корабля
            row = Math.floor(Math.random() * this.boardSize);
            col = Math.floor(Math.random() * (this.boardSize - this.shipLength));
        } else {
            // Сгенерировать начальную позицию для вертикального корабля
            row = Math.floor(Math.random() * (this.boardSize - this.shipLength));
            col = Math.floor(Math.random() * this.boardSize);
        }

        var newShipLocations = [];
        for (var i = 0; i < this.shipLength; i++) {
            if (direction === 1) {
                // добавить в массив для горизонтального корабля
                newShipLocations.push(row + "" + (col + i));
            } else {
                // добавить в массив для вертикального корабля
                newShipLocations.push((row + i) + "" + col);
            }
        }
        return newShipLocations;
    }
};
