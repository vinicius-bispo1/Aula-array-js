console.log("Boa noite!!")

// ARRAY
// Um array é uma lista que armazena vários valores dentro de uma única variável.

let nome = "vini"
let numero = [1,3,5,10,55,9]
// índice       0        1         2        3
let frutas = ["Maçã", "Banana","Laranja","Uva"]


                //   0            1          2          3
let carrinho = ["Parafusadeira","Smart tv","Celular","Café"]

// E para imprimirmos no console um item específico do nosso array, escrevemos no console da seguinte maneira:
console.log(carrinho[3])

// MÉTODOS DE ARRAY
// São ferramentas que JavaScript oferece para manipular e trabalhar com arrays de forma mais fácil e eficiente.

//.unshift - Para acrescentar mais um valor no INÍCIO
series.unshift("The Office","Flash")

//.push - Para acrescentar mais um valor no FINAL
series.push("Vinkings","The 100")
console.log(series)

//.shift() - remove o PRIMEIRO valor da lista
series.shift()

//.pop() - remove o ÚLTIMO valor da lista
series.pop()
console.log(series)

let numeros = [2,5,9,3,1,4,6,8,7,20,50,100,66]
//.sort() - Organiza os elementos em ordem crescente númerica ou alfabética
numeros.sort()
console.log(numeros)
//.reverse() - Organiza os elementos em ordem inversa
series.reverse()
console.log(series)
                //   0                        1               2          3             4
let series = ["game of thrones", "Todo mundo odeia o cris","Chaves",   "breaking bad","The Boys"]
// splice() em JavaScript permite adicionar, remover ou substituir elementos em um array. Ele altera o array original e retorna os elementos removidos (caso existam).
series.splice(150, 0, "Lost")
console.log(series)

/*.slice() - Pega os itens de uma array, criando uma nova array sem desmontar a array original.*/
// let novaSerie = series.slice(1, 4)
// console.log(novaSerie)

console.log(series.length)