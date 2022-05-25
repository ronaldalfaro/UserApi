import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import mongoose, { ConnectOptions } from 'mongoose';
import bodyParser from 'body-parser';

//.env variables
dotenv.config();

const app: Express = express();
const port = process.env.PORT;

//Middlewares
//validate all request are json
app.use(bodyParser.json());

//Import routes
const userRoutes = require('./src/routes/userRoutes');
const authRoutes = require('./src/routes/authRoutes');

//use of /api/v1/xyz
app.use(process.env.BASE_URL+'/auth', authRoutes);
app.use(process.env.BASE_URL+'/users', userRoutes);

//Connect to DB
mongoose.connect(process.env.DB_CONNECTION as string,
  { useUnifiedTopology: true, useNewUrlParser: true  } as ConnectOptions,
   ()=> console.log('connected to mongoDB and running in port 3000')
   );

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});