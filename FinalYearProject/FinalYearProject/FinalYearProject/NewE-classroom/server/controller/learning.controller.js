const express = require("express");
var router = express.Router();
const mongoose = require("mongoose");
const Profiles = require('../models/profile.model')

router.post("/learningstudent", (req,res) =>
{
    let lr=[]
    var sem=req.body.sem;
    var subject=req.body.subject;
    var chapter=req.body.chapter;
   
    Profiles.find({sem:sem ,subject:subject},function(err,learn){
        if (err) console.log(err)
        learn.forEach(learn=>lr.push({imagePath:learn.imagePath,name:learn.name}))
        res.send(lr);
        console.log(lr);
        
    })


});
router.post("/list", (req,res) =>
{
    let lr=[]
    var userid=req.body.userid;
    var sem= req.body.sem;
    var subject=req.body.subject;
   
    Profiles.find({sem:sem ,subject:subject,userid:userid},function(err,learn){
        if (err) console.log(err)
        learn.forEach(learn=>lr.push({imagePath:learn.imagePath,name:learn.name}))
        res.send(lr);
        console.log(lr);
        
    })


});
router.post("/updatedoc", (req,res) =>
{
    let lr=[]
    var userid=req.body.userid;
    var sem= req.body.sem;
    var subject=req.body.subject;
    var name=req.body.name;
    Profiles.find({sem:sem ,subject:subject,userid:userid,name:name},function(err,learn){
        if (err) console.log(err)
        learn.forEach(learn=>lr.push({sem:learn.sem,subject:learn.subject,chapter:learn.chapter,imagePath:learn.imagePath,name:learn.name}))
        res.send(lr);
        console.log(lr);
        
    })


});
router.post("/delete", (req,res) =>
{
    var userid=req.body.userid;
    var sem= req.body.sem;
    var subject=req.body.subject;
    var name=req.body.name;
    Profiles.deleteOne({name:name,sem:sem,userid:userid,subject:subject},function(err,learn){
        if (err) console.log(err)
        
        console.log("deleted");
        
    })


});


module.exports = router;