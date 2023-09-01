const express = require("express"); 
const app = express();
const handlebars = require('express-handlebars')
// configurando a conxão com o Banco de Dados. 
const Sequelize = require('sequelize')
const sequelize = new Sequelize('test', 'root', '82523614', {
  host: "localhost",
  dialect: 'mysql'
})


// config
  // Template Engine
    app.engine('handlebars', handlebars({defaultLayout:'main'}))
    app.set('view engine', 'handlebars')

app.listen(8081, function() {
  console.log('Servidor Rodando na url http://localhost:8081')
});
