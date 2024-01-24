const mongoose = require('mongoose');

const artist = mongoose.model('artist', {

    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }

});

module.exports = artist;