//Linguagem interpretada
//Node.Js - Precisa estar instalado ou rodar no navegador
//Tipagem fraca - Não precisa definir variavel

// let minhaVariavel = 10;
// minhaVariavel = "Olá mundo!";
// minhaVariavel = true

// let numero = 10;
// let texto = "20";
// let resultado = numero + texto;
// console.log(resultado);

// console.log(number("123"));
// console.log(parseInt("10.9"));
// console.log(parseFloat("10.9"));
// console.log(String("123"));
// console.log(Boolean("0"));
// console.log(Boolean("1"));
// console.log(Boolean(""));
// console.log(Boolean("oi"));

// //Condicionais (if, else, operadores logicos)
// const nome = true;
// var
// let nome2 = any

// const chovendo = true;
// const solApareceu = false;

// if (condition) {

// }

//const idade = 20

//if (idade >=20) {
 //   console.log("Maior de idade!")
//}

//const idade = Number(prompt("Digite sua idade:"));

 //if (idade >= 18) {
   // console.log("Voce pode tirar carteira de motorista");
   //  } else {
    //    console.log("Voce ainda nao pode dirigir.");
    // }

   //  const idade = 20;
    // const temDocumento = true;
     //const estaLista = true;

    //  if (idade >= 18 && temDocumento && estaLista) {

    //  } else {

    //  }

//     const temDinheiro = false;
//     const temCartao = true;
//     const temPix = false;

//  if (temDinheiro || temCartao || temPix) {
//     console.log("Pode pagar")
//  } else { 
//     console.log("Nao pode pagar")
//  }

//  const usuario = "admin"
//  const senha = "1234"

//  const senhaCorreta = (senha ==="1234");
// const ehAdmin = (usuario === "admin");
// const ehGerente = (usuario === "gerente");

// if (ehAdmin && senhaCorreta || ehGerente && senhaCorreta) {
//     console.log("Acesso Liberado");
// } else {
//     console.log("Acesso negado!");
// } 

// if ((ehAdmin || ehGerente) && senhaCorreta) {

// } else {

// }

// const usuario = prompt("Usuario:");
// const senha = prompt("Senha:");

// const acessoAdmin = (usuario === "admin" && senha === "1234");
// const acessoUser = (usuario === "user" && senha === "senha1234");

// if (acessoAdmin || acessoUser) {
//     console.log("Acesso liberado!")
//     } else {
//         console.log("Acesso negado!")
//     }


// const nota = 75;
// if (nota >= 80) {
//     console.log("Aprovado!")
// } else if (nota >=60) {
//     console.log("Recuperção!");
// } else {
//     console.log("Reprovado");
// }

// Exercício — Classificação da Temperatura

// Crie um programa em JavaScript que solicite ao usuário uma temperatura em graus Celsius (°C) e classifique a temperatura de acordo com as faixas abaixo:

// Temperatura	Classificação
// Abaixo de 0°C	🥶 Muito frio
// De 0°C a 15°C	❄️ Frio
// De 16°C a 25°C	😊 Agradável
// De 26°C a 35°C	🌡️ Quente
// Acima de 35°C	🔥 Muito quente

const temp = prompt("Qual a temperatura?");
if (temp <= 0) {
    console.log("Muito frio")
} else if (temp >= 0 && temp <=15) {
    console.log("Frio")
    } else if (temp >=16 && temp <=25) {
        console.log("Agradavel")
        } else if (temp >=26 && temp >=35) {
            console.log("Quente")
        } else if (temp >35)
            console.log ("Muito quente") 

