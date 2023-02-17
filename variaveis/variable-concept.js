var exibeMensagem = function () {
  mensagem = "Daniel";
  console.log(mensagem);
  var mensagem;
};

exibeMensagem(); //Daniel

//Como é possível usar a variável mensagem antes mesmo de declará-la? Será que o escopo é garantido apenas dentro de onde a variável foi criada?

// Hoisting

//Em JavaScript, toda variável é “elevada/içada” (hoisting) até o topo do seu contexto de execução. Esse mecanismo move as variáveis para o topo do seu escopo antes da execução do código.
//No nosso exemplo acima, como a variável (mensagem) está dentro de uma function, a declaração da mesma é elevada (hoisting) para o topo do seu contexto, ou seja, para o topo da function.
//É por esse mesmo motivo que “é possível usar uma variável antes dela ter sido declarada”: em tempo de execução a variável será elevada (hoisting) e tudo funcionará corretamente.

//Conclusão

//Graças ao hoisting, variáveis declaradas com a palavra-chave var podem ser utilizadas mesmo antes de sua declaração.

//Por outro lado, as variáveis criadas com let só podem ser utilizadas após sua declaração, pois, apesar de serem elevadas, elas não são inicializadas.

//Além das variáveis declaradas com var temos a possibilidade de usar constantes por meio da palavra-chave const ou utilizar variáveis com escopo de bloco através da let.
