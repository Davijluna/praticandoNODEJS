// Carregando módulos
  const express = require('express')
  const handlebars = require('express-handlebars')
  const bodyParser = require('body-parser')
  const app = express()
  // const mongoose = require('mongoose')

// Configurações
  // Body Parser
    app.use(bodyParser.urlencoded({extended: true}))
    app.use(bodyParser.json())
  
// Rotas

// Outros
const PORT = 8081
app.listen(PORT, () => {
  console.log("Servidor rodando! ")
})