import express from 'express'
import dotenv from 'dotenv'
dotenv.config();
import cors from 'cors'
import { connectToDb } from './db/db.js';
connectToDb();
const app=express();

app.use(cors());

app.get('/',(req,res)=>{
    res.send("Hello")
});

export default app;