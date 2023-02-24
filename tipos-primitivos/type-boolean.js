// tipo boolean

const primeroNumero = 5;
const segundoNumero = 10;
const terceiroNumero = 10;

console.log(primeroNumero === segundoNumero); //false

console.log(segundoNumero === terceiroNumero); //true

const cadastroAtivado = true;
const cadastroDesativado = false;

// Truthy e falsy

const usuarioLogado = true;
const contaPaga = false;

// 0 => false;
// 1 => true;

console.log(0 == false); //true
console.log(1 == true); //true

console.log("" == false); //true

console.log(0 === false); //false
console.log(1 === true); //false

let numero = 1;
let texto = "Amanda";
let minhaVar = null;
let minhaVar2;

console.log(typeof numero); //number
console.log(typeof texto); //string
console.log(typeof minhaVar); //object
console.log(typeof minhaVar2); //undefined

// typeof é uma palavra chave que serve para perguntarmos ao JavaScript qual é o tipo de dado que está sendo guardado nessa variável.

// obs: existe tanto o símbolo de “igual a” (==), quanto o de “idêntico a” (===).
//(===). Ele não só compara os valores dos dois lados da equação, como também verifica se eles são do mesmo tipo.
