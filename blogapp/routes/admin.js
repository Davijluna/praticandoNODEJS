const express = require("express")
const router = express.Router()
const mongoose = require("mongoose")
require("../models/Categoria")
const Categoria = mongoose.model("categorias")

router.get('/', (req, res) => {
  res.render("admin/index")
})

router.get('/posts', (req, res) => {
  res.send("Página de posts")
})

router.get("/categorias", (req, res) => {
  Categoria.find().sort({date: "desc"}).then((categoria) => {
    res.render("admin/categorias", {categorias: categoria})
  }).catch((error) => {
    req.flash("error_msg", "Hove um erro ao listar as categorias")
    res.redirect("/admin")
  })
  // res.send("Página de categorias")
})

router.get("/categorias/add", (req, res) => {
  res.render("admin/addcategorias")
})

router.post("/categorias/nova", (req, res) => {

  var erros = []

  if(!req.body.nome || typeof req.body.nome == undefined || req.body.nome == null){
    erros.push({texto: "Nome inválido"})
  }

  if(!req.body.slug || typeof req.body.slug == undefined || req.body.slug == null) {
    erros.push({texto: "Slug inválido"})
  }

  if(erros.length > 0) {
    res.render("admin/addcategorias", {erros: erros})
  } else {
      const novaCategoria = {
        nome: req.body.nome,
        slug: req.body.slug
      }
    
      new Categoria(novaCategoria).save().then(() => {
        req.flash("success_msg", "categorias criada com sucesso!")
        res.redirect("/admin/categorias")
        console.log("Categoria salva com sucesso !")
      }).catch((err) => {
        req.flash("error_msg", "Houve um erro ao salvar a categoria, tente novamente!")
        res.redirect("/admin")
        // console.log("Erro ao salvar categoria !!!!!!!!!!!!!!!!!!!!!!!!!!!!"+err)
      })
  }
})

router.get("/categorias/edit/:id", (req, res) => {
  res.send("Página de Edição de categorias")
})



module.exports = router