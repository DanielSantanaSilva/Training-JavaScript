// parâmetros

function soma(numero1, numero2) {
    return numero1 + numero2
}

console.log(soma(25, 25))
console.log(soma(10, 10))
console.log(soma(5, 5))


// parâmetros x argumentos

function nomeIdade(nome, idade) {
    return `Meu é nome é ${nome} e eu tenho ${idade} anos de idade`
}

console.log(nomeIdade("Daniel", "30")) //Meu é nome é Daniel e eu tenho 30 anos de idade


function multiplica(numero1, numero2) {
    return numero1 * numero2
}

console.log(multiplica(soma(5, 5), soma(5, 5))) //100


//Função sem retorno e sem parâmetro: A função abaixo apenas executa uma instrução, sem a necessidade de disponibilizar o resultado para o restante do código. Neste exemplo escolhemos usar uma string fixa, então não há necessidade de parâmetros.

function cumprimentar() {
    console.log('oi gente!')
}

cumprimentar() //oi, gente!



//Função sem retorno, com parâmetro: similar à anterior, porém agora a função recebe, via parâmetro, o nome da pessoa a ser cumprimentada. Dessa forma é possível reaproveitar a função para que funcione de maneira parecida com o nome de qualquer pessoa (desde que esteja no formato de dado string.

function cumprimentaPessoa(pessoa) {
    console.log(`oi, ${pessoa}!`)
}

cumprimentaPessoa('Amanda') //oi, Amanda!

//No caso abaixo, a função cumprimentar() não precisa receber nenhum parâmetro. Mas logo abaixo vemos que ela está sendo utilizada para montar uma string na função cumprimentarPessoa(nomePessoa). Isso significa que a string ”Oi gente!” deve estar disponível para outras partes do programa - ou seja, deve ser retornada com o uso da palavra-chave return.

function cumprimentar() {
    return 'Oi gente!'
}

function cumprimentarPessoa(nomePessoa) {
    console.log(`${cumprimentar()} Meu nome é ${nomePessoa}`)
}

cumprimentarPessoa("Daniel") //Oi gente! Meu nome é Daniel
