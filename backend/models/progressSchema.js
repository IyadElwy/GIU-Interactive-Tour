const mongoose = require('mongoose');

const progressSchema = mongoose.Schema(
    {
        Locations:[
            {
                Location:{
                    type:mongoose.Schema.ObjectId,
                    ref:'location'
                }
            }
        ]
    }
)

const progress = mongoose.model('progress', progressSchema);

module.exports = progress;
