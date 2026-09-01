

let numero = Number(prompt("Qual é o número?"));

if (Number.isNaN(numero)) {
    console.log("Digite apenas números válidos.");
} else {
    console.log(`Tabuada do ${numero}:\n`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}


    
  