const express = require("express"); 
const app = express();
const handlebars = require('express-handlebars')

// config
  // Template Engine
    app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}))
    app.set('view engine', 'handlebars')
  // Conexão com o banco de dados MySql
  // configurando a conxão com o Banco de Dados. 
const Sequelize = require('sequelize')
const sequelize = new Sequelize('test', 'root', '82523614', {
  host: "localhost",
  dialect: 'mysql'
})

// Rotas 
  app.get('/cad', function(req, res){
    // res.send('ROTA DE CADASTRO DE POST')
    res.render('formulario')
  })

app.listen(8081, function() {
  console.log('Servidor Rodando na url http://localhost:8081')
});
