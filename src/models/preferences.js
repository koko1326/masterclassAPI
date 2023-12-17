const mongoose = require ("mongoose");

const preferencesSchema = mongoose.Schema({

    preferencesbyuser : {
        type : Array,
        require : true
    }

}
);

module.exports = mongoose.model('Preferences', preferencesSchema);