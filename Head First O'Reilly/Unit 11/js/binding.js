var theString = "Global string...";

function outer() {
    var theString = "Inner string";

    function inner() {
        //console.log(theString);
        return theString;
    }

    return inner;
}


var of = outer();
var result = of();
console.log(result);


function makeCounter() {

    var count = 0;

    function counter() {
        return count++;
    }

    return counter;
}

var doCount = makeCounter();

console.log(doCount());
console.log(doCount());
console.log(doCount());


function makePassword(password) {
    return function (passwordGuess) {
        return (passwordGuess === password);
    };
}

var f = makePassword("test");
console.log(f("test"));


function multN(n) {
    return function (x) {
        return n * x;
    };
}

var mult2 = multN(2);
console.log(mult2(5));
console.log(mult2(15));


function makeCounter2() {

    var count = 10;

   /* var i = {
        increment: function () {
            return count++;
        }
    };

    return i.increment;*/


    return {
        increment: function() {
            return count++;
        }
    }
}

var doCount2 = makeCounter2();

console.log(doCount2.increment());
console.log(doCount2.increment());
console.log(doCount2.increment());
