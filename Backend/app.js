import express from 'express'
import dotenv from 'dotenv'
dotenv.config();
import cors from 'cors'
import { connectToDb } from './db/db.js';
import userRoutes from './routes/user.routes.js'
import cookieParser from 'cookie-parser';

connectToDb();
const app=express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

app.get('/',(req,res)=>{
    res.send("Hello")
});
app.use('/users',userRoutes);

export default app;