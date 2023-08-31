const Sequelize = require('sequelize')
const sequelize = new Sequelize('test', 'root', '82523614', {
  host: "localhost",
  dialect: 'mysql'
})

// Criando o model de Postagem.
const Postagem = sequelize.define('postagens', {
  titulo: {
    type: Sequelize.STRING
  },
  conteudo: {
    type: Sequelize.TEXT
  }
})

// Criando o model de Usuario.

const Usuario = sequelize.define('usuarios', {
  nome: {
    type: Sequelize.STRING
  },
  sobreNome: {
    type: Sequelize.STRING
  },
  idade: {
    type: Sequelize.INTEGER
  },
  email: {
    type: Sequelize.STRING
  }
})


// Usuario.sync({force: true})
// Postagem.sync({force: true})

// sequelize.authenticate().then(function() {
//   console.log("conectado com sucesso")
// }).catch(function(erro) {
//   console.log("Falha ao se conectar: " +erro)
// })