const mongoose = require('mongoose');

const progressSchema = mongoose.Schema(
    {
        Locations: [{
            location: {
                type: 'String'
            },
            seen: {
                type: 'boolean'
            }
        }],
    }
);

const progress = mongoose.model('progress', progressSchema);

module.exports = progress;
