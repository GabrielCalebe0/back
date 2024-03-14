const express = require('express')
const app = express()

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
    res.status(204).end()
})

app.listen(3000, function(){
        console.log("API está on")
})

module.exports = app