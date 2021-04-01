// const sequelize1 = require('../model/mysqlcon').mssqlconstring;
// const Blog = sequelize.define('student',
//         {
//             getid : {
//                 type : Sequelize.INTEGER,
//                 field : '_id',
//                 primaryKey: true
//             },
//             FirstName : {
//                 type : Sequelize.STRING,
//                 field : 'first_name'
//             },
//             LastName : {
//                 type : Sequelize.STRING,
//                 field : 'last_name'
//             },
//             Age : {
//                 type : Sequelize.INTEGER,
//                 field : '_age'
//             },
//             Toy : {
//                 type : Sequelize.STRING,
//                 field : '_toy'
//             }
//         },
//         {
//             timestamps: false,
//             freezeTableName: true
//         }
//     );

const Blog1 = sequelize1.define('xx',
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

// exports.Blog = Blog;
exports.Blog1 = Blog1;

// module.exports = (sequelize,Sequelize) => {
// const Blog = sequelize.define(
//     'xx',
//     {
//         getid : {
//             type : Sequelize.INTEGER,
//             field : 'id',
//             primaryKey: true
//         },
//         FirstName : {
//             type : Sequelize.STRING,
//             field : 'fname'
//         },
//         LastName : {
//             type : Sequelize.STRING,
//             field : 'lname'
//         },
//         Age : {
//             type : Sequelize.INTEGER,
//             field : 'age'
//         },
//         Toy : {
//             type : Sequelize.STRING,
//             field : 'toy'
//         }
//     },
//     {
//         timestamps: false,
//         freezeTableName: true
//     }
// );
// return Blog;
// };
    
