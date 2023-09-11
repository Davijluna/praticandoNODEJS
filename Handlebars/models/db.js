const Sequelize = require('sequelize')

// Conexão com o banco de dados MySql
const sequelize = new Sequelize('postapp', 'root', '82523614', {
  host: "localhost",
  dialect: 'mysql'
})

// Exportando os dois sequelize 

module.exports = {
  Sequelize: Sequelize,
  sequelize: sequelize
}