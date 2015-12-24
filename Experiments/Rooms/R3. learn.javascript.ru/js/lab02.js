/**
 * Created by Odyssey on 28.11.2015.
 */
'use strict';

function hw(a, b) {
    alert('Hello ' + this.userName + '!');
    alert('Sum Result: ' + (a + b));
}

//var g = hw.bind({userName: 'bh', age: 25});
var g = hw.bind({userName: 'bh', age: 25}, 2, 3);


g();