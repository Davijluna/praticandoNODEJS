const mongoose = require("mongoose")

//  Configurando o mongoose
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/aprendendo", {
  useMongoClient: true
}).then(() => {
  console.log('MongoDB conectado')
}).catch((err) => {
  console.log('Houve um erro ao se conectar ao mongoDB' + err)
})

// Model - Usuários

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

mongoose.model('usuarios', UsuariosSchema)