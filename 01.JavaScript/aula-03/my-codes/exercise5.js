'use strict';

function prepareLogger(label) {
  return function(msg) {
    console.log(label + msg);
  }
}

const myLogger = prepareLogger("DEBUG: ");

myLogger("Hello!!!");
