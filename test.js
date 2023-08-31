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

// Para iserir dados

Postagem.create({
  titulo: "teste de sequelize",
  conteudo: "conteudo teste!!!!!!!!!!!!!!!!!!!!!!!!"
})

// Criando o model de Usuario. este tera Quatro campos nome, sobreNome, idade, email

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

// criando Usuario

Usuario.create({
  nome: "Davi",
  sobreNome: "Jesus de Luna",
  idade: 36,
  email: "email@emailetc"
})


// Usuario.sync({force: true})
// Postagem.sync({force: true})

// sequelize.authenticate().then(function() {
//   console.log("conectado com sucesso")
// }).catch(function(erro) {
//   console.log("Falha ao se conectar: " +erro)
// })