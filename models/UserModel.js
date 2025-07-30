import mongoose from 'mongoose';

const UserSchema=new mongoose.Schema({
   name:String,
   email:String,
   password:String,

},{timestamps:true});

const userModel=mongoose.model("userModel",UserSchema);

export default userModel;