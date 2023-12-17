const mongoose = require ("mongoose");

const userSchema = mongoose.Schema({

    id : {
        type : Number,
        require : true
    },
    email : {
        type : String,
        require : true
    },
    name :  {
        type : String,
        require : true
    },
    phone : {
        type : String,
        require : true
    },
    password : {
        type : String,
        require : true
    }
});

module.exports = mongoose.model('User', userSchema);