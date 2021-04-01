const mysqlconstring = { 
    database: 'demo',
    username: 'root',
    password: 'admin',
    host: 'localhost',
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };

  const mssqlconstring = { 
    database: 'test',
    username: 'client1',
    password: 'admin',
    host: 'localhost',
    dialect: "mssql",
    dialectOptions :{
      options : { encrypt : true }
    }
  };
// module.exports =  mysqlconstring,mssqlconstring;  
exports.mysqlconstring = mysqlconstring;
exports.mssqlconstring = mssqlconstring;