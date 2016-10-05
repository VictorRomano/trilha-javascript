'use strict';

function sum(x, y) {
  let context = this;
  console.log('Context:', context);

  return x + y;
}

var resultDirect = sum(1, 2);
var resultCall = sum.call({}, 1, 2);
var resultApply = sum.apply(null, [1, 2]);

console.log(resultDirect);
console.log(resultCall);
console.log(resultApply);
