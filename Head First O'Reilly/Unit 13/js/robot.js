function Game() {
    this.level = 0;
}

Game.prototype.play = function () {
// Действия игрока
    this.level++;
    console.log("Welcome to level " + this.level);
    this.unlock();
};

Game.prototype.unlock = function () {
    if (this.level === 42) {
        Robot.prototype.deployLaser = function() {
            console.log(this.name + " is blasting you with laser beams.");
        };
    }
};


function Robot(name, year, owner) {
    this.name = name;
    this.year = year;
    this.owner = owner;
}

/*
var game = new Game();
var robby = new Robot("Robby", 1956, "Dr. Morbius");
var rosie = new Robot("Rosie", 1962, "George Jetson");


while (game.level < 42) {
    game.play();
}


robby.deployLaser();
rosie.deployLaser();
*/



function SpaceRobot(name, year, owner, homePlanet) {

    this.name = name;
    this.year = year;
    this.owner = owner;
    this.homePlanet = homePlanet;

    /*this.speak = function() {
        alert(this.name + " says Sir, If I may venture an opinion...");
    };
    */
}

SpaceRobot.prototype = new Robot();

SpaceRobot.prototype.speak = function() {
    alert(this.name + " says Sir, If I may venture an opinion...");
};

SpaceRobot.prototype.pilot = function() {
    alert(this.name + " says Thrusters? Are they important?");
};


var c3po = new SpaceRobot("C3PO", 1977, "Luke Skywalker", "Tatooine");
/*
c3po.speak = function () {
    alert(this.name + " says Sir, If I may venture an opinion...");
};
*/

c3po.speak();
c3po.pilot();
console.log(c3po.name + " was made by " + c3po.maker);

var simon = new SpaceRobot("Simon", 2009, "Carla Diana", "Earth");
//simon.makeCoffee();
//simon.blinkLights();
simon.speak();