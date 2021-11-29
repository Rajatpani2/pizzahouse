const mongoose = require("mongoose")






const productSchema = new mongoose.Schema([{
    PizzaName:{
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

const productmodel = new mongoose.model("pizzas" , productSchema)
module.exports = productmodel ;