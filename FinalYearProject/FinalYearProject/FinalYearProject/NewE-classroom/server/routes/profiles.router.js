const express = require('express');

const mongoose = require("mongoose");

const profilesController = require('../controller/profiles.controller');

const storage = require('../helpers/storage');

const router = express.Router();

router.get('/', profilesController.getProfiles);

router.post('/teaching', storage, profilesController.postProfile);

module.exports = router;