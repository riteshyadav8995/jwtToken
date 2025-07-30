import express from 'express';
const app=express();
const port=8000;

import dotenv from 'dotenv';
import router from './routes/UserRoute.js';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
dotenv.config();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

mongoose.connect('mongodb+srv://riteshyadav8995:vEerCwwl6MjX0fZp@cluster0.jelzqfq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',{
    // string option
    useUnifiedTopology:true,
    useNewUrlParser:true
}).then(()=>{
    console.log("connected to db")
})


app.use("/api/v1/user",router); // router middleware
app.listen(process.env.PORT,()=>{
    console.log("app is running on port",process.env.PORT);
})