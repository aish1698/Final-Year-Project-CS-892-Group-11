const express = require("express");
var router = express.Router();
const mongoose = require("mongoose");
const Profiles = require('../models/assignment.model')

router.post("/assignmentchapter", (req,res) =>
{
    let lr=[]
    var sem=req.body.sem;
    var subject=req.body.subject;
    
   
    Profiles.find({sem:sem ,subject:subject},function(err,learn){
        if (err) console.log(err)
        learn.forEach(learn=>lr.push({chapter:learn.chapter}))
        res.send(lr);
        console.log(lr);
        
    })


});


router.post("/assignmentdownload", (req,res) =>
{
    let lr=[]
    var sem=req.body.sem;
    var subject=req.body.subject;
    var chapter= req.body.chapter;

   
    Profiles.find({sem:sem ,subject:subject,chapter:chapter},function(err,learn){
        if (err) console.log(err)
        learn.forEach(learn=>lr.push({imagePath:learn.imagePath,name:learn.name,sem:learn.sem,subject:learn.subject,chapter:learn.chapter}))
        res.send(lr);
        console.log(lr);
        
    })


});

module.exports = router;