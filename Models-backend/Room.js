const mongoose = require('mongoose');


const roomSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    maxcount:
    {
        type: Number,
        required: true

    },
    phonenumber:
    {
        type: String,
        required: true

    },
    rentperday:
    {
        type: String,
        required: true

    },
    imageurls: [],
    currentbookings: [],
    type: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
}, {
    timestamps: true,

})

module.exports = mongoose.model('Room', roomSchema);