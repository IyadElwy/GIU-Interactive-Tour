// get all users
// get user by id
// create user
// update email by id
const express = require("express");

const userController = require("../controllers/userController");

const router = express.Router();

router.route("/").get(userController.getAllUsers).post(userController.createUser);
router.route("/:id").get(userController.getUserById);
router.route("/:id/update-email").patch(userController.updateEmailById);

module.exports = router;
