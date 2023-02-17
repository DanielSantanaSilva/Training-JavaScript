//let

//Através da palavra-chave let podemos declarar variáveis com escopo de bloco. Vamos ver:

var exibeMensagem = function () {
  if (true) {
    var escopoFuncao = "Daniel";
    let escopoBloco = "Amanda";

    console.log(escopoBloco); // Amanda
  }
  console.log(escopoFuncao); // Daniel
  console.log(escopoBloco); //ReferenceError: exibeMensagem is not defined
};

exibeMensagem(); //// Imprime 'Amanda', 'Daniel' e dá um erro de referência

// quando tentamos acessar uma variável que foi declarada através da palavra-chave let fora do seu escopo, o erro Uncaught ReferenceError: escopoBloco is not defined foi apresentado.

//Portanto, podemos usar tranquilamente o let, pois o escopo de bloco estará garantido.
