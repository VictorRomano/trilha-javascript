'use strict';

function Person(name) {
  this.name = name;
  this.toString = function() {
    return this.name;
  }
  this.valueOf = function() {
    return this.name;
  }
}

var result = new Person('Victor') == 'Victor';

console.log(result);
