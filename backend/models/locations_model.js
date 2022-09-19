const mongoose = require('mongoose');
//////////////////////////////////////////////////////////////////////////////


const locationSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'A location has to have a name']
    },
    description: {
        type: String,
        required: [true, 'A location has to have a description']
    },
    ar_experience: {
        type: String,
        required: [true, 'A location has to link to an AR-Experience']
    }

});

//////////////////////////////////////////////////////////////////////////////
const location = mongoose.model('location', locationSchema);

module.exports = location;