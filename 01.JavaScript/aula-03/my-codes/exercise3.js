'use strict';

function sum(x) {
  return function(y) {
    return x + y;
  }
}

const baseSum = sum(5);

console.log(baseSum(1));
console.log(baseSum(2));
console.log(baseSum(3));
console.log(baseSum(4));
console.log(baseSum(5));
