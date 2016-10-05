'use strict';

function Person(name, age, email) {
  this.name = name;
  this.age = age;
  this.email = email;

  this.compare = function(obj, criteria, property) {
    return criteria(this, obj, property);
  }
}

function compareProperty(obj1, obj2, property) {
  return obj1[property] >= obj2[property];
}

var victor = new Person('Victor', 26, 'victor@victor.com');
var marcela = new Person('Marcela', 22, 'marcela@marcela.com');

var result = victor.compare(marcela, compareProperty, "age");
console.log(result);
