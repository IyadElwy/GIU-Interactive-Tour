const express = require("express");

const progressController = require("../controllers/progressController");

const router = express.Router();

router
.route('/')
.get(progressController.getProgress)
.patch(progressController.updateProgress)
.post(progressController.createProgress);

module.exports = router;


