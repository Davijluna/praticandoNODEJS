const db = require('./db')

// definindo o novo model que chamamos de Post

const Post = db.sequelize.define('postagens', {
  titulo: {
    type: db.Sequelize.STRING
  },
  conteudo: {
    type: db.Sequelize.TEXT
  }
});

Post.all = function() {
  return Post.findAll();
};

module.exports = Post;

// Post.sync({force: true})