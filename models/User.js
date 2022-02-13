const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/helpers');

const UserSchema  = new Schema({
    userName: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Thought'
        }
    ]
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
)

// UserSchema.virtual('friendCount').get(function() {
//     return this.friends.length;
// })

const User = model('User', UserSchema);

module.exports = User;