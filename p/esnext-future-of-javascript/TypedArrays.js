"use strict";
const log = require('./logline').log;


const typedArray = new Uint8Array([0,1,2,3]); //2^8 = 256 => 0-255
log(...typedArray) //SPREAD operator
log(typedArray.buffer)

//typedArray.push(4) will not work

//TYPED ARRAYS HAVE FIXED SIZES!
typedArray.set([9,10,11,12]);
log(typedArray);

try {
  typedArray.set([20,21,22,23,24])
} catch(e) {
  log(e);
}
