// tipo string

const texto1 = "Olá mundo";
const texto2 = "Olá mundo";
const senha = "minha senha 1234";
const stringDeNumeros = "12345678";

const citacao = "O Daniel disse 'Welcome!'";

console.log(citacao);

// concatenação (+)

const nome = "Daniel";
const sobrenome = " Santana Silva";
console.log(nome + sobrenome);

// template string ou templete literal

console.log(`Meu nome é: ${nome} e meu sobrenome é:${sobrenome}`);

console.log(`Meu nome é completo é: ${nome}${sobrenome}`);

// character encoding - Unicode tem códigos específicos para “cifrar” e “decifrar” caracteres de mais de 150 idiomas antigos e modernos

const checkMark = "\u2705";
console.log(checkMark);

// trabalhando com strings

const cidade = "São Paulo";
const cidadeAlternativa = "são paulo";

console.log(cidade === cidadeAlternativa); //false

// a function toLowerCase() que converte todos os caracteres da string informada (no caso, cidade) para letras minúsculas (se forem algarismos, nada é convertido).

console.log(cidade.toLowerCase() === cidadeAlternativa); //true

// propriedade length pode ser utilizada para sabermos quantos caracteres uma string contém:

const password = "danieldesenvolvedor";
console.log(password.length); //19 caracteres

// lista completa de métodos de string do MDN: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String#métodos
