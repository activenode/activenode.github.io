"use strict";
const log = require('./logline').log;



for (let x of [1,2,3]) {
  console.log('x', x);
}

function* getPrimeGenerator(){
  yield 2;
  yield 3;
  yield 5;
  yield 7;
  yield 11;
  yield 13;
}

let myGenerator = getPrimeGenerator();
for (let prime of myGenerator) {
  log('prime-num', prime);
}

//only THIS is a SPEC standard. all the others with `if` etc. are NOT!
