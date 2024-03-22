const express = require('express')
const router = express.Router()
const produtosController = require('../controllers/controller_produto')

router.get('/', produtosController.ListarTodos)
router.get('/:produtoId', produtosController.BuscarId, produtosController.Exibir)
router.post('/', produtosController.ValidarDados, produtosController.Criar)
router.put('/:produtoId', produtosController.BuscarId, produtosController.ValidarDados, produtosController.Atualizar)
router.delete('/:produtoId',produtosController.BuscarId, produtosController.Remover)

module.exports = router