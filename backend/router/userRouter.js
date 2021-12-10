
const dotenv = require('dotenv')
dotenv.config({path:"./config.env"})
const express = require("express")
const router = express.Router()
const usermodel = require("../models/userschema")
const bcrypt = require("bcryptjs")
const authenticate = require("../controller/authenticate")
const cookieparser = require("cookie-parser")

router.use(cookieparser())

router.post("/signup", async (req,res)=>{

try{

    
    const { name , email, address , phone, password, cpassword} = req.body 
    console.log({ name , email, address , phone, password, cpassword});
    

    if( !name || !email || !address || !phone || !password || !cpassword ){
              res.status(422).send({message:"must enter all the fields"})

    }else if(password !== cpassword){
                res.status(422).send({message:"passowrd and confrom password must match"})
    }
 
    const existUser = await usermodel.findOne({email:email})
    // console.log(existUser);
    
    if(existUser){
        res.status(422).send({message:"email adress already present"})
    }
            else{
                const newUser = await new usermodel({
                        name:name,
                        email:email,
                        address:address,
                        phone:phone,
                        password:password,
                        cpassword:cpassword
            })

await newUser.save()
res.status(200).send({message:"Sign up sucessfull"})
}


}catch(e){
    console.log(e);
    
}
})



//login code


router.post("/login" ,async(req,res)=>{

    const { email , password} = req.body
try{
    if(!email || !password){
        res.status(492).send({message:"must enter all the field"})
    }else{

    const user = await usermodel.findOne({email:email})
    if(!user){
        // res.status(422).send({message:"email id not found"})
        res.status(493).send({message:"email id not found"})

    }else{

        const isMatching = await bcrypt.compare(req.body.password , user.password)
         if(isMatching){
           const token = await user.generateAuthToken();
          
           res.cookie("logintoken" ,token ,{
              expires:new Date(Date.now()+3600000),
              httpOnly:true
           })
           res.status(200).send(user)
           
         }else{
             res.status(432).send({message:"user authentication wrong"})
         }
    }
    }

}catch(e){
    console.log(e);
    
}

})

router.get("/navbar",authenticate ,async(req,res)=>{
    try{
        if(req.rootuser){
            res.status(200).send(req.rootuser)
        }
        else{
            res.status(401).send({message:"cookies not found"})
        }
       
    }catch(e){
     console.log(e);
     
    }
})

router.post("/logout" ,authenticate,async(req,res)=>{
try{
 if(req.rootuser){
     res.clearCookie("logintoken")
     res.status(200).send({message:"logged out successfull"})
 }
}catch(e){
 console.log(e);
 
}
})


module.exports=router