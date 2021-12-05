const express = require("express")
const router = express.Router()
const usermodel = require("../models/userschema")
const authenticate = require("../controller/authenticate") 


router.post("/additems" ,authenticate, async(req,res)=>{
try{
    // console.log(req.body.product);
    
    const loggedin_user = await req.rootuser;
    const user = await usermodel.findOne({_id:loggedin_user._id})
    // console.log(user);
    const cartpushed =await user.cartPushITems(req.body.product)
    res.status(200).send(user.cart)
    

}catch(e){
 console.log(e);
 
}
})

module.exports= router