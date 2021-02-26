const mongoose = require("mongoose");
var teacherSchema = new mongoose.Schema({
  fullName: {
    type: String,
    
  },
  userid: {
    type: String,
    
  },
  dept: {
    type: String,
  },
  
  reg_id: {
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

module.exports = mongoose.model("teachers", teacherSchema);