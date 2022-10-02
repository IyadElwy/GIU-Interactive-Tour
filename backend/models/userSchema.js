const mongoose = require('mongoose');
const Schema = mongoose.Schema

const userSchema = new Schema(
    {
        email: {
            type: 'string',
            required: [true, 'user must have an email'],
            unique: true,
            trim: true,
        },
        Locations: [{
            location: {
                type: 'String'
            },
            seen: {
                type: 'boolean'
            }
        }]

    })
const User = mongoose.model('User', userSchema);

module.exports = User;