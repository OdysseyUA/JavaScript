/**
 * Created by Odyssey on 14.12.2015.
 */

module.exports = (function(){

    function test1(){ alert ("Test before 1!");}
    function test2(){ alert ("Test before 2!");}

    return {
        name: "Ivan",
        sayHello: "Hello " + this.name,
        get: function(){
            test2();

            return null;
        }
    }
})();