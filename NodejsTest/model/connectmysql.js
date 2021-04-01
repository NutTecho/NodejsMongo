const dbConfig = require("../model/mysqlcon.js").mssqlconstring;
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.database , dbConfig.username, dbConfig.password, {
  host: dbConfig.host,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  // pool: {
  //   max: dbConfig.pool.max,
  //   min: dbConfig.pool.min,
  //   acquire: dbConfig.pool.acquire,
  //   idle: dbConfig.pool.idle
  // }
});

sequelize.authenticate().then((err) => {
  console.log('Connection  mssql successful', err);
})
.catch((err) => {
  console.log('Unable to connect to mssql', err);
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// db.blog = require("../model/blogmysql.js").Blog1(sequelize,Sequelize);
db.blog =sequelize.define('xx',
{
    getid : {
        type : Sequelize.INTEGER,
        field : 'id',
        primaryKey: true
    },
    FirstName : {
        type : Sequelize.STRING,
        field : 'fname'
    },
    LastName : {
        type : Sequelize.STRING,
        field : 'lname'
    },
    Age : {
        type : Sequelize.INTEGER,
        field : 'age'
    },
    Toy : {
        type : Sequelize.STRING,
        field : 'toy'
    }
},
{
    timestamps: false,
    freezeTableName: true
}
);
// exports.blog = blog;
module.exports = db;