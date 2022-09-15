const User = require("../models/userSchema");


exports.getAllUsers = async (req, res, next) => {
  try {
    const features = new APIFeatures(User.find(), req.query).filter().sort();
    const allUsers = await features.query;

    res.status(200).json({
      status: "Success",
      data: allUsers
    });
  } catch (error) {
    res.status(400).json({
      status: "Error",
      message: error.message
    });
  }
};

exports.createUser = async (req, res, next) => {
  try {
    const newUser = await User.create(req.body);
    res.status(201).json({
      status: "success",
      data: newUser
    });
  } catch (error) {
    res.status(400).json({
      status: "Error",
      message: error.message
    });
  }
};

exports.getUserById = (req, res, next) => {
  try {
    const foundUser = User.findById(req.params.id);
    if (!foundUser) {
      throw new Error("User not found");
      res.status(404).json({ status: "Error" });
    }

    res.status(201).json({ status: "Successs", data: foundUser });
  } catch (error) {
    res.status(400).json({ status: "Error", message: error.message });
  }
};

exports.updateEmailById = async (req, res, next) => {
  try {
    const updatedEmail = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      {}
    );

    res.status(200).json({
      status: "success",
      data: updatedEmail
    });
  } catch (err) {
    res.status(400).json({
      status: "Error",
      message: err.message
    });
  }
};
