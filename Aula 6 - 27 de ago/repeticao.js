//While (enquanto)
//Permite criar loops q sao executados zerou ou mais vezes

//Enquanto a condicao for TRUE, executa o bloco de codigo

//While(false){
// console.log("Ao infinito e... ALem")
//}

// while(true){
//     console.log("Ao infinito e... Além")
// }

//CONTADOR QUE EXIBIR NA TELA DE 1 A 5

// Contador inicia com o numero 1
// let contador = 1

// //enquanto meu contador for menor ou igual a 5, continue.

// while ( contador <=5 ){
//     console.log("Contagem: " + contador)
//               //(1 + 1 =2)
//     contador = (contador + 1)
// }

//contador = 2

// let tempo = 10

// while(tempo > 0){

//     console.log(tempo)

// //tempo = tempo - 1 Retira 1 do tempo

// tempo-- 

// }
// console.log("COdigo acabou.")

// //VALIDACAO DE SENHA

// const senhaCorreta = "148supersenha"
// let tentativa = ""

// while(tentativa != senhaCorreta){

//     tentativa = prompt("Digite a senha:")

//     if(tentativa ===senhaCorreta){
//         console.log("👌 Senha correta! Acesso liberado.")
//       }
//     else {
//         console.log("🟥 Senha incorreta. Tente novamente")
//       }
//   } 

  //CRIAR UM CODIGO COM WHILE Q SOME NUMEROS ATE PASSAR DE 100

//   let soma = 0;
//   let numero = 0;

//   while (soma <= 100){  
//      numero = Number(prompt("Informe um numero"))
//      soma = soma + numero 
// } 
// console.log("A soma dos numeros chego em: " + soma)

//DO - WHILE PERMITE CRIAR LOOPS QUE SÃO EXECUTADOS UMA OU MAIS VEZES
// WHILE repete infinitas se for true

// let repetir = false
// do{
//     console.log("Só uma vez.")
// }while(repetir)

//     //While vs DO WHILE

//     let num = 10;
    
//     while (x < 5){
//         console.log("Isso NAO vai aparecer.")
//     }
//     do {
//         console.log("Isso vai aparecer pelo menos uma vez")
//     }
//     while (num < 5)


// ADIVINHE O NUMERO

//1 A 10

const numeroSecreto = Math.floor(Math.random()*100) + 1;

let palpite;
let tentativa = 0;

console.log("Advinhe o numero entre 1 e 10.")

do{  
  //  alert(Math.floorr(Math.random())*10 + 1)

palpite = Number(prompt("Seu palpite"));
tentativa++;

if (Number.isNaN(palpite)){ 
    alert("Digite um numero valido")
 }
else if (palpite == numeroSecreto){
    alert("Acertou!!!" + "Em" + tentativa + "tentativas.")
}
else if (palpite < numeroSecreto){
    alert("Muito baixo! Tente um numero maior.")
}
else if (palpite > numeroSecreto){
    alert("Muito alto! Tente um numero menor")
} 
  }
while(palpite != numeroSecreto);
 