/*const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

//.env variables
require('dotenv/config');

const app = express();

//Middlewares
//validate all request are json
app.use(bodyParser.json());

//Import routes
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');

//use of /api/v1/xyz
app.use(process.env.BASE_URL+'/auth', authRoutes);
app.use(process.env.BASE_URL+'/users', userRoutes);

//Connect to DB
mongoose.connect(process.env.DB_CONNECTION,
{ useUnifiedTopology: true, useNewUrlParser: true  },
 ()=> console.log('connected to mongoDB and running in port 3000')
 );

//listening to the server in port 3000
//app.listen(process.env.PORT || 3000);
app.listen(port, () => {
  console.log(`[server]: Server is running at https://localhost:${port}`);
});*/
import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.listen(port, () => {
  console.log(`⚡️[server]: The Server is running at https://localhost:${port}`);
});