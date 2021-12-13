const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")



const userSChema = new mongoose.Schema({
    firstname:{
       type:String,
       required:true
    },
    lastname:{
       type:String,
       required:true
    },
    fullname:{
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
    cpassword:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    tokens:[
      {
         token:{
           type:String,
           required:true
      }
    }],
    cart:[
        {
            itemname:{
               type:String
           } ,
           price:{
               type:String
           },
           count:{
               type:Number
           },
           Main_id:{
               type:String
           },
           id:{
               type:String 
           }

        }
    ]
      
    

})

userSChema.pre("save" , async function(next){
    if(this.isModified("password")){
        console.log(this.isModified("password"));
         this.password = await bcrypt.hash(this.password , 12)
         this.cpassword = await bcrypt.hash(this.cpassword, 12)
    }
    next()
})

userSChema.methods.generateAuthToken = async function(){
    try{
        
     let new_token = await jwt.sign({_id:this._id} , process.env.SECREAT_KEY)
        this.tokens= this.tokens.concat({token:new_token})
        await this.save()
        return new_token
    }catch(e){
     console.log(e);
     
    }
}

userSChema.methods.cartPushITems = async function(product_frm_client){
    // console.log(product_frm_client);
    try{
        // console.log(this.cart);
        
     this.cart= this.cart.concat(product_frm_client)
     await this.save()
    }catch(e){
     console.log(e);
     
    }
    
}


userSChema.methods.cartpopItems = async function(id){
    
    try{
        function filterArray(item){
           return id !== item._id.toString()
        }  
      this.cart= this.cart.filter(filterArray)
    await this.save()
     
    }catch(e){
     console.log(e);
     
    }
}




const userModel = new mongoose.model("user" , userSChema)
module.exports = userModel 