var view = {
    displayMessage: function (msg) {
        var message = document.getElementById("messageArea");
        message.innerHTML = msg;
    },

    displayHit: function (location) {
        var hitCell = document.getElementById(location);
        hitCell.setAttribute("class", "hit");
    },

    displayMiss: function (location) {
        var missCell = document.getElementById(location);
        missCell.setAttribute("class", "miss");
    },

    test: 4,
    testAr: [1, 2, 3, 4]
};





