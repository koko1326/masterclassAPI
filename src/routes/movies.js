const express = require('express');
const router = express.Router();
const movieSchema = require("../models/movies")

//create movie
router.post('/movies', (req, res) => {
    const movie = movieSchema(req.body);
    console.log(req.body);
    movie
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({message : error}));
});


//get all movies
router.get('/movies', (req, res) => {
   movieSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({message : error}));

});

//get movies by ID
router.get('/movies/:id', (req, res) => {

    movieSchema
         .findById(req.params.id)
         .then((data) => res.json(data))
         .catch((error) => res.json({message : error}));

 });


 module.exports = router;

