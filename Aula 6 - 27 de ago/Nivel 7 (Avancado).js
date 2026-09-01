const numero = Number(prompt("Digite um número inteiro positivo:"));

let soma = 0;

while (numero > 0){
    soma += numero % 10;
    numero = Math.floor (numero/10);
}

console.log(soma);