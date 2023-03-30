// funções

////As funções ajudam muito no desenvolvimento de um código, pois colaboram para a separação de trechos de código com funções específicas, tornando-o menor e mais legível


// 1) declara a função.
function imprimeTexto(texto) {
    console.log(texto)
}


// 2) executa a função 1 ou + vezes.
imprimeTexto("Hello World"); //Hello World
imprimeTexto("Olá Mundo"); //Olá Mundo



function soma() {
    return 2 + 2;
}

console.log(soma()) //4


imprimeTexto(soma())
// função dentro de função

