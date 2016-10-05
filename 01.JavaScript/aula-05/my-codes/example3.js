'use strict';

let pessoa = {
  sexo: 'Masculino'
};

let victor = {
  nome: 'Victor'
};

Object.setPrototypeOf(victor, pessoa);

let jose = {
  nome: 'José'
};

Object.setPrototypeOf(jose, pessoa);

// pessoa.sexo = 'Feminino'; // muda o sexo de ambos os objetos
jose.sexo = 'Feminino'; // adiciona o sexo ao objeto jose
// verifique a diferença no toString do objeto

console.log(victor.sexo);
console.log(jose.sexo);
console.log('---');
console.log(victor);
console.log(jose);
