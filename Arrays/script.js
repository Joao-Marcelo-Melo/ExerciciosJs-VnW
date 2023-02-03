// 01- Crie um array que receba 5 itens e exiba no console:

const array = ["Item1" , "Item2", "Item3", "Item4", "Item5"]
console.log(array)

// 02- Utilize um método para adicionar um nome ao inicio do array:

array.unshift("item0")
console.log(array)

// 03- Utilize um método para remover o último nome do array:

array.pop()
console.log(array)

// 04- Utilize um método para adicionar dois nomes ao fim do array:

array.pop(2)
console.log(array)

// 05- Utilize um método para remover o primeiro nome do array:

array.shift()
console.log(array)

// 06 Utilize um método para organizar em ordem crescente o seguinte array:

let numbers = [7,5,6,3,8,9,2,1,4]

numbers.sort()
console.log(numbers)

// 07 Crie um objeto que receba ao menos três propriedades sobre você:

let info = {
    nome: "joão Marcelo",
    idade: 18,
    cidade: "Salvador"
}

console.log(info)

// 08 Adicione uma nova propriedade sem alterar seu objeto inicial:

info.comida = "lasanha"
console.log(info)

// 09 Remova uma propriedade desse objeto:

delete info.comida
console.log(info)

// 10-Mostre no console todas as propriedades desse objeto:

console.log(info)

// 11-Crie um array  chamado "cadastro" contendo ao menos 5 objetos. 
// Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos. 
// Na propriedade amigos, adicione ao menos 4 itens:

const cadastro =  [
    {nome: "Joãozinho" , idade: 18, telefone: 12345678, amigos: ["amigo1", "amigo2", "amigo3", "amigo4"]},
    {nome: "Felipinho" , idade: 18, telefone: 12345678, amigos: ["amigo1", "amigo2", "amigo3", "amigo4"]},
    {nome: "Pedrinho" , idade: 18, telefone: 12345678, amigos: ["amigo1", "amigo2", "amigo3", "amigo4"]},
    {nome: "Tiaguinho" , idade: 18, telefone: 12345678, amigos: ["amigo1", "amigo2", "amigo3", "amigo4"]}
]

console.log(cadastro)

// 12- Mostre no console o nome de um amigo de cada lista:

console.log(cadastro[0].amigos[0])
console.log(cadastro[0].amigos[1])
console.log(cadastro[0].amigos[2])
console.log(cadastro[0].amigos[3])





