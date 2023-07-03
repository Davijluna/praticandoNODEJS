const express = require("express"); 
// import express from "express";
const app = express();

app.get("/", function(req, res) {
  res.send("Seja bem-vindo ao meu app !");
});

app.get("/sobre", function(req, res) {
  res.send("Minha pagina sobre");
});

app.get("/blog", function(req, res) {
  res.send("Bem-vindo ao meu blog!");
});
// quando criamos o parâmetro obrigatóriamente precisa passar o parâmetro.
// o send só pode coloca-lo uma vez se não ele dá erro.
app.get("/ola/:nome/:cargo/:cor", function(req, res) {
  res.send("<h1>Olâ "+ req.params.nome + "</h1>" + "<h2>"+" você é um "+ req.params.cargo+ "</h2>"+ "<h3>" + " sua cor é "+ req.params.cor+"</h3>")
})

app.listen(8081, function() {
  console.log('Servidor Rodando na url http://localhost:8081')
});
//  iniciando aula de node manutenção de rotas utilizando parametros
