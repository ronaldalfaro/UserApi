import express, { Request, Response } from 'express';

const router = express.Router();
const verify = require('../controllers/authController');

//User Model
const User = require('../models/userModel');

//Get all users route
router.get('/', verify, async (req: Request, res: Response) =>{
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.json({
            message:error
        });
    }
});

//Get a specific user route
router.get('/:id', verify,async (req: Request, res: Response) =>{
    try {
        const user = await User.findOne({_id: req.params.id});
        res.json(user);
    } catch (error) {
        res.json({
            message:error
        });
    }
    
});

//Add a user route
router.post('/', verify,async (req: Request, res: Response) =>{
    //console.log(req.body);
    const user = new User({
        id_number: req.body.id_number,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        type: req.body.type
    });

    try {
        const savedUser = await user.save();
        res.json(user);
    } catch (error) {
        res.json({
            message:error
        });
    }
});

//Delete a specific user route
router.delete('/:id', verify,async (req: Request, res: Response) =>{
    try {
        const removedUser = await User.deleteOne({_id: req.params.id});
        res.json(removedUser);
    } catch (error) {
        res.json({
            message:error
        });
    }
    
});

//Update a specific user route
router.patch('/:id', verify,async (req: Request, res: Response) =>{
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