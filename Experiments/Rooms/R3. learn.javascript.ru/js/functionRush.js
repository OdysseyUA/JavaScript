/**
 * Created by Odyssey on 08.12.2015.
 */

function makeArmy() {

    var shooters = [];

    for (var i = 0; i < 10; i++) {

        var shooter = (function(x) {
            conslole.log( x );
        })(i);


        shooters.push(shooter);
    }

    return shooters;
}



var army = makeArmy();

army[3]();
army[5]();
