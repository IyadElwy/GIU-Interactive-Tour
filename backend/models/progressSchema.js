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
        ],
        UserId:{
            type:mongoose.Schema.ObjectId,
                    ref:'user'
        }
    }
)

const progress = mongoose.model('progress', progressSchema);

module.exports = progress;
