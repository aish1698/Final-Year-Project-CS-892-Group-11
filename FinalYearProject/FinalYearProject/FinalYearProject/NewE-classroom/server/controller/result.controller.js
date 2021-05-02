const express = require("express");
var router = express.Router();
const mongoose = require("mongoose");
const Result = require('../models/result.model');

const jwt= require('jsonwebtoken');


router.post("/resultupload", (req, res) => {

    var result = new Result(req.body);
  
    result.save().then(createdResult => {
      
      return res.send({ error: false, result: createdResult, message: "Result Successfully Uploaded" })
      
  
    }).catch(err => {
      // console.log("not saved successfully")
      console.log(err)
      return res.send({ error: true, message: "Server Error" })
    })
  
  })
  router.post("/resultdownload", (req,res) =>
{
  
    var sem=req.body.sem;
    var dept=req.body.dept;
    var class_roll=req.body.class_roll;
    var subject=req.body.subject;
   
    Result.find({sem:sem,dept:dept,class_roll:class_roll,subject:subject},function(err,result){
      if(err){
        console.log(err)
      }
      else{
        
      res.send(result)
      console.log(result);
      }
    })
    });
  module.exports = router;
