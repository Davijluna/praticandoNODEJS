// Carregando módulos
  const express = require('express')
  const handlebars = require('express-handlebars')
  const bodyParser = require('body-parser')
  const app = express()
  const admin = require("./routes/admin")
  const path = require("path")
  const mongoose = require('mongoose')
  const session = require("express-session")
  const flash = require("connect-flash")
  

  // model de Postagem
  require("./models/Postagem")
  const Postagem = mongoose.model("postagen")

  // model de Categorias
  require("./models/Categoria")
  const Categoria = mongoose.model("categoria")

  // 
const usuarios = require("./routes/usuario")
const passport = require("passport")
require("./config/auth")(passport)

// Configurações
  // Sessão
    app.use(session({
      secret:"cursodenode",
      resave: true,
      saveUninitialized: true
    }))
    app.use(passport.initialize())
    app.use(passport.session())
    app.use(flash())
  // Middleware
  // Onde declaramos as variáveis globais
    app.use((req, res, next) => {
      res.locals.success_msg = req.flash("success_msg")
      res.locals.error_msg = req.flash("error_msg")
      res.locals.error = req.flash("error")
      res.locals.user = req.user || null;
      next()
    })
  // Body Parser
    app.use(bodyParser.urlencoded({extended: true}))
    app.use(bodyParser.json())
  // Handlebars
    app.engine('handlebars', handlebars.engine({defaultLayout: 'main', 
      runtimeOptions: {
      allowProtoMethodsByDefault: true,
      allowProtoPropertiesByDefault: true,
  },
}))
    app.set('view engine', 'handlebars');
    // mongoose
    mongoose.Promise = global.Promise;
    mongoose.connect("mongodb://localhost/blogapp").then(() => {
      console.log("Conectado ao mongo")
    }).catch((err) => {
      console.log("Erro ao se conectar"+ err)
    })
      // Em breve
    // Public
      app.use(express.static(path.join(__dirname, "public")))

      app.use((req, res, next) => {
        console.log('Oi eu sou um Middleware')
        next()
      } )
// Rotas

      app.get("/", (req, res) => {
        Postagem.find().populate("categoria").sort({data:"desc"}).then((postagens) => {
          res.render('index', {postagens: postagens})
        }).catch((err) => {
          req.flash("error_msg", "Houve um erro")
          res.redirect("/404")
        })
      })

      app.get("/postagem/:slug", (req, res) => {
        Postagem.findOne({slug: req.params.slug}).then((postagem) => {
          if(postagem) {
            res.render("postagem/index", {postagem: postagem})
          }else{
            req.flash("error_msg", "Está postagem não existe")
            res.redirect("/")
          }
        }).catch((err) => {
          req.flash("error_msg", "Houve um erro interno")
          res.redirect("/")
        })
      })

      app.get("/categorias/:slug", (req, res) => {
        Categoria.findOne({slug: req.params.slug}).then((categoria) => {
          if(categoria) {
            Postagem.find({categoria: categoria._id}).then((postagens) => {
              res.render("categorias/postagens", {postagens: postagens, categoria: categoria})
            }).catch((err) => {
              req.flash("error_msg", "Houve um erro ao listar os posts!")
              res.redirect("/")
            })

          }else{
            req.flash("error_msg", "Esta categoria não existe")
            res.redirect("/")
          }
        }).catch((err) => {
          req.flash("error_msg", "Houve um erro interno ao carregar a página desta categoria")
          res.redirect("/")
        })
      })

      app.get("/404", (req, res) => {
        res.send("Erro 404")
      })

      app.get('/posts', (req, res) => {
        res.send("Lista Posts")
      })

      app.get('/categorias', (req, res) => {
        Categoria.find().then((categorias) => {
          res.render("categorias/index", {categorias: categorias})
        }).catch((err) => {
          req.flash("error_msg", "Houve um erro interno ao listar categorias")
          res.redirect("/")
        })
      })

  app.use('/admin', admin)
  app.use('/usuarios', usuarios) // criando o grupo de rotas para usuarios
// Outros
const PORT = 8081
app.listen(PORT, () => {
  console.log("Servidor rodando! ")
})