const express = require("express")
const router = express.Router()
const usermodel = require("../models/userschema")
const authenticate = require("../controller/authenticate") 


router.post("/additems" ,authenticate, async(req,res)=>{
try{
    // console.log(req.body);
    
    const loggedin_user = await req.rootuser;
    const user = await usermodel.findOne({_id:loggedin_user._id})
    // console.log(user);
    const cartpushed =await user.cartPushITems(req.body)
    res.status(200).send(user.cart)
    

}catch(e){
 console.log(e);
 
}
})

router.post("/removeitem",authenticate ,async(req,res)=>{
     try{
         const {_id}=req.body
        //  console.log(req.body._id + "from remove item")
         
      const loggedin_user = await req.rootuser
    //   console.log(loggedin_user.name);
      
      const user = await usermodel.findOne({_id:loggedin_user._id})
    //   console.log(user);
      
      await user.cartpopItems(_id)
      res.status(200).send(user.cart)
     }catch(e){
      console.log(e);
     }
})

module.exports= router