//source: http://www.2ality.com/2014/09/es6-modules-final.html

//node uses the CommonJS System right now!
let myImport          = require('some-file');
let anotherImport     = require('another-file');
let { some, thing }   = require('some-thing'); //must be sth like exports.some = function(){}, exports.thing = function(){}

//BUT: The de-facto standard is
import { some, thing } from './some-thing';
import { some, thing } from './some-thing.js';
import * from 'some-file';


//in your some-thing you would do that:
export function some(){

}

export function thing(){

}
