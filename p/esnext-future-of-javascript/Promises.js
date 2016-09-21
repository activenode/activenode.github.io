"use strict";
const log = require('./logline').log;

/**
@name Promises
*/

//-------------------------------------------------------
//-------------------------------------------------------
//Un-then'd Promise
let noThenPromise = new Promise(function(resolve, reject){
  resolve('SUCH_RESOLVE');
}) //short version: Promise.resolve('such resolve')


//-------------------------------------------------------
//-------------------------------------------------------
let thenedPromise = new Promise(function(resolve, reject){
  resolve('ANOTHER_RESOLVE');
})
thenedPromise.then(function(resolvedData){
  log(`Resolved: ${resolvedData}`);
})


//-------------------------------------------------------
//-------------------------------------------------------
let iAmRejected = new Promise(function(resolve, reject){
  reject();
});
iAmRejected.then(function(){
  log('I was NOT rejected')
}).catch(function(){
  log('I was rejected :(')
  return Promise.resolve('wow i can still go further');
}).then(function(result){
  log('RESULT:', result);
});

//finally() and done() our out of spec right now. I dont see them being implemented.
