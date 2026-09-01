let num=Number(prompt("Digite um numero"))
let result = 1

if(num < 0){
    console.log("Valor invalido")
    alert("Valor invalido")
} else
    for (let i = 1; i <= num; i++){
        result = result * i
        console.log(result)
    }