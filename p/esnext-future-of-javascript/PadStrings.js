"use strict";
const log = require('./logline').log;

'hal'.padEnd(10,'lo')
//=> hallololol

var bank_account_number = '1234567';
var normed_bank_account_number = bank_account_number.padStart(12,'0');
//=> 000001234567
