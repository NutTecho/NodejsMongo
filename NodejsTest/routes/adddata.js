var express = require('express');
const bodyParser = require("body-parser");
// const cors = require("cors");
// const Sequelize = require('sequelize')
var router = express.Router();
const {check,validationResult} = require('express-validator');

//======mongoose=========================
//const getdata = require('../model/getdata')


//============mysql and mssql==================
const mysqlcon = require('../config/database').MySQLConn;
const mssqlcon = require('../config/database').MSSQLConn;
const mb1 =require('../model/blogdata').MYSQLdb;
const mb2 = require('../model/blogdata').MSSQLdb;
// const mysqlDB = mysqlcon.blog;

mysqlcon.authenticate()
  .then(() => console.log('Connection mysql server successful'))
  .catch(err => console.log('Error' + err))

mssqlcon.authenticate()
  .then(() => console.log('Connection mssql server successful'))
  .catch(err => console.log('Error' + err))

//========monk===============================
// const db = require('monk')('localhost:27017/test')
// db.then(()=> console.log('Connection correctly to server'))


router.get('/', async(req, res, next) => {
  // getdata.GetOldData(function(error,datas){
  //   if(error) throw error
  //     res.render("adddata",{datas:datas})
  //   });
  // res.render("adddata");
    await mb1.findAll()
      .then((x) => {
        //  console.log(x);
         res.render("adddata",{datas:x});
         // res.sendStatus(200);
      })
      .catch(err => console.log(err));
  //  res.json(blogs);
  //res.render("adddata",{datas:blogs});

});


/* GET users listing. */
// router.get('/', function(req, res, next) {
//   getdata.GetOldData(function(error,datas){
//     if(error) throw error
//       res.render("adddata",{datas:datas})
//     });
  // res.render("adddata");
// });


router.get('/getold',async(req,res,next) =>{
  //=======monk get data ==============
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

  //=====mongoose get data==============
    // getdata.GetOldData(function(error,datas){
    //   if(error) throw error
    //   res.render("adddata",{datas:datas})
    await mb2.findAll()
    .then((x) => {
      //  console.log(x);
       res.render("adddata",{datas:x});
       // res.sendStatus(200);
    })
    .catch(err => console.log(err));
  });

router.get('/getold/:name',async(req,res,next) =>{
  //======== monk select data ====================
  // var col = db.get('demo');
  // var col = db.get('getdatas');
  // col.find({description: req.params.name},{},function(error,doc){
  //   if(error)
  //     {
  //       res.send(error);
  //     }
  //     else{
  //       res.json(doc)
  //     }
  // });
  await mb2.findAll({where: { fname : req.params.name}})
  .then((x) => {
    //  console.log(x);
     res.render("adddata",{datas:x});
     // res.sendStatus(200);
  })
  .catch(err => console.log(err));
  
})

router.post('/addnew', 
  [
    check("firstname","Please insert your fname").not().isEmpty(),
    check("lastname","Please insert your lname").not().isEmpty(),
    check("age","Please insert your age").not().isEmpty(),
  // console.log(req.body.topname);
  // console.log(req.body.description);
  // console.log(req.body.address);
] ,async(req, res, next) => {
  //res.render("adddata");
  const result = validationResult(req);
  var errors = result.errors;
  if(!result.isEmpty())
  {
    // await mb2.findAll()
    // .then((x) => {
    //    res.render("adddata",{errors:errors,datas:x});
    // })
    const x = {};
    res.render('adddata',{errors:errors,datas:x});
    console.log(errors)
  }
  else{
    //let {FirstName,LastName,Age,Toy} = req.body;
    await mb2.create({
      FirstName : req.body.firstname,
      LastName : req.body.lastname,
      Age : req.body.age,
      Toy : req.body.toy
    })
    .then((x) => {
          res.location('/adddata');
          res.redirect('/adddata');
    })
    .catch(err => console.log(err));




      //======= mongoose insert data =======================
      // data = new getdata({
      //   topic:req.body.name,
      //   description:req.body.description,
      //   address:req.body.address
      // })
      // getdata.createBlog(data,function(error,callback){
      //   if(error)
      //   {
      //     console.log(error);
      //   }
      //   else
      //   {
      //     console.log('done!')
      //     res.location('/adddata');
      //     res.redirect('/adddata');
      //   }
      // });

      //======= monk insert data ================
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