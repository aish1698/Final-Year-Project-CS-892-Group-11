
const Profile = require('../models/answer.model');

exports.getProfiles = async (req, res) => {
  const profiles = await Profile.find();
  res.status(200).json({ profiles });
};

exports.postProfile = async (req, res) => {
  const {sem} = req.body;
  const {subject} = req.body;
  const { name } = req.body;
  const imagePath = 'http://localhost:3000/images/' + req.file.filename; 
  const {chapter}= req.body;
  const {userid}=req.body;
  const profile = new Profile({
    sem,
    subject,
    name,
    imagePath,
    chapter,
    userid
  });
  const createdProfile = await profile.save();
  res.status(201).json({
    profile: {
      ...createdProfile._doc,
    },
  });
};