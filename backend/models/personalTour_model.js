const mongoose = require('mongoose');
//////////////////////////////////////////////////////////////////////////////


const personalTourSchema = mongoose.Schema({
        UserId: {
            type: mongoose.Schema.ObjectId,
            ref: 'User',
            required: true
        },
        ChosenLocations: [{
            type: {
                type: mongoose.Schema.ObjectId,
                ref: 'Location'
            }
        }],
    }
);
//////////////////////////////////////////////////////////////////////////////
const personalTour = mongoose.model('personalTour', personalTourSchema);

module.exports = personalTour;