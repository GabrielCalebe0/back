const readline = require('readline-sync')
const produtos = []

function criar() {
    const nome = readline.question("Informe o nome do produto: ")
    const preco = readline.question("Informe o preco do produto: ")
    const novo = {nome,preco}
    produtos.push(novo)
}

function listar() {
    produtos.forEach((produto) => 
    console.log(produto.nome, "-", produto.preco))
}

function buscar() {
    const nome = readline.question("Informe o nome do produto: ")
    const buscou = produtos.find((produto) => produto.nome === nome)
    if(buscou) {
        console.log(buscou.nome, "-", buscou.preco)
    } else {
        console.log("Produto não encontrado")
    }
}

function atualizar() {
    const nome = readline.question("Informe o nome do produto: ")
    const buscou = produtos.find((produto) => produto.nome === nome)
    if(buscou) {
        const OutroNome = readline.question("Informe outro nome para o produto: ")
        const OutroPreco = readline.question("Informe outro preco para o produto: ")
        buscou.nome = OutroNome
        buscou.preco = OutroPreco
    
    } else {
        console.log("Produto não encontrado")
    }
}

function remover() {
    const nome = readline.question("Informe o nome do produto: ")
    const posicao = produtos.findIndex((produto) => produto.nome === nome)
    if(posicao >= 0) {
        produtos.splice(posicao, 1)
    } else {
        console.log("Produto não encontrado")
        
    }

}

module.exports = {criar, listar, buscar, atualizar, remover}