const mongoose = require('mongoose');

const progressSchema = mongoose.Schema(
    {
        Locations:[
            {
                Location:{
                    type:Boolean,
                    default:false
                }
            }
        ],
        UserId:{
            type:mongoose.Schema.ObjectId,
            ref:'user',
            required:true
        }
    }
);

const progress = mongoose.model('progress', progressSchema);

module.exports = progress;
