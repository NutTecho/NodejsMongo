const Sequelize = require("sequelize");
const MySQLConfig = require("../config/connection.js").mysqlconstring;

const MySQLConn = new Sequelize(MySQLConfig.database , MySQLConfig.username, MySQLConfig.password, {
  host: MySQLConfig.host,
  dialect: MySQLConfig.dialect,
  operatorsAliases: 0,

  pool: {
    max: MySQLConfig.pool.max,
    min: MySQLConfig.pool.min,
    acquire: MySQLConfig.pool.acquire,
    idle: MySQLConfig.pool.idle
  }
});

const MSSQLConfig = require("../config/connection.js").mssqlconstring;
const MSSQLConn = new Sequelize(MSSQLConfig.database , MSSQLConfig.username, MSSQLConfig.password, {
    host: MSSQLConfig.host,
    dialect: MSSQLConfig.dialect,
    operatorsAliases: 0,
  
    pool: {
      max: MSSQLConfig.pool.max,
      min: MSSQLConfig.pool.min,
      acquire: MSSQLConfig.pool.acquire,
      idle: MSSQLConfig.pool.idle
    }
  });


exports.MSSQLConn = MSSQLConn;
exports.MySQLConn = MySQLConn;