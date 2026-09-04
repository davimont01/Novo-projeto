
let numero = Number(prompt("Digite um número inteiro positivo:"));

if (isNaN(numero) || numero <= 0) {
    console.log("Por favor, insira um número inteiro positivo válido.");
} else {
    let soma = 0;

    for (let i = 1; i <= numero; i++) {
        soma += i;
    }
    console.log(`Saída: ${soma}`);
}

