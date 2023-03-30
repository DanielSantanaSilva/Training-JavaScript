// arrow function


// função normal
function apresentar(nome) {
    return `Meu nome é ${nome}`
}

console.log(apresentar("Daniel")) //Daniel


//arrow function
const apresentarArrow = nome => `Meu nome é ${nome}`
console.log(apresentarArrow("Amanda")) //Amanda


const soma = (num1, num2) => num1 + num2;
console.log(soma(3, 2)) //5


// arrow function com mais de uma linha de instrução

const somaNumerosPequenos = (num1, num2) => {
    if (num1 > 10 || num2 > 10) {
        return "somente numeros de 1 a 9"
    } else {
        return num1 + num2
    }
}

console.log(somaNumerosPequenos(3, 7))



// Referencias MDN de Hoisting:https: developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions/Arrow_functions
