module.exports = (sequelize,Sequelize) => {
const Blog = sequelize.define(
    'student',
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
return Blog;
};
    
