var f1 = function() {
    console.log("Hello World!");
};

//  implicit
function addN(n) {
    var adder = function(x) {
        return n + x;
    };

    return adder;
}


//  explicit
var add3 =  function(x) {
    return 3 + x;
};



var add2 = addN(2);
console.log(add2(10));
console.log(add2(100));

console.log(add3(10));
console.log(add3(100));