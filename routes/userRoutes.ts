const express = require('express');
const router = express.Router();
const verify = require('../controllers/authController');

//Import User Model
const User = require('../models/userModel');

//Get all users route
router.get('/', verify, async (req: any, res: any) =>{
    try {
        const beers = await User.find();
        res.json(beers);
    } catch (error) {
        res.json({
            message:error
        });
    }
});

//Get a specific user route
router.get('/:id', verify,async (req: any, res: any) =>{
    try {
        const user = await User.findOne({_id: req.params.id});
        res.json(user);
    } catch (error) {
        res.json({
            message:error
        });
    }
    
});

//Submit a user route
router.post('/', verify,async (req: any, res: any) =>{
    //console.log(req.body);
    const user = new User({
        id_number: req.body.id_number,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        type: req.body.type
    });

    try {
        const savedBeer = await user.save();
        res.json(user);
    } catch (error) {
        res.json({
            message:error
        });
    }
});

//Delete a specific user route
router.delete('/:id', verify,async (req: any, res: any) =>{
    try {
        const removedUser = await User.remove({_id: req.params.id});
        res.json(removedUser);
    } catch (error) {
        res.json({
            message:error
        });
    }
    
});

//Update a specific user route
router.patch('/:id', verify,async (req: any, res: any) =>{
    try {
        const updatedUser = await User.updateOne(
            {_id: req.params.id},
            {
                $set:{
                    id_number: req.body.id_number,
                    first_name: req.body.first_name,
                    last_name: req.body.last_name,
                    type: req.body.type
                }
            });

        const user = await User.findOne({_id: req.params.id});

        res.json(user);
    } catch (error) {
        res.json({
            message:error
        });
    }
    
});

module.exports = router;