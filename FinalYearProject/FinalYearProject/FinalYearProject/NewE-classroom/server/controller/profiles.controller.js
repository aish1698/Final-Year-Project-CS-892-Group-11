
const Profile = require('../models/profile.model');
const mongoose = require("mongoose");
var ObjectId= require("mongodb").ObjectID;
exports.getProfiles = async (req, res) => {
  const profiles = await Profile.find();
  res.status(200).json({ profiles });
};

exports.postProfile = async (req, res) => {
  const {sem} = req.body;
  const {subject} = req.body;
  const { name } = req.body;
  const {chapter}=req.body;
  const {userid}=req.body;
  const imagePath = 'http://localhost:3000/images/' + req.file.filename; 
 
  const profile = new Profile({
    sem,
    subject,
    name,
    chapter,
    userid,
    imagePath
    
  });
  const createdProfile = await profile.save();
  res.status(201).json({
    profile: {
      ...createdProfile._doc,
    },
  });
};
exports.updateProfile = async (req, res) => {


  const {sem} = req.body;
  const {subject} = req.body;
  const { name } = req.body;
  const {chapter}=req.body;
  const {userid}=req.body;
  const imagePath = 'http://localhost:3000/images/' + req.file.filename; 
 var id=req.body.id;
  const profile = new Profile({
    id,
    sem,
    subject,
    name,
    chapter,
    userid,
    imagePath
    
  });
  
  Profile.updateOne({"id":ObjectId(id)},{$set:profile},function(err,profiles){
    if (err) console.log(err)
   console.log("updated")
})

  
};