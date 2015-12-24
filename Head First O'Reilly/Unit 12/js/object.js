var taxi = {
    make: "Webville Motors",
    model: "Taxi",
    year: 1955,
    color: "yellow",
    passengers: 4,
    convertible: false,
    mileage: 281341,
    started: false,
    start: function () {
        this.started = true;
    },
    stop: function () {
        this.started = false;
    },
    drive: function () {

    }
};


//console.log(taxi.started);
//taxi.start();
//console.log(taxi.started);


function Dog(name, breed, weight) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;
    this.bark = function () {
        if (this.weight > 25) {
            alert(this.name + " says Woof!");
        } else {
            alert(this.name + " says Yip!");
        }
    };
}


var dog = {
    name: "Fido",
    breed: "Mixed",
    weight: 38
};


function Duck(type, canFly) {
    this.type = type;
    this.canFly = canFly;
}


var fido = new Dog("Fido", "Mixed", 38);
var fluffy = new Dog("Fluffy", "Poodle", 30);
var spot = new Dog("Spot", "Chihuahua", 10);

var test = new Dog("-----", "-----", 10);


//console.log(fido.name);
//console.log(fluffy.name);
//console.log(spot.name);
//console.log(test.name);

//test.bark();


var cadiParams = {
    make: "GM",
    model: "Cadillac",
    year: 1955,
    color: "tan",
    passengers: 5,
    convertible: false,
    mileage: 12892,

    drive: function() {
        alert("Zoom zoom");
    },
    stop: function() {
        alert("Stop!");
    }
};

function Car(params) {
    this.make = params.make;
    this.model = params.model;
    this.year = params.year;
    this.color = params.color;
    this.passengers = params.passengers;
    this.convertible = params.convertible;
    this.mileage = params.mileage;
    this.started = false;
    this.start = function () {
        this.started = true;
    };
    this.stop = function () {
        this.started = false;
    };
    this.drive = function () {
        if (this.started) {
            alert("Zoom zoom!");
        } else {
            alert("You need to start the engine first.");
        }
    };
}

var cadi = new Car(cadiParams);

console.log(cadi.model);


var limoParams = {make: "Webville Motors",
    model: "limo",
    year: 1983,
    color: "black",
    passengers: 12,
    convertible: true,
    mileage: 21120};
var limo = new Car(limoParams);
var limoDog = new Dog("Rhapsody In Blue", "Poodle", 40);
//console.log(limo.make + " " + limo.model + " is a " + typeof limo);
//console.log(limoDog.name + " is a " + typeof limoDog);

if (limo instanceof Car) {
    //console.log("It's a Car!");
}

var fido2 = new Dog("Fido", "Mixed", 38);
fido2.owner = "Bob";
//console.log(fido2.owner);
delete fido2.owner;
//console.log(fido2.owner);

fido2.trust = function(person) {
    return (person === "Bob");
};

//console.log(fido2.trust("bob"));


var oddNumbers = new Array(3);
oddNumbers[0] = 1;
oddNumbers[1] = 3;
oddNumbers[2] = 5;

oddNumbers[3] = 7;

console.log(oddNumbers[0]);
console.log(oddNumbers[3]);


oddNumbers.reverse();

console.log(oddNumbers[0]);
console.log(oddNumbers[3]);

//cadiParams.drive();
//cadiParams.stop();
//
//cadiParams.newFunction = function() {
//    alert("test");
//};
//cadiParams.newFunction();

/*
cadiParams.test = "test";
alert(cadiParams.test);

delete cadiParams.test;
alert(cadiParams.test);
*/


cadiParams.isStarted = function() {
    if (this.year == 1955) {
        alert("Started!");
    }
};
cadiParams.isStarted();