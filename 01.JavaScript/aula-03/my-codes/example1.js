'use strict';

function criteria(x, y) {
  return x.name >= y.name;
}

function compare(obj1, obj2, criteria) {
  return criteria(obj1, obj2);
}

var skiter = {name : 'skiter'};
var victor = {name : 'victor'};

var result = compare(skiter, victor, criteria);

console.log(result);
