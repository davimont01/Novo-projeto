// let entrada = prompt ("Digite um numero inteiro positivo");

// let invertido = entrada.split('').reverse().join('');

// alert("Número invertido: " + invertido);

let numero = NUmber(prompt("Digite um numero."));
let invertido = 0;

while (numero < 0){
    let digito = numero % 10;
    invertido = invertido * 10 + digito;
    numero = Math.floor(numero / 10);
}
console.log("O numero invertido e: " + invertido);

