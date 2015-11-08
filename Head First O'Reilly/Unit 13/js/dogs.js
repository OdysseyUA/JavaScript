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

Dog.prototype.bark = function () {
    if (this.weight > 25) {
        return (this.name + " says Woof!");
    } else {
        return (this.name + " says Yip!");
    }
};

Dog.prototype.run = function () {
    return this.name + " Run!";
};

Dog.prototype.wag = function () {
    return this.name + " Wag!";
};

var fido = new Dog("Fido", "Taxa", 10);

var result = res();
//result(fido.bark());


function ShowDog(name, breed, weight, handler) {
    Dog.call(this, name, breed, weight);
    this.handler = handler;
}

ShowDog.prototype = new Dog();
ShowDog.prototype.constructor = ShowDog;

ShowDog.prototype.league = "Webville";

ShowDog.prototype.stack = function () {
    return this.name + " Stack";
};

ShowDog.prototype.bait = function () {
    return this.name + " Bait";
};

ShowDog.prototype.gait = function (kind) {
    return this.name + " " + kind + "ing";
};

ShowDog.prototype.groom = function () {
    return this.name + " Groom";
};




var sd = new ShowDog("test", "test2", 15, "fido");
//result(sd.run());
//result("==============================");

var scotty = new ShowDog("Scotty", "Scottish Terrier", 15, "Cookie");
/*
result(scotty.stack());
result(scotty.bark());
result(scotty.league);
result(scotty.species);
*/


var dogIdentification = function (dog) {
    if (dog instanceof ShowDog) {
        return dog.name + " is a ShowDog";
    }

    if (dog instanceof Dog) {
        return dog.name + " is a Dog";
    }

}



var fido = new Dog("Fido", "Mixed", 38);
result(dogIdentification(fido));
var scotty = new ShowDog("Scotty", "Scottish Terrier", 15, "Cookie");
result(dogIdentification(scotty));

result("==============================");

result("Fido constructor is " + fido.constructor);
result("Scotty constructor is " + scotty.constructor);
