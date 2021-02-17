require('dotenv').config()
require('./models/db');

const jwt = require('jsonwebtoken');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const userController = require("./controller/user.controller");
const profilesRoutes = require('./routes/profiles.router');
const path = require('path');
var app = express();
var port=3000;
// middleware
app.use(bodyParser.json());
app.use(cors());
app.use("/User", userController);
app.use('/images', express.static(path.join('images')));

app.use('/api/profiles', profilesRoutes);
app.listen(port, () => {
    console.log(`express server started at port : ${port}`);
  });
