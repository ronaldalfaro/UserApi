import express from 'express';
import jwt, { Secret } from 'jsonwebtoken';
import validator from 'validator';
import dotenv from 'dotenv';

//.env variables
dotenv.config();

const router = express.Router();

//Login route
router.post('/login', async (req: any, res: any) =>{

    //validate email and password is there
    if(req.body.email === "" || req.body.password === "") return res.status(400).send({message:'Debes ingresar correo electrónico y contraseña'});

    //validate email fortmat
    if(!validator.isEmail(req.body.email)) return res.status(400).send({message:'Ingresa un correo electrónico válido'});
        let password = process.env.PASSWORD;
        let email = process.env.EMAIL;
        if(req.body.email !== email || req.body.password !== password){
            return res.status(400).send({message:'Correo electrónico o contraseña no válido'});
        }else{
            const token = jwt.sign({_id: email}, process.env.TOKEN_SECRET as string);
            res.header('auth-token',token).send({token:token});
        }
});

module.exports = router;
