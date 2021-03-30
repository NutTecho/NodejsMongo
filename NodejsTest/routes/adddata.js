var express = require('express');
const bodyParser = require("body-parser");
const cors = require("cors");
const Sequelize = require('sequelize')
const getdata = require('../model/getdata')
const mysqlcon = require('../model/mysqlcon')
var router = express.Router();
const db = require('monk')('localhost:27017/test')
const {check,validationResult} = require('express-validator')

db.then(()=> console.log('Connection correctly to server'))

// const sequelize = new Sequelize(mysqlcon.DB,mysqlcon.USER,mysqlcon.PASSWORD{
//   host : mysqlcon.HOST,
//   dialect : mysqlcon.dialect,
//   operatorsAliases: false,

//   pool: {
//     max: mysqlcon.pool.max,
//     min: mysqlcon.pool.min,
//     acquire: mysqlcon.pool.acquire,
//     idle: mysqlcon.pool.idle
//   }
// })

// const app = express();
// app.use(bodyParser.json())
// // parse requests of content-type - application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: true }));

/* GET users listing. */
router.get('/', function(req, res, next) {
  getdata.GetOldData(function(error,datas){
    if(error) throw error
      res.render("adddata",{datas:datas})
    });
  // res.render("adddata");
});


router.get('/getold',function(req,res,next){
  // var col = db.get('demo');
  // var col = db.get('getdatas');
  // col.find({},{},function(error,doc){
  //   if(error)
  //     {
  //       res.send(error);
  //     }
  //     else{
  //       res.json(doc)
  //     }
    getdata.GetOldData(function(error,datas){
      if(error) throw error
      res.render("adddata",{datas:datas})
    
  });
});
router.get('/getold/:name',function(req,res,next){
  // var col = db.get('demo');
  var col = db.get('getdatas');
  col.find({description: req.params.name},{},function(error,doc){
    if(error)
      {
        res.send(error);
      }
      else{
        res.json(doc)
      }
  });
  
})

router.post('/addnew', 
  [
    check("name","Please insert your name").not().isEmpty(),
    check("description","Please insert your description").not().isEmpty(),
    check("address","Please insert your address").not().isEmpty(),
  // console.log(req.body.topname);
  // console.log(req.body.description);
  // console.log(req.body.address);
] ,function(req, res, next) {
  //res.render("adddata");
  const result = validationResult(req);
  var errors = result.errors;
  if(!result.isEmpty())
  {
    res.render('adddata',{errors:errors});
    console.log(errors)
  }
  else{
      data = new getdata({
        topic:req.body.name,
        description:req.body.description,
        address:req.body.address
      })
      getdata.createBlog(data,function(error,callback){
        if(error)
        {
          console.log(error);
        }
        else
        {
          console.log('done!')
          res.location('/adddata');
          res.redirect('/adddata');
        }
      });

      // var col = db.get('demo');
      // col.insert(
      //   {
      //     name:req.body.name,
      //     descp:req.body.description,
      //     address:req.body.address},
      //     function(err,blog)
      //     {
      //       if(err)
      //       {
      //         res.send(err);
      //       }
      //       else{
      //         res.location('/adddata');
      //         res.redirect('/adddata');
      //       }
      //     }
      // )
      
  }
});




module.exports = router;