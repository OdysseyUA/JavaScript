function bind(func, context) {
    return function() { // (*)
        return func.apply(context, arguments);
    };
}


function f() {
    alert( this );
}

var g = bind(f, "Context");
g(); // Context