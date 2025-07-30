import { response } from "express";
import userModel from "../models/UserModel.js";

import jwt from 'jsonwebtoken';
const handleUserSignUp=(req,res)=>{
    
    try{
    userModel.create(req.body).then(()=>{
         res.json({
            message:"Created succesfully"
         }).status(201);
    }).catch((err)=>{
        res.json({
            message:"this is wrong",err:err
        }).status(500);
    })
} catch(err){
    res.json({
        message:"This is wrong",err:err
    }).status(500);
}

}

const handleUserLogin=(req,res)=>{
    try{
    let {email}=req.body; // destrucion of object
    userModel.find({email:email}).then((response)=>{
        if(response.length>=1){
            jwt.sign(req.body,process.env.SECRET_KEY,(err,token)=>{
                if(err){
                    res.json({
                        message:"this is wrong",err:err
                    }).status(500);
                }
                else{
                  res.json({
                    message:"login succesfull",
                    data:req.body,
                    token:token
                  })  
                }
            })
        }
    })
   }
   catch(err){
    res.json({
        message:"this is wrong",err:err
    })
   } 
}

const getDetails=(req,res)=>{

}

export default { 
    handleUserSignUp,
    handleUserLogin,
    getDetails
}