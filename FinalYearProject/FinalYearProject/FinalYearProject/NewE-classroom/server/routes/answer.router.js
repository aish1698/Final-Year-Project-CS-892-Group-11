const express = require('express');

const mongoose = require("mongoose");

const answerController = require('../controller/answer.controller');

const storage = require('../helpers/answerstorage');

const router = express.Router();

router.get('/', answerController.getProfiles);

router.post('/answer', storage, answerController.postProfile);

module.exports = router;