// tipo number

const meuNumero = 7;

const primeiroNumero = 1;
const segundoNumero = 2;

const operacaoMatematica = primeiroNumero + segundoNumero;

console.log(operacaoMatematica);
console.log(operacaoMatematica + meuNumero);

//ponto flutuante

const numeroPontoFlutuante = 2.5;
const PontoFlutuanteSemZero = 0.5;

const novaOpercao = numeroPontoFlutuante / PontoFlutuanteSemZero;

console.log(novaOpercao);

// NaN => Not a Number (Não é um numero)

const nome = "Daniel";
console.log(nome * meuNumero);

//Dica: podemos utilizar o número PI através do código Math.PI.

const PI = Math.PI;
console.log(PI);

//Divisão por zero não é um erro em JavaScript: ele simplesmente retorna “Infinity”. No entanto, há uma

var a = 10;
var b = 0;
console.log(a / b); // Infinity

//exceção: zero dividido por zero não tem um valor bem definido e o resultado dessa operação é o valor especial não numérico NaN.

var a = 0;
var b = 0;
console.log(a / b); // NaN

// lista completa de métodos de number do MDN: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Number#métodos
