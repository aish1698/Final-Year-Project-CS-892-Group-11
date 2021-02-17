const mongoose = require('mongoose');
console.log(process.env.mongoUrl)
mongoose.connect(process.env.mongoUrl, (err) => {
    if(!err)
    {
        console.log('MongoDB connection succeeded.'); }
        else {
            console.log('Error in MongoDB connection :' + JSON.stringify(err,undefined,2 ));

        }
    }

); 
require('./user.model');