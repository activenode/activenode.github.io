"use strict";
const log = require('./logline').log;



function foobar({foo, bar}) {
    log('foo', foo);
    log('bar', bar);
}

foobar({'foo': 'hello', 'bar': 'World'});

const arraySource = [1,2,3,4];
const [target1, target2] = arraySource;

log('target1', target1);
log('target2', target2);

const [,,target3] = arraySource;
log('target3', target3);


const nameObj = {'firstName': 'David', 'lastName': 'Lorenz'};
const {firstName: otherFirstNameVar, lastName: otherLastNameVar} = nameObj;

log('Name: ', otherFirstNameVar, otherLastNameVar)
