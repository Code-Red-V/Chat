const { Schema, model, Types } = require('mongoose');

const massageSchema = new Schema({
    content: {
        type: String,
        required: true
    },
    userId: {
        type: Types.ObjectId,
        required: true,
        ref: 'User'
    }
},{
    timestamps: true
});

module.exports = ('Massage', massageSchema);