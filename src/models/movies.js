const mongoose = require ("mongoose");

const movieSchema = mongoose.Schema({

    id : {
        type : Number,
        require : true
    },
    title : {
        type : String,
        require : true
    },
    type : {
        type : String,
        require : true
    },
    poster : {
        type : String,
        require : true
    },
    description : {
        type : String,
        require : true
    },
     release_year: {
        type : String,
        require : true
    },
    age_certification : {
        type : String,
        require : true
    },
    runtime : {
        type : Number,
        require : true
    },
    genres : {
        type : Array,
        require : true
    },
    production_countries : {
        type : Array,
        require : true
    },
    seasons : {
        type : String,
        require : false
    },
    imdb_id : {
        type : String,
        require : true
    },
    imdb_score : {
        type : Number,
        require : true
    },
    imdb_votes : {
        type : Number,
        require : true
    },
    tmdb_popularity : {
        type : Number,
        require : true
    },
    tmdb_popularity : {
        type : Number,
        require : true
    }

});

module.exports = mongoose.model('Movie', movieSchema);