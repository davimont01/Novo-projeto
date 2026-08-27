const num1 = Number(prompt("Digite o primeiro numero"));
const num2 = Number(prompt("Digite o segundoo numero"));
const num3 = Number(prompt("Digite o terceiro numero"));

if (num1 > num2 && num1 > num3){
    alert(num1 + "é o maior")
} else if (num2 > num1 && num2 > num3){
    alert(num2 + "é o maior")
} else if (num3 > num1 && num3 > num2){
    alert(num3 + "é o maior")
}
