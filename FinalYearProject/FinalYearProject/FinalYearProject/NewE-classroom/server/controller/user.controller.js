
const express = require("express");
var router = express.Router();
const mongoose = require("mongoose");
const User = require('../models/user.model');
const Teacher= require('../models/teacher.model');
const jwt= require('jsonwebtoken');

router.post("/login", (req,res) => {

  var userid = req.body.userid; 
  var password = req.body.password;
  User.findOne({userid:userid,password:password},function(err,user){
    if(err){
      console.log(err)
      return res.status(500).send();
    }
    if(!user){
      return res.status(404).send();
    }
    let payload = { subject :user._id}
    let token = jwt.sign(payload, 'secretKey')
    return res.status(200).send({token});
  })
})
router.post("/loginteacher", (req,res) => {

  var userid = req.body.userid; 
  var password = req.body.password;
  Teacher.findOne({userid:userid,password:password},function(err,user){
    if(err){
      console.log(err)
      return res.status(500).send();
    }
    if(!user){
      return res.status(404).send();
    }
    let payload = { subject :user._id}
    let token = jwt.sign(payload, 'secretKey')
    return res.status(200).send({token});
  })
})
router.post("/register", (req, res) => {

  var user = new User({
    fullName : req.body.fullName,
    userid : req.body.userid,
    dept : req.body.dept,
    class_roll : req.body.class_roll,
    sem : req.body.sem,
    email : req.body.email,
    mobile : req.body.mobile,
    password : req.body.password,
    securitycode : req.body.securitycode
  });

  user.save().then(createdUser => {
    let payload = { subject: createdUser._id}
    let token= jwt.sign(payload, 'secretKey')
    // console.log("saved successfully")
    return res.send({ error: false, result: {token}, message: "User Successfully Created" })
    

  }).catch(err => {
    // console.log("not saved successfully")
    console.log(err)
    return res.send({ error: true, message: "Server Error" })
  })

})

router.post("/teacherregister", (req, res) => {

  var teacher = new Teacher({
    fullName : req.body.fullName,
    userid : req.body.userid,
    dept : req.body.dept,
    reg_id : req.body.reg_id,
    email : req.body.email,
    mobile : req.body.mobile,
    password : req.body.password,
    securitycode : req.body.securitycode
  });

  teacher.save().then(createdUser => {
    let payload = { subject: createdUser._id}
    let token= jwt.sign(payload, 'secretKey')
    return res.send({ error: false, result: {token}, message: "User Successfully Created" })
    

  }).catch(err => {
    console.log(err)
    return res.send({ error: true, message: "Server Error" })
  })

})
module.exports = router;

