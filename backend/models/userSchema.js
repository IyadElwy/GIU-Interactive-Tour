const mongoose = require('mongoose');
const Schema = mongoose.Schema

const userSchema = new Schema(
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
const User = mongoose.model('User', userSchema);

module.exports = User;