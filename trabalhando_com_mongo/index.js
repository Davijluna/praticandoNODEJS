const mongoose = require("mongoose")

//  Configurando o mongoose
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/aprendendo", {
  // useMongoClient: true
  useNewUrlParser: true
}).then(() => {
  console.log('MongoDB conectado')
}).catch((err) => {
  console.log('Houve um erro ao se conectar ao mongoDB' + err)
})

// Model - Usuários
// Definindo o model
const UsuariosSchema = mongoose.Schema({
  nome: {
    type: String,
    require: true
  },
  sobrenome: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true
  },
  idade: {
    type: Number,
    require: true
  },
  pais: {
    type: String
  }

})
// collection
mongoose.model('usuarios', UsuariosSchema)

const Davi = mongoose.model('usuarios')

new Davi({
  nome: "Davi",
  sobrenome: "Jesus de Luna",
  email: "email@email.com",
  idade: 36,
  pais: "Brasil"
}).save().then(() => {
  console.log("Usuário criando com sucesso !!!")
}).catch((err) => {
  console.log("Erro de criação de usuário "+err)
})