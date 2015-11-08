var divElement = document.getElementById("result");


function res() {
    var resultS = "";

    function setResult(result) {
        resultS = resultS + "<br\>" + result;
        divElement.innerHTML = resultS;
    }

    return setResult;
}


function Dog(name, breed, weight) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;
}

Dog.prototype.species = "Canine";

Dog.prototype.bark = function() {
    if (this.weight > 25) {
        return (this.name + " says Woof!");
    } else {
        return (this.name + " says Yip!");
    }
};

Dog.prototype.run = function() {
    return "Run!";
};

Dog.prototype.wag = function() {
    return "Wag!";
};


var fido = new Dog("Fido", "---", 10);
var barnaby = new Dog("Barnaby", "---", 20);
var spot = new Dog("Spot", "---", 30);

var result = res();

result(fido.bark());
//setResult(fido.frr());

Dog.prototype.frr = function() {
    return "Frrr....";
};

result(fido.frr());



Dog.prototype.sitting = false;
Dog.prototype.sit = function() {
    if (this.sitting) {
        return this.name + " is already sitting.";
    }
    else {
        this.sitting = true;
        return this.name + " is now sitting.";
    }
};


/*
result(barnaby.sit());
result(barnaby.sit());
result(spot.sit());
result(spot.sit());
*/

/*
result(spot.hasOwnProperty("species"));
result(fido.hasOwnProperty("species"));

result(spot.hasOwnProperty("sitting"));
result(fido.hasOwnProperty("sitting"));
*/


result(spot.hasOwnProperty("species"));
spot.species = true;
result(spot.hasOwnProperty("species"));
