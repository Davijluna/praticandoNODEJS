// conectando a um banco de dados com sequelize
const Sequelize = require('sequelize')
const sequelize = new Sequelize('test', 'root', '82523614', {
  host:"localhost",
  dialect: 'mysql'
})

sequelize.authenticate().then(function() {
  console.log("Conectado com sucesso!")
}).catch(function(erro) {
  console.log("Falha ao se conectar:" + erro)
})