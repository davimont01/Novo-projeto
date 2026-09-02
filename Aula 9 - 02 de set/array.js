//OBJETO - Sao como "fichas" com informacoes
// - Cada informacao tem um nome (CHAVE) e um VALOR.

//PESSOA - (NOme, Email, Genero, CPF)

const pessoa = {
    Nome: "Davi",
    Idade: "25",
    Email: "email@teste.com",
    Genero: "M",
    CPF: "499.055.265.97"
} 
console.log(pessoa) //ACESSAR TODO O OBJETO
console.log(pessoa.Nome) // Davi
console.log(pessoa["idade"]) //25

// FOR IN

 for (const chave in pessoa){

    //chave eh o NOME da propriedade.
    //objeto [chave] eh o valor

    console.log(pessoa[chave])
    //pra cada vez q percorrer, ele vai pegar a 
    //CHAVE atual e retornar o VALOR q a chave representa
 }

 // Objeto aluno q guarda os dados de nome, matricula, curso e nota.

 const aluno = {
       //sempre chave e valor
       nome: "Erick",
       matriculas: "1228014094",
       curso: "JS",
       nota: "9.5"
 } 
 console.log("Dados do aluno:\n")

 for ( const chave in aluno){

    const valor = aluno[chave]
    console.log("chave:" + chave + "valor" + valor)
 }

 //LISTA DE PRODUTOS.

 //Info do produto, preco, quantidade
 //cada array eh um objeto
//Array de objetos

 const carrinho = [

    {produto: "camiseta", preco: 51.20, quantidade: 2},
    {produto: "calca Jeans", preco: 150, quantidade: 1},
    {produto:"Tenis", preco: 300, quantidade: 2}
]

//For.. in --> Objetos | Retorna objetos / indice
//For.. of --> Array,Strings | Retorna valores

for (const itemDoMercado of carrinho){
    //Retornar apenas o nome do produto e preco.
    console.log(itemDoMercado.produto)
    console.log(itemDoMercado.preco)
}