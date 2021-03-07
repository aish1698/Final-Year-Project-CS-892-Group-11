const express = require("express");
var router = express.Router();
const mongoose = require("mongoose");
const Profiles = require('../models/profile.model')

router.post("/learningstudent", (req,res) =>
{
    let lr=[]
    var sem=req.body.sem;
    var subject=req.body.subject;
   
    Profiles.find({sem:sem ,subject:subject},function(err,learn){
        if (err) console.log(err)
        learn.forEach(learn=>lr.push({imagePath:learn.imagePath,name:learn.name}))
        res.send(lr);
        console.log(lr);
        
    })


});

module.exports = router;