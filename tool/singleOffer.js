#!/usr/bin/env node

const hasFlag = require('has-flag');
var index = require('./index.js');
if(process.argv[2] != undefined)
    index.printOfferSelected(process.argv[2]);
else console.error("Offer number undefined")
