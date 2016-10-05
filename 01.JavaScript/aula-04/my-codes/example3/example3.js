'use strict';

function foo() {
  console.log('foo');
  return false;
}

function bar() {
  console.log('bar');
  return true;
}

var result = foo() & bar();

console.log(result);
