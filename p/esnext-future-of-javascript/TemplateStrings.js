"use strict";
const log = require('./logline').log;

//Old:
function blubb(){
  return 'Blubb!';
}

log(blubb())

log('Hallo '+blubb());

log(`Hallo ${blubb()}`);
