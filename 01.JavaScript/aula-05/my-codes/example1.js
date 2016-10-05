'use strict';

let pessoa = {
  sexo: 'Masculino'
};

let victor = {
  nome: 'Victor',
  __proto__: pessoa
};

console.log(victor);
console.log(victor.sexo);

console.log(victor.__proto__);
console.log(victor.__proto__.__proto__);
console.log(victor.__proto__.__proto__.__proto__);
