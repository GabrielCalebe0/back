const express = require('express')
const app = express()
app.listen(300, function(){
    console.log("A API está on")
})

module.exports = app