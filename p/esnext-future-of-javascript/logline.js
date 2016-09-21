"use strict";

exports.log = function(){
  console.log('-----');
  if (arguments.length > 1 && typeof arguments[0]=='string') {
    arguments[0] = `|${arguments[0]}|`;
  }
  console.log.apply(console, arguments);
  console.log(' ');
};
