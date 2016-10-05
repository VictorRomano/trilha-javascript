'use strict';

// criar objeto contas a pagar
// toda conta vai ter calculo de imposto
// valor * taxa
// taxa padrão é 0.1
// criar duas contas, uma a taxa é 0.05 e a outra tem a taxa padrão

var conta = {
  taxa: 0.1,
  calculaImposto: function() {
    return this.taxa * this.valor;
  }
};

var contaDeAgua = {
  valor: 75,
  __proto__: conta
};

var contaDeEnergia = {
  valor: 250,
  taxa: 0.05,
  __proto__: conta
};

console.log(contaDeAgua.calculaImposto());
console.log(contaDeEnergia.calculaImposto());
