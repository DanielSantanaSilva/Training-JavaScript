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

// Diferenças entre const e let

//Pode parecer estranho quando utilizamos a palavra variável (ou variable, em inglês) mas ao mesmo tempo o JavaScript moderno tem uma opção, a chamada const, que justamente não pode ser variável — não podemos alterar o valor dela.

//Ao declararmos uma variável como const ela deve obrigatoriamente receber um valor:

const taxaComissao = 0.25;

//Ao declararmos let, ao contrário, podemos apenas declarar a variável, sem atribuir nenhum valor. Além disso, o valor inicial pode ser modificado depois:

let minhaLet;
console.log(minhaLet); //undefined

// atribuindo um valor com TIPO DE DADO STRING
minhaLet = "eu sou um texto";
console.log(minhaLet); // "eu sou um texto"

// reatribuindo, desta vez com dado do TIPO NUMBER
minhaLet = 100;
console.log(minhaLet); //100

// reatribuindo, desta vez com dado do TIPO BOOLEAN
minhaLet = true;
console.log(minhaLet); //true
