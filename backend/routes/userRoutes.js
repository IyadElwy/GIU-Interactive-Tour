const express = require("express");

const user = require('../models/userSchema')

const userController = require("../controllers/userController");
const general = require("../controllers/generalFunctionality");
const AppError = require("../utils/appError");

const router = express.Router();

router
    .route("/")
    .get(general.getAll(user))
    .post(async (req, res) => {

        try {
            const doc = await user.create(req.body);
            res.status(201).json({
                status: "Success",
                data: doc,
            });
        } catch (e) {
            res.status(500).json({
                status: "Error"
            });
        }


    });
router.route("/:email").get(async (req, res) => {
    const email = req.params.email;
    let query = user.findOne({email: email})


    const doc = await query;


    res.status(200).json({
        status: 'success',
        data: {
            data: doc,
        }
    });
})

router.route("/byid/:id").get(async (req, res) => {
    let query = user.findById(req.params.id);

    const doc = await query;


    res.status(200).json({
        status: 'success',
        data: {
            data: doc,
        }
    });
})


router.route("/:id").patch(async (req, res, next) => {
    const id = req.params.id;

    const doc = await user.findByIdAndUpdate(id, {
        $set: {
            Locations: req.body.Locations
        },
    });


    if (!doc) {
        return next(new AppError('No document found with that ID', 404));
    }

    res.status(200).json({
        status: 'success',
        data: {
            data: doc
        }
    });
});

module.exports = router;
