const { Schema, model, Types } = require('mongoose');

const roomSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    users: [{
        type: Types.ObjectId,
        ref: 'User'
    }]
});

module.exports = model('Room', roomSchema);