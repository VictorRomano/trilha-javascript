'use strict';

var propriedades = 'nome,idade,sexo,cpf';

''.__proto__.quebrarCsv = function() {
  return this.split(',');
}

console.log(propriedades.quebrarCsv());
