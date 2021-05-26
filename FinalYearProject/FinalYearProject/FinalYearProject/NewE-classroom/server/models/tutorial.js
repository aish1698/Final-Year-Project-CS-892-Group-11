const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const tutorialSchema=new Schema({
    sem:String,
    subject:String,
    name:String,
    imagePath:String,
    chapter:String,
    userid:String,

});
module.exports=mongoose.model('tutorial','tutorialSchema','profiles');


