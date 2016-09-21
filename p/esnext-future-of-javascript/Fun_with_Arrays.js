"use strict";
const log = require('./logline').log;

let myObject= {'woobie': 'doobie'};
let fooArray = [
  'foo',
  'foobar',
  -0,
  {'foobie':'123'},
  myObject
];

log('foo?',fooArray.includes('foo'))
log('foobie?',fooArray.includes('foobie'))
log('foobie-object?',fooArray.includes({'foobie':'123'})) //that is what Maps are for!

log('0-string?', fooArray.includes('0'))
log('0-number?', fooArray.includes(+0))
log('woobie-doobie-object?', fooArray.includes(myObject))

log('gimme the first object!', fooArray.find(item=>{ return typeof item == 'object' }))
