const express = require("express");
const progress = require('../models/progressSchema');
const progressController = require("../controllers/progressController");
const general = require("../controllers/generalFunctionality");

const router = express.Router();

router
    .route('/')
    .get(general.getAll(progress))
    .patch(general.updateOne(progress))
    .post(general.createOne(progress));

router
    .route('/:id')
    .get(general.getOne(progress));


module.exports = router;


