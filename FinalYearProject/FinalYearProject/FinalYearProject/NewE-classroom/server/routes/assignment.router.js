const express = require('express');

const mongoose = require("mongoose");

const assignmentController = require('../controller/assignment.controller');

const storage = require('../helpers/assignmentstorage');

const router = express.Router();

router.get('/', assignmentController.getProfiles);

router.post('/assignment', storage, assignmentController.postProfile);

module.exports = router;