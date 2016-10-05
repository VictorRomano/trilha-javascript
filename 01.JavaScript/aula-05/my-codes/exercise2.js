'use strict';

var animal = {
  andar: function() {
    console.log(`Estou andando com ${this.pernas} pernas!`);
  }
}

var pinguim = {
  pernas: 2,
  __proto__: animal,
};

var cachorro = {
  pernas: 4
};

Object.setPrototypeOf(cachorro, animal);

var aranha = Object.create(animal);
aranha.pernas = 8;

pinguim.andar();
cachorro.andar();
aranha.andar();
