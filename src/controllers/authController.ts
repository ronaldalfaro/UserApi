import express, { Request, Response, NextFunction } from 'express';

const jwt = require('jsonwebtoken');

module.exports = function(req: Request, res: Response, next: NextFunction) {

    const token = req.header('auth-token');

    //validate if request has token
    if(!token) return res.status(401).send({message:"Access Denied"});

    try {
      //if there is token then verify
        const verified = jwt.verify(token,process.env.TOKEN_SECRET);
        //req.user = verified;
        req = verified;
        next();
    } catch (error) {
        res.status(400).send({message:"Invalid token"});        
    }

}