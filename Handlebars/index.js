const express = require("express"); 
const app = express();
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const Post = require('./models/Post')


// config
  // Template Engine
  // Tive problemas para exibir os dados do banco na tela entâo este link me deu auxilio para exibir as postagens
  // https://pt.stackoverflow.com/questions/466598/handlebars-access-has-been-denied-to-resolve-the-property-titulo-because-it-i

  // http://www.prowebguru.com/2020/08/nodejs-express-handlebars-access-denied-resolve-property-solution/#.X595fFDQ9hE
    app.engine('handlebars', handlebars.engine({defaultLayout: 'main', 
    runtimeOptions: {
      allowProtoMethodsByDefault: true,
      allowProtoPropertiesByDefault: true,
    },
  }))

    app.set('view engine', 'handlebars')
  // Body Parser
    app.use(bodyParser.urlencoded({extended: false}))
    app.use(bodyParser.json())
  // configurando a conxão com o Banco de Dados. 

// Rotas

app.get('/', function(req, res) {
  Post.findAll({order: [['id', 'DESC']]}).then(function(posts) {
    console.log('Registros encontrados:', posts);
    res.render('home', { posts: posts })
  }).catch(function(error) {
    console.error('Erro ao buscar registros:', error); // Adicione este log
    res.status(500).send('Erro ao buscar registros');
  });
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
      // res.send("Post criado com sucesso!") // está parte mostra na tela a informação que está em sed.
    }).catch(function(erro) {
      res.send("Houve um erro: " + erro)
    })
    // req.body.conteudo
    // res.send('teste Ok !!!!!!')
    // res.send("Texto:"+ req.body.titulo+ " Conteudo: "+ req.body.conteudo )
  })

  app.get('/deletar/:id', function(req, res) {
    Post.destroy({where: {'id': req.params.id}}).then(function() {
      res.send("postagem deletada com sucesso!")
    }).catch(function(erro) {
      res.send("Erro ao deletar ", erro)
    })
  })

app.listen(8081, function() {
  console.log('Servidor Rodando na url http://localhost:8081')
});
