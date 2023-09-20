const mongoose = require("mongoose")

//  Configurando o mongoose
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/aprendendo", {
  // link da solução:
  // https://stackoverflow.com/questions/48031029/the-options-usemongoclient-is-not-supported

  // link da documentação oficial
  // https://mongoosejs.com/docs/connections.html
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
  nome: "Maria",
  sobrenome: "Almeida da Silva",
  email: "maria@email.com",
  idade: 42,
  pais: "EUA"
}).save().then(() => {
  console.log("Usuário criando com sucesso !!!")
}).catch((err) => {
  console.log("Erro de criação de usuário "+err)
})