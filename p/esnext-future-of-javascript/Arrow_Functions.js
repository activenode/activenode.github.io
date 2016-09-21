"use strict";
const log = require('./logline').log;

let otherContext = {
  'foo': 'bar'
};


class TestClass {
  constructor(){
    this.foo = 'david';
  }

  callArrow(){
    let arrowFunction = ()=>{
      log('Logging arrowFunction this.foo', this.foo); //same context!
    };

    arrowFunction();
    //arrowFunction.apply(otherContext) //BIIIIIIIIIG ISSUE with libraries!
  }

  callDefault(){
    let stdFunction = function(){
      log('Logging stdFunction this.foo', this.foo); //same context!
    };

    // stdFunction();
    stdFunction.apply(this);
    stdFunction.apply(otherContext)
  }
}

var testClassObject = new TestClass;
testClassObject.callArrow();
testClassObject.callDefault();
