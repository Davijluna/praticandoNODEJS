const express = require("express"); 
const app = express();
const handlebars = require('express-handlebars')

// config
  // Template Engine
    app.engine('handlebars', handlebars({defaultLayout:'main'}))
    app.set('view engine', 'handlebars')

app.listen(8081, function() {
  console.log('Servidor Rodando na url http://localhost:8081')
});
