'use strict';
let utils = require('./utils');

let packageJson = require('./../package.json');
let winlink = require('./winlink');

module.exports = {
    version : packageJson.version,
    winlink
}