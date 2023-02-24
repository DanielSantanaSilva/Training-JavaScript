// converções

// String

let telefone = 12341234;
console.log("O telefone é " + String(telefone)); //O telefone é 12341234

// teremos a conversão do número 12341234 para uma string “12341234” e assim poderemos fazer a concatenação entre as strings

let numeroDeTelefone = 12341234;
console.log("O telefone é " + numeroDeTelefone.toString()); //O telefone é 12341234

// o .toString() é uma outra forma para  fazer essa conversão, que é mais parecida com outras linguagens de programação.

let usuarioConectado = false;
console.log(String(usuarioConectado)); //false

// teremos a conversão da booleana para string, nesse caso teremos uma string “false”.

usuarioConectado = true;
console.log(String(usuarioConectado)); //true

// agora teremos uma string “true”.

// Number

let largura = "10";
let altura = "5";
console.log(Number(largura) * Number(altura)); //50

// teremos a conversão de String para números, possibilitando a realização da multiplicação

let largura1 = "10";
let altura1 = "5";
console.log(+largura1 * +altura1); //50

// teremos a conversão de String para números realizado usando o + antes das variáveis

let usuario_Conectado = false;
console.log(Number(usuario_Conectado)); //0

// teremos a conversão da booleana para número, sendo que false (falso) retorna o número 0.

usuario_Conectado = true;
console.log(Number(usuario_Conectado)); //1

// agora teremos a conversão de true (verdadeiro) para o número 1.
