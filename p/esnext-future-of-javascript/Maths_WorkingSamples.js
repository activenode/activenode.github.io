"use strict";
const log = require('./logline').log;


//Signs
let signNegative = Math.sign(-3000); //-1
let signPositive = Math.sign(9000); //1
let signZero     = Math.sign(0); //0

log({
  'signNegative': signNegative,
  'signPositive': signPositive,
  'signZero': signZero
})

//Epsilon
log('I am EPSILON', Math.EPSILON)


//Truncate
log('Truncating to the 1', Math.trunc(1.235))
log('Truncating to the 1', Math.trunc(1.9999935))

//Pythagoras it is!
var c = Math.hypot(Math.sqrt(2),Math.sqrt(7));
log('Hypot should be 3 because 2+7 is 9', c)


log(Number.isInteger(1.0000))
log(Number.isInteger(1.1))
log(Number.isInteger('1'))
