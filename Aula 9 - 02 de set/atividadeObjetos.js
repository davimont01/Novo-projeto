const pedido = [
 {nome: "Hamburguer", preco: 44.89, quantidade: 1},
 {nome: "Batata", preco: 15.99, quantidade: 2},
 {nome: "Refrigerante", preco: 10, quantidade: 1},
 {nome: "Sorvete", preco: 3.99, quantidade: 2}
];

let valorTotalPedido = 0;
//1. Inicialize o maior valor com 0 para permitir comparações numéricas
let maiorValorItem = 0;  
// 2. Declare a variável do nome do maior item antes do loop
let itemMaiorValor = " Item de maior valor"; 

console.log("Resumo do pedido");

for (const item of pedido) {
    const valorTotalItem = item.preco * item.quantidade;

    valorTotalPedido += valorTotalItem;

    console.log(`${item.nome} * ${item.quantidade} - R$ ${valorTotalItem.toFixed(2)}`);

    // 3. A comparação agora funciona porque ambos são números
    if (valorTotalItem > maiorValorItem) {
        maiorValorItem = valorTotalItem;
        itemMaiorValor = item.nome;
    }
}

console.log("-------");
console.log(`Valor Total do Pedido: R$ ${valorTotalPedido.toFixed(2)}`);
console.log(`Item com maior valor acumulado: ${itemMaiorValor} R$ ${maiorValorItem.toFixed(2)}`);
