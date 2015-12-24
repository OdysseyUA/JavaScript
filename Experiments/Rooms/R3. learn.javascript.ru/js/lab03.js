/**
 * Created by Odyssey on 29.11.2015.
 */



"use strict";

function ask(question, answer, ok, fail) {
    var result = prompt(question, '');
    if (result.toLowerCase() == answer.toLowerCase()) ok();
    else fail();
}

var user = {
    login: 'bh',
    password: '12345',

    loginOk: function() {
        alert( this.login + ' enter to the site.' );
    },

    loginFail: function() {
        alert( this.login + ': access denied.' );
    },

    checkPassword: function() {
        ask("Your password?", this.password, this.loginOk, this.loginFail);
    }
};

user.checkPassword();