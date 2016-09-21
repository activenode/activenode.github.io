"use strict";
const log = require('./logline').log;


//Spread operator
Math.max(-1, ...[-1, 5, 11], 3) //...[] - basically "array2arguments"

function argumentCollector(argA, argB, ...argC) { //...argC - basically "arguments2array"
  log(argA);
  log(argB);
  log(argC.join(''));
}

argumentCollector('he','lo','foo','bar','test');

function withPresets(val1='test') {
  log('value given', val1);
}
withPresets();
withPresets('overwrite');
