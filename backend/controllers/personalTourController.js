const PersonalTour = require('./../models/personalTour_model');
const catchAsync = require('./../utils/catchAsync');
const general = require('./generalFunctionality');
const AppError = require('./../utils/appError');

/////////////////////////////////////////////////////////////////////////////////////////////

exports.getAllPersonalTours = general.getAll(PersonalTour);
exports.getPersonalTour = general.getOne(PersonalTour);
exports.createNewPersonalTour = general.createOne(PersonalTour);
exports.updatePersonalTour = general.updateOne(PersonalTour);
exports.deletePersonalTour = general.deleteOne(PersonalTour);


/////////////////////////////////////////////////////////////////////////////////////////////
