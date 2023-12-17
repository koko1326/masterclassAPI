const express = require('express');
const router = express.Router();
const userSchema = require("../models/user")

//create user
router.post('/users', (req, res) => {
    const user = userSchema(req.body);
    console.log(req.body);
    user
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({message : error}));
});

//get all users
router.get('/users', (req, res) => {
   userSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({message : error}));

});

//get users by ID
router.get('/users/:id', (req, res) => {

    userSchema
         .findById(req.params.id)
         .then((data) => res.json(data))
         .catch((error) => res.json({message : error}));

 });

//update data from user by ID

router.put('/users/:id', (req, res) => {
    const {id } = req.params;
    const {name, email, phone, password } = req.body;
    
    userSchema
         .updateOne({ _id : id},{$set: {name, email, phone, password}})
         .then((data) => res.json(data))
         .catch((error) => res.json({message : error}));
 });

//delete user
router.delete('/users/:id', (req, res) => {

    userSchema
         .findById(req.params.id)
         .then((data) => res.json(data))
         .catch((error) => res.json({message : error}));

 });



module.exports = router;
