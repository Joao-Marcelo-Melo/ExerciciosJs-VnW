//1 - crie uma função que exiba uma mensagem no console:

function ExibirMensagem() {
    console.log("Today, Smoking Is Going to Save Lives")
}

ExibirMensagem()

//2 - crie uma função que receba o seu nome como (parâmetro) e exiba no console:

function MostrarNome(Nome) {
    console.log(`Meu nome é ${Nome}`)
}

MostrarNome("João Marcelo")

//3 - crie uma função que receba nome, idade, e um estilo musical preferido (parâmetros) e exiba no console:

function MostrarInfos(Nome, Idade, EstiloMusical) {
    console.log(`Meu nome é ${Nome}, minha idade é ${Idade}, meu estilo musical é ${EstiloMusical}`)
}

MostrarInfos("João Marcelo", 18, "MPB")

//4 - crie uma função que receba um filme, uma música (parâmetros) e exiba no console:

function MostrarInfos2(Série, Música) {
    console.log(`Meu série preferido é ${Série}, minha música preferida é ${Música}`)
}

MostrarInfos2("The-Office","Um minuto para o fim do mundo")

//5 - crie uma função que retorne o triplo do número recebido no parâmetro da função:

function Triplo(n1) {
    return n1 * 3
}

console.log(Triplo(5))

//6 - crie uma função que  verifique se uma  variável é true ou false:

let valor = true

function Verificar() {
    if(valor == true) {
        console.log("É VERDADEIRA!")
    } else {
        console.log("É FALSA!")
    }
}

Verificar()