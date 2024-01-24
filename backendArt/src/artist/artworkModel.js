const mongoose = require('mongoose');

const artwork = mongoose.model('artwork', {

    title:{
        type: String
    },

    idArtist:{
        type: String
    },
    
    description:{
        type: String
    },
    
    date:{
        type: String
    },
    
    image:{
        type: String,
    },
    
    tags:{
        type: Array
    },
    price:{
        type: Number
    }

})
module.exports = artwork;