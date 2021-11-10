const mongoose = require("mongoose");

const userModal = mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,


    },
    phone:{
        type:Number,
        required:true,
        minLength:10,
        maxLenght:10
    },
    message:{
        type:String,
        required:true,
    }
})

// collection name 
const User = new mongoose.model("User" , userModal);
module.exports = User;