const { Sequelize, DataTypes } = require('sequelize');
const config = require('../config/config.json') ;
const { FORCE } = require('sequelize/lib/index-hints');
console.log(config)
const sequelize = new Sequelize(config.DB_NAME , config.DB_USER , config.DB_PASSWORD ,  {
  host: 'localhost',
  dialect: 'mysql'
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.User = require('./user')(sequelize, DataTypes);
db.Todo = require('./product')(sequelize, DataTypes);

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize.sync()
  .then(() => {
    console.log('Database & tables created!');
  });

module.exports = db;
