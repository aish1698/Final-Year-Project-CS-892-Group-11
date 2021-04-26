require('dotenv').config()
require('./models/db');

const jwt = require('jsonwebtoken');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const userController = require("./controller/user.controller");
const forgotpassController = require("./controller/forgotpass.controller");
const learningController = require("./controller/learning.controller");
const profilesRoutes = require('./routes/profiles.router');
const answerdownloadController = require("./controller/answerdownload.controller");
const resultController = require("./controller/result.controller");
const assignmentdownloadController = require("./controller/assignmentdownload.controller");
const assignmentRoutes= require('./routes/assignment.router');
const answerRoutes= require('./routes/answer.router');
const path = require('path');
var app = express();
var port=3000;
// middleware
app.use(bodyParser.json());
app.use(cors());
app.use("/User", userController);
app.use("/forgotpassword", forgotpassController);
app.use('/images', express.static(path.join('images')));
app.use("/learning",learningController);
app.use("/assignmentdown",assignmentdownloadController);
app.use("/answerdown",answerdownloadController);
app.use("/result",resultController);
app.use('/api/profiles', profilesRoutes);
app.use('/api/assignmentques', assignmentRoutes);
app.use('/api/answers', answerRoutes);
app.listen(port, () => {
    console.log(`express server started at port : ${port}`);
  });
