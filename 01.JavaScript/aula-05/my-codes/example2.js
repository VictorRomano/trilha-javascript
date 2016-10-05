'use strict';

let pessoa = {
  sexo: 'Masculino'
};

let victor = {
  nome: 'Victor'
};

Object.setPrototypeOf(victor, pessoa)

console.log(victor);
console.log(victor.sexo);

console.log(Object.getPrototypeOf(victor));
