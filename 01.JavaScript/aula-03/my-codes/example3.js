'use strict';

function Person(name, age) {
  this.name = name;
  this.age = age;
}

var person = new Person('Victor', 26);
console.log(person);

var skiter  = {};
Person.call(skiter, 'Skiter', 26);

console.log(skiter);
