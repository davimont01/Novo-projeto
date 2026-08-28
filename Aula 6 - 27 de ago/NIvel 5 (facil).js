const numeroSecreto = Math.floor(Math.random()*100) + 1;

let palpite;
let tentativa = 0;

console.log("Advinhe o numero entre 1 e 10.")

do{ 
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
 