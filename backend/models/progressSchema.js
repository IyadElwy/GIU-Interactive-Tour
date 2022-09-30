const mongoose = require('mongoose');

const progressSchema = mongoose.Schema(
    {
        Locations: [{
            type: {
                type: mongoose.Schema.ObjectId,
                ref: 'Location'
            }
        }],
    }
);

const progress = mongoose.model('progress', progressSchema);

module.exports = progress;
