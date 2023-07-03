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

app.listen(8081, function() {
  console.log('Servidor Rodando na url http://localhost:8081')
});
//  iniciando aula de node manutenção de rotas.
