const express = require("express");
const app = express();j

app.listen(8081, function(){
  console.log("Servidor Rodando na url http://localhost:8081");
  })


// comentando tudo para um novo ponto de vista na aula.


// // conectando a um banco de dados com sequelize
// const Sequelize = require('sequelize')
// const sequelize = new Sequelize('test', 'root', '82523614', {
//   host:"localhost",
//   dialect: 'mysql'
// })

// // como criar um model >> ele irá criar tabelas sem precisar digitar comandos de sql.

// // 
// const Postagem = sequelize.define('postagens', {
//   titulo: {
//     type: Sequelize.STRING
//   },
//   conteudo: {
//     type: Sequelize.TEXT
//   }
// })

// // INICIANDO PARA AULA DE HOJE.

// // Postagem.create({
// //   titulo: "Um titulo qualquer",
// //   conteudo: "Qualquer coisa"
// // })

// const Usuario = sequelize.define('usuarios', {
//   nome: {
//     type: Sequelize.STRING
//   },
//   sobrenome: {
//     type: Sequelize.STRING
//   },
//   idade: {
//     type: Sequelize.INTEGER
//   },
//   email: {
//     type: Sequelize.STRING
//   }
// })

// Usuario.create({
//   nome: "Davi",
//   sobrenome: "Jesus",
//   idade: 34,
//   email: "email@test.com"
// })

// Usuario.sync({force: true})

// PAUSA PARA RESOLVER PENDÊNCIAS.

// then() -> caso sucesso.
// catch() -> caso erro.

// sequelize.authenticate().then(function() {
//   console.log("Conectado com sucesso!")
// }).catch(function(erro) {
//   console.log("Falha ao se conectar!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1:" + erro)
// })