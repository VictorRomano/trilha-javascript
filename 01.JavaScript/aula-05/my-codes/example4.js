'use strict';

let pessoa = {
  sexo: 'Masculino'
};

let victor = Object.create(pessoa);

console.log(victor.sexo);
