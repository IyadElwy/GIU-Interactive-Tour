const Location = require('./../models/locations_model');
const catchAsync = require('./../utils/catchAsync');
const general = require('./generalFunctionality');
const AppError = require('./../utils/appError');

/////////////////////////////////////////////////////////////////////////////////////////////

exports.getAllLocations = general.getAll(Location);
exports.getLocation = general.getOne(Location);
exports.createNewLocation = general.createOne(Location);
exports.updateLocation = general.updateOne(Location);
exports.deleteLocation = general.deleteOne(Location);


/////////////////////////////////////////////////////////////////////////////////////////////
