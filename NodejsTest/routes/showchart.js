var express = require('express');
var router = express.Router();


const mssqlcon = require('../config/database').MSSQLConn;
const db = require('../model/blogdata').MSSQLdb;

mssqlcon.authenticate()
  .then(() => console.log('Connection mssql server successful'))
  .catch(err => console.log('Error' + err))

/* GET users listing. */
router.get('/', async(req, res, next) => {

  await db.findAll()
      .then((x) => {
        //  console.log(x);
         res.render("showchart",{datas:x});
        //  res.json(x)
         // res.sendStatus(200);
      })
      .catch(err => console.log(err));
});

module.exports = router;