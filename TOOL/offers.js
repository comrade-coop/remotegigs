#!/usr/bin/env node

var flags = require('flags');
var index = require('./index.js');

flags.defineNumber('id');
flags.defineBoolean('nf').setDefault(false);
flags.defineBoolean('listlabels').setDefault(false);
flags.parse();

if(flags.get('id')){
  index.printOfferSelected(flags.get('id'));
} 
else if(flags.get('listlabels')){
  index.printListLabels();
}
else if(flags.get('nf')){
  index.printOffers();
}
else{
  index.printOffersFiltered();
}
