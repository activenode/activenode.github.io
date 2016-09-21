"use strict";
const log = require('./logline').log;


async function myAsyncFunction(){
  let foobar = 'foobar';

  let awaitedPromise = await new Promise(function(resolve, reject){
    let seconds = 2 * 1000; //ms

    setTimeout(function(){
      console.log('Promise is resolved now');
      resolve('goofy');
    }, seconds)
  });

  log('f:',awaitedPromise);

  return foobar;
}

async function promiseResolve(){
  return 'elo';
}

myAsyncFunction().then(function(returned){
  log('This was returned 1', returned)
})

promiseResolve().then(function(returned){
  log('This was returned 2', returned)
})

// log ('Synchronous action in with async callers');
