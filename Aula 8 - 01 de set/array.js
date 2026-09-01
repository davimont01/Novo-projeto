//ARRAY
//UM ARRAY EH UM TIPO DE DSDOS Q SERVE PRA ARMAZENAR VALOR 
// SEQUENCIALMENTE EM FORMA DE LISTA

//ITENS COMECAM DO NUMERO 0

const numeros = [ 1,2,3,4,5 ]
const nomes = ["Ana", "Caio", "Lucas"]

//na minha lista de numeros 
//quero a posicao 0
console.log(numeros[0])
console.log(nomes[0])


//LENGTH
//eH UMA PROP P OBTER O COMPRIMENTO DE UMA ARRAY
console.log(nomes.lenght)

//VAMOS PERCORRER TODA A LISTA
//E COLOCAR NO CONSOLE CADA ITEM

for (let i = 0; i < nomes.length; i++){
    console.log(nomes[i])
}

//FOR OF
const frutas = ["Maca", "Laranja", "Uva", "Erick"]

for (const fruta of frutas){
    console.log(fruta)
}

//FACA A SOMA DE TODOS NUMEROS DE UM ARRAY

const listaNumeros = [10,25,8,42,15,7]
let soma = 0;

//of listaNUmeros - Percorra toda a lista

for (const numero of listaNumeros){
    soma += numero
    //mesmo q soma = soma + numero
}

console.log("Numeros ", listaNumeros)
console.log("Soma ", soma)

const notas = [7.5, 9.0, 6.5, 8.8, 10.0, 5.5];
//UTILIZE O FOR OF E RETORNE A MAIOR NOTA

let maiorNota = ListaNota[0]

for (const nota of ListaNota){
if(nota > maiorNota)
    maiorNota = nota
}
console.log("Maior nota:" + maiorNota)