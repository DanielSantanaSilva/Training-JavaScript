// errors stacktrace

const numero;
// SyntaxError: Missing initializer in const declaration
// Erro de sintaxe:Inicializador ausente na declaração const

//correção: const numero = 0; 


const nome = "Daniel";
console.log(nome
// SyntaxError: missing ) after argument list 
// Erro de sintaxe: faltando ) depois da lista de argumentos

//correção:console.log(nome)



console.log(soma);
//ReferenceError: soma is not defined

/*
at Object.<anonymous> (c:\Users\PC GAMER\Desktop\Lina Open X\Estudos\Alura\Training JavaScript\erros\tempCodeRunnerFile.js:1:13)
at Module._compile (node:internal/modules/cjs/loader:1105:14)
at Object.Module._extensions..js (node:internal/modules/cjs/loader:1159:10)
at Module.load (node:internal/modules/cjs/loader:981:32)
at Function.Module._load (node:internal/modules/cjs/loader:822:12)
at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:77:12)
at node:internal/main/run_main_module:17:47
*/



// A lista que está sendo passada para nós, no terminal, é chamada stacktrace, onde o JavaScript nos mostra todo o caminho que nosso código executou e todos os arquivos internos da ferramenta, da biblioteca, da linguagem de programação, que estão sendo usados para fazer com que nosso código funcione. 


//O JavaScript começa dividindo cada tipo de erro possível em algumas categorias:

//RangeError: Quando o código recebe um dado do tipo certo, porém não dentro do formato aceitável. Por exemplo, um processamento que só pode ser feito com números inteiros maiores ou iguais a zero, mas recebe -1.

//ReferenceError: Normalmente ocorre quando o código tenta acessar algo que não existe, como uma variável que não foi definida; muitas vezes é causado por erros de digitação ou confusão nos nomes utilizados, mas também pode indicar um erro no programa.

//SyntaxError: Na maior parte dos casos ocorre quando há erros no programa e o JavaScript não consegue executá-lo. Os erros podem ser métodos ou propriedades escritos ou utilizados de forma incorreta, por exemplo, operadores ou sinais gráficos com elementos a menos, como esquecer de fechar chaves ou colchetes.

//TypeError: Indica que o código esperava receber um dado de um determinado tipo, tal qual uma string de texto, mas recebeu outro, como um número, booleano ou null.



//Documentação Node.js de erros:https://nodejs.org/api/errors.html#errors_errors