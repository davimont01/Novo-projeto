let num1 = Number(prompt("Digite o primeiro numero"));
let operacao = prompt("Digite a operacao(+, -, *, %):");
let num2 = Number(prompt("Digite o segundo numero"));
let resultado;

if (num2 === 0){
    alert("Não pode ser dividido por 0")
}else if (operacao === "+"){
    resultado = num1 + num2;
    alert ("resultado: " + resultado)
} else if (operacao === "-"){
    resultado = num1 - num2;
    alert ("resultado: "  + resultado)
} else if (operacao === "*"){
    resultado = num1 * num2;
    alert ("resultado: "  + resultado)
} else if (operacao === "/"){
    resultado = num1 / num2;
    alert ("resultado: " + resultado)
} 