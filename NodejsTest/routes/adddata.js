var express = require('express');
const bodyParser = require("body-parser");
const cors = require("cors");
var router = express.Router();
const db = require('monk')('localhost:27017/test')
const {check,validationResult} = require('express-validator')

db.then(()=> console.log('Connection correctly to server'))

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render("adddata");
});


router.get('/getold',function(req,res,next){
  var col = db.get('demo');
  col.find({},{},function(error,doc){
    if(error)
      {
        res.send(error);
      }
      else{
        res.json(doc)
      }
  });
  
})

router.get('/getold/:name',function(req,res,next){
  var col = db.get('demo');
  col.find({descp: req.params.name},{},function(error,doc){
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
      var col = db.get('demo');
      col.insert(
        {
          name:req.body.name,
          descp:req.body.description,
          address:req.body.address},
          function(err,blog)
          {
            if(err)
            {
              res.send(err);
            }
            else{
              res.location('/adddata');
              res.redirect('/adddata');
            }
          }
      )
      
  }
});




module.exports = router;