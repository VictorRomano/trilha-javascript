'use strict';

function criteriaName(x, y) {
  return x.name >= y.name;
}

function criteriaColor(x, y) {
  return x.color >= y.color;
}

function criteriaYear(x, y) {
  return x.year >= y.year;
}

function Car(name, color, year) {
  this.name = name;
  this.color = color;
  this.year = year;

  this.compare = function(obj, criteria) {
    return criteria(this, obj);
  }
}

var gol = new Car('Gol', 'prata', 2012);
var prisma = new Car('Prisma', 'preto', 2007);

var resultName = gol.compare(prisma, criteriaName);
console.log(resultName);

var resultColor = gol.compare(prisma, criteriaColor);
console.log(resultColor);

var resultYear = gol.compare(prisma, criteriaYear);
console.log(resultYear);

console.log("---");

var resultName2 = prisma.compare(gol, criteriaName);
console.log(resultName2);

var resultColor2 = prisma.compare(gol, criteriaColor);
console.log(resultColor2);

var resultYear2 = prisma.compare(gol, criteriaYear);
console.log(resultYear2);
