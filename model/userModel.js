import mongoose from "mongoose";
const userSchema=new mongoose.Schema({
     name:{
        type:String,
        required: true
     },

     weight:{
        type:Number,
        required: true
     },

     sets:{
         type:Number,
          required: true
     },
     reps:{
         type:Number,
         required: true
     }
})

export default mongoose.model("users",userSchema)