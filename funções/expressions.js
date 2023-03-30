// expressões

function minhaFuncao(param) {
    //bloco de código
}

// expressão de função

const soma = function (num1, num2) {
    return num1 + num2
}
console.log(soma(2, 2)) //4



// diferança principal

console.log(apresentar())

function apresentar() {
    return "Olá"
}


console.log(novaSoma(2, 2)) //ReferenceError: Cannot access 'novaSoma' before initialization

const novaSoma = function (num1, num2) {
    return num1 + num2
}


//Ao tentar executar o código acima, você receberá um erro de "ReferenceError: novaSoma is not defined". Isso ocorre porque a declaração da função novaSoma é uma declaração de variável e, portanto, é afetada pelo comportamento de hoisting do JavaScript. O JavaScript move as declarações de variáveis para o topo do escopo, mas não as inicializa com valores. Portanto, quando o console.log tenta chamar a função novaSoma, ela ainda não foi declarada e não está disponível para uso.

// Hoisting é o comportamento em JavaScript em que as declarações de variáveis e funções são movidas para o topo do seu escopo antes da execução do código. Isso significa que você pode usar essas variáveis e funções antes de serem declaradas no código. No entanto, apenas as declarações são movidas para o topo, e não as atribuições de valores. Portanto, se você usar uma variável antes de atribuir um valor a ela, ela terá o valor "undefined".

//Referencias MDN de Hoisting: https://developer.mozilla.org/pt-BR/docs/Glossary/Hoisting