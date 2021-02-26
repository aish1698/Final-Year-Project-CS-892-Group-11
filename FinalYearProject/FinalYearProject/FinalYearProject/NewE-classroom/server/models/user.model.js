const mongoose = require("mongoose");
var userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    
  },
  userid: {
    type: String,
    
  },
  dept: {
    type: String,
  },
  
  class_roll: {
    type: String,
  },
  sem: {
    type: String,
    
  },
  mobile: {
    type: String,
    
  },
  email: {
    type: String,
    
  },
  password: {
    type: String,
    
  },
  securitycode: {
    type : String,
  }

});

module.exports = mongoose.model("users", userSchema);

