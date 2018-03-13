'use strict';
let _Promise = require('bluebird');

_Promise.prototype.bind = function(argument,fn) {
    if(fn) return this.then(() => argument).then(fn);
    else return this.then(() => argument);
}

/* GLOBALS */
global._ = require('lodash');
global.Promise = _Promise;
