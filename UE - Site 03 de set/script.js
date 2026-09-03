//DOCUMENT  --> PAGINA
//getElementById -> Procura pelo atributo id+ ""

//titulo-filme -> Id que queremos

const elemento = document.getElementById('Filme-principal')

console.log (elemento)
console.log (elemento.tagName)

function selecionarPorId(){ 

const tituloFilme = document.getElementById('titulo-filme')


console.log (tituloFilme)
console.log (tituloFilme.tagName) //H3
console.log (tituloFilme.textContent) //o conteudo do H3
console.log (tituloFilme.id) //titulo-filme

//adcionei uma classe no elemento
tituloFilme.classList.add('elemento-selecionado')
}