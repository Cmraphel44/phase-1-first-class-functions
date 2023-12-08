const { spy } = require("chai");

function receivesAFunction(callback, spy) {
    return callback(spy);
}

function returnsANamedFunction() {
    return function fn() {

    } ;
}

function returnsAnAnonymousFunction() {
    return function() {

    } ;
}