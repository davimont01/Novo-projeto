//FOR -> LOOP

// (Variavel de controle; 
// condicao p continuar repetir; 
// oq acontece com a var de controle)


// for (let conta = 0; conta < 10; conta++){
//     console.log(conta)
// }
// console.log("O loop terminou.")

//TABUADA

// const numero = Number(prompt("Tabuada de qual numero?"))

// if(Number.isNaN(numero)){
//     console.log("❌ numero invalido.")
// }
// else{

//  //console.log("TABUADA DO" + numero)   
// console.log('\n TABUADA DO ${numero} \n')
// }
// for(let i = 1; i<=10; i++) 
// {
//     const resultado = numero * i
//     //console.log(numero + "x" + i + "=" + resultado)

//     console.log('${numero} x ${i} = ${resultado}')

// }

// //EXIBA NUMEROS PARES DE 0 A 20


// console.log("Numeros pares de 0 a 20:\n")

// //pares= pares +2 - pula de 2 em 2

// for(let pares=0; pares <=20; pares += 2){
//     console.log(pares)
// }

// //CONTAGEM REGRESSIVA COM FOR

// //conta--
// //conta = conta - 1
// console.log("Lancamento em: \n")
// for (let conta = 10; conta >=1; conta--){
//     console.log("Decolar!")
// }



// for (let i = 1; i <=3; i++){
//     let linha = "";
//     for (let j = 1; j <=3; j++){
//         linha += i;
//     }
//     console.log(linha);
// }

// const andar = 5;

//  for (let i = 1; i <= 5;  i++){
//      let linha = "";
//     for (let j = 0; j < andar - i; j++) {
//         linha += " ";
//     }
//     for (let asterisco = 0; asterisco <(2 * i - 1); asterisco++) {
//         linha += "*";
//     }
//      console.log(linha);
//  }

 let andar = 5;

 for (let number = 1; number <=5; number++){
    let resultado = "";
    for (let linhas = 1; linhas <= number; linhas++){
        resultado += "*"
    } console.log(resultado)
 }

 