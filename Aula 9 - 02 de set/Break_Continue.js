//BREAK --> Parar de percorrer a lista

const numeros = [5,12,8,3,19,7,25]
const procurado = 19

for (const num of numeros){
    console.log("Numero analisado: " + num)
    if( num === procurado){
        console.log("Encontrado")
        break; //para o loop imediatamente
    }
}

console.log("Loop terminou")

//CONTINUE --> Pular a etapa atual

console.log("NUmeros impares de 1 a 10")
for (let numero = 1; numero <= 10; numero++){
    // numero %2 == 0 SE O RESTO da divisao por 2 eh igual a zero
    if(numero %2 == 0){

        continue; //PULA todo o restante do codigo
    }
    console.log(numero)
}

const nomes = ["Guilheme", "Erick", "Rita", "MJ"]
nomes.reverse() //Inverte aordem dos elementos
console.log (nomes) //Reverse eh destrutivo, ele modifica o array original
