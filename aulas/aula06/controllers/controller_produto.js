const produtos = []

function ListarTodos(req, res){
    res.json(produtos)
}

function BuscarId(req, res, next){
    const{produtoId} = req.params
    const produtoEncontrado = produtos.find(item => item.id == produtoId)

    if(produtoEncontrado){
        req.produtoEncontrado = produtoEncontrado
        next()
    }else{
        res.status(404).json({msg: 'Produto não encontrado'})
    }
}

function Exibir(req, res){
    const {produtoEncontrado} = req
    res.json(produtoEncontrado)
}

function ValidarDados(req, res, next){
    const {nome, preco} = req.body
    if(nome && preco){
        next()
    }else{
        res.status(422).json({msg: "Nome e preco são obrigatarios"})
    }
}

function Criar(req, res){
    const {nome, preco} = req.body
    const novoProduto = {id: produtos.length + 1, nome, preco}
        produtos.push(novoProduto)
        res.status(201).json(novoProduto)
}

function Atualizar(req, res){
    const {produtoEncontrado} = req 
        produtoEncontrado.nome = nome
        produtoEncontrado.preco = preco
        res.status.json(produtoEncontrado)
    }

function Remover(req, res){
    const{produtoId} = req.params
    const posicao = produtos.findIndex(item => item.id == produtoId)
     produtos.splice(posicao, 1)
     res.status(204).end()
}

module.exports = {ListarTodos, BuscarId, Exibir, ValidarDados, Criar, Atualizar, Remover}