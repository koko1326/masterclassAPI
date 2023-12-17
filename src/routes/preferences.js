const express = require('express');
const router = express.Router();
const preferencesSchema = require("../models/preferences");


//get preferences by ID
router.get('/preferences/:id', (req, res) => {

    preferencesSchema
         .findById(req.params.id)
         .then((data) => res.json(data))
         .catch((error) => res.json({message : error}));
 });


 module.exports = router;

