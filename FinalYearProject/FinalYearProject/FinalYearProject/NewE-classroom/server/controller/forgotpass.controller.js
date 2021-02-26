const express = require("express");
var router = express.Router();
const mongoose = require("mongoose");

const user = require('../models/user.model');

const teacher = require('../models/teacher.model');

router.post("/forgotpasswordstudent",(req,res) => {
 var securitycode =req.body.securitycode;
 var password= req.body.password;
user.findOne({securitycode:securitycode},function(err,use){
  if(err){
    console.log(err)
  }
  
  else{
    user.updateOne({"securitycode":securitycode}, {$set:{password}}, function(err, res) {
        if (err) throw err;
        console.log("1 document updated");
        
      });
  
  }
})

});
router.post("/forgotpasswordteacher",(req,res) => {
  var securitycode =req.body.securitycode;
  var password= req.body.password;
 teacher.findOne({securitycode:securitycode},function(err,use){
   if(err){
     console.log(err)
   }
  
   else{
     teacher.updateOne({"securitycode":securitycode}, {$set:{password}}, function(err, res) {
         if (err) throw err;
         console.log("1 document updated");
         
       });
   
   }
 })
 
 });
module.exports = router;