const Sequelize = require("sequelize");
const MYSQLdb = require('../config/database').MySQLConn;

const tb_student = MYSQLdb.define('student',
        {
            getid : {
                type : Sequelize.INTEGER,
                field : '_id',
                primaryKey: true
            },
            FirstName : {
                type : Sequelize.STRING,
                field : 'first_name'
            },
            LastName : {
                type : Sequelize.STRING,
                field : 'last_name'
            },
            Age : {
                type : Sequelize.INTEGER,
                field : '_age'
            },
            Toy : {
                type : Sequelize.STRING,
                field : '_toy'
            }
        },
        {
            timestamps: false,
            freezeTableName: true
        }
    );


const MSSQLdb = require('../config/database').MSSQLConn;
const tb_xx = MSSQLdb.define('xx',
            {
                getid : {
                    type : Sequelize.INTEGER,
                    field : 'id',
                    primaryKey: true,
                    autoIncrement : true
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

exports.MYSQLdb = tb_student;       
exports.MSSQLdb = tb_xx;
