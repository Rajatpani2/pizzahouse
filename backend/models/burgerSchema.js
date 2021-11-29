const mongoose = require("mongoose")






const burgerSchema = new mongoose.Schema([{
    BurgerName:{
        type:String,
        required:true,
        unique:true
    },
    price:{
        type:Number,
        required:true
        
    },
    button:{
        type:Boolean,
        required:true
    },
    Main_id:{
        type:Number,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    }


}])

const burgermodel = new mongoose.model("burgers" , burgerSchema)
module.exports = burgermodel ;