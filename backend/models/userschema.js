const mongoose = require("mongoose")


const userSChema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    password:{
        type:String,
        required:true

    },
    cpasword:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    }

})


const userModel = new mongoose.model("user" , userSChema)
module.exports = userModel 