'use strict';

function Person(name, age, email) {
  this.name = name;
  this.age = age;
  this.email = email;

  this.compare = function(obj, criteria) {
    return criteria(this, obj);
  }
}

function prepareCriteria(property) {
  return function(obj1, obj2) {
    return obj1[property] >= obj2[property];
  }
}

const compareName = prepareCriteria('name');
const compareAge = prepareCriteria('age');
const compareEmail = prepareCriteria('email');

var victor = new Person('Victor', 26, 'victor@victor.com');
var marcela = new Person('Marcela', 22, 'marcela@marcela.com');

console.log(victor.compare(marcela, compareName));
console.log(victor.compare(marcela, compareAge));
console.log(victor.compare(marcela, compareEmail));
