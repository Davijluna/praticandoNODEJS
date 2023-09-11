const express = require("express"); 
const app = express();
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const Post = require('./models/Post.js')


// config
  // Template Engine
    app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}))
    app.set('view engine', 'handlebars')
  // Body Parser
    app.use(bodyParser.urlencoded({extended: false}))
    app.use(bodyParser.json())
  // configurando a conxão com o Banco de Dados. 

// Rotas

app.get('/', function(req, res) {
  Post.all().then(function(posts) {
    res.render('home', {nome: "Davi",sobreNome: "Jesus"}, posts)
  }).catch(function(erro) {
    res.send("teve um ERRo" + erro)
  })
})
  app.get('/cad', function(_req, res){
    // res.send('ROTA DE CADASTRO DE POST')
    res.render('formulario')
  })

  app.post('/add', function(req, res) {
    Post.create({
      titulo: req.body.titulo,
      conteudo: req.body.conteudo
    }).then(function() {
      res.redirect('/')
      // res.send("Post criado com sucesso!")
    }).catch(function(erro) {
      res.send("Houve um erro: " + erro)
    })
    // req.body.conteudo
    // res.send('teste Ok !!!!!!')
    // res.send("Texto:"+ req.body.titulo+ " Conteudo: "+ req.body.conteudo )
  })

app.listen(8081, function() {
  console.log('Servidor Rodando na url http://localhost:8081')
});
