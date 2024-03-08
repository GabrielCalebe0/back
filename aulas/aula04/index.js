const express = require('express')
const app = express()

app.use(express.json())

app.use(function(req, res, next){
    console.log("data: ", new Date())
    console.log(req.url)
    console.log(req.method)
    console.log(req.headers)
    console.log(req.params)
    console.log(req.body)
    next()
})

app.get("/", function(req, res){
    res.send("olá")
})

app.post("/", function(req, res){
    res.status(201).send("Criado com sucesso")
    console.log(req.body)
})

app.put("/", function(req, res){
    res.json({status: "200", message: "sucesso"})
})

app.delete("/", function(req, res){
    throw new Exception()
})

app.use(function(error, req, res, next){
    res.status(400).send("Deu ruim!")
})

app.listen(3000, function(){
    console.log("API está on")

})

module.exports = app