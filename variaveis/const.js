// const

void (function () {
  const mensagem = "Daniel";
  console.log(mensagem); // Daniel
  mensagem = "Amanda";
})();

//O código acima gera um Uncaught TypeError: Assignment to constant variable, pois o comportamento fundamental de uma constante é que uma vez atribuído um valor a ela, este não pode ser alterado.

//Assim como as variáveis declaradas com a palavra-chave let, constantes também tem escopo de bloco.

//Além disso, constantes devem ser inicializadas obrigatoriamente no momento de sua declaração.
