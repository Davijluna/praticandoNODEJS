const express = require("express"); 
// import express from "express";
const app = express();
const handlebars = require('express-handlebars')
const Sequelize = require('sequelize')

// config
  // Template Engine
    app.engine('handlebars', handlebars({defaltLayout: 'main'}))
    app.set('view engine', 'handlebars')
    // Conexão com o banco de dados MySql
    const sequelize = new Sequelize('test', 'root', '82523614', {
      host:"localhost",
      dialect: 'mysql'
    })

app.listen(8081, function() {
  console.log('Servidor Rodando na url http://localhost:8081')
});
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/html/index.html");
});

app.get("/sobre", function(req, res) {
  res.sendFile(__dirname +"/html/sobre.html");
});

app.get("/blog", function(req, res) {
  res.send("Bem-vindo ao meu blog!");
});
// quando criamos o parâmetro obrigatóriamente precisa passar o parâmetro.
// o send só pode coloca-lo uma vez se não ele dá erro.
// instalado o nodemon.
// como exibir arquivos HTML nas rotas  -> como reinderizar os arquivos HTML em nossas rotas.
app.get("/ola/:nome/:cargo/:cor", function(req, res) {
  res.send("<h1>Olâ "+ req.params.nome + "</h1>" + "<h2>"+" você é um grande  "+ req.params.cargo+ "</h2>"+ "<h3>" + " sua cor é "+ req.params.cor+"</h3>")
})

//  iniciando aula de node manutenção de rotas utilizando parametros
