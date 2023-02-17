// var

void (function () {
  console.log(mensagem);
})();
var mensagem;

//No caso da palavra-chave var, além da variável ser içada (hoisting) ela é automaticamente inicializada com o valor undefined (caso não seja atribuído nenhum outro valor).

// o impacto que temos quando fazemos esse tipo de uso!

// Às vezes, queremos declarar variáveis que serão utilizadas apenas dentro de um pequeno trecho do nosso código. Ter que lidar com o escopo de função das variáveis declaradas com var (escopo abrangente) pode confundir a cabeça até de programadores mais experientes.

//Sabendo das "complicações" que as variáveis declaradas com var podem causar, o que podemos fazer para evitá-las?
