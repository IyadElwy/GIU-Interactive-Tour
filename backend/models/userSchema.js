const mongoose = require('mongoose');
const Schema = mongoose.Schema

const user = new Schema(
{
    email:{
        type: 'string',
        required: [true,'user must have an email'],
        unique: true,
        trim:true,
    },
    personalTour:[{
        type:mongoose.Schema.ObjectId,
        ref:'personalTour'
    }],
    progress:[{
        type:mongoose.Schema.ObjectId,
        ref:'progress'
    }],

})