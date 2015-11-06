/**
 * Created by Odyssey on 06.11.2015.
 */


function makeTimer(doneMessage, n) {
    setTimeout(
        function() {
            alert(doneMessage);
        },
        n);
}

makeTimer("Cookies are done!", 3000);



/*
function handler() {
    alert(doneMessage);
}
function makeTimer2(doneMessage, n) {
    setTimeout(handler, n);
}
makeTimer2("Cookies are done!", 2000);*/



function setTimer(doneMessage, n) {
    setTimeout(function() {
        alert(doneMessage);
    }, n);
    doneMessage = "OUCH!";
}
setTimer("Cookies are done!", 1000);