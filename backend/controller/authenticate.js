const dotenv = require("dotenv")
dotenv.config({path:"./config.env"})
const jwt = require("jsonwebtoken")
const userSchema = require("../models/userschema")



const authenticate = async(req,res,next)=>{

try{
    const token = req.cookies.logintoken
    // console.log(token +" from line 12")
    if(token){
        const isloggedin = jwt.verify(token, process.env.SECREAT_KEY)
        // console.log(isloggedin);
        
        const user = await userSchema.findOne({_id:isloggedin,"tokens.token":token })

            req.rootuser=user
            req.token=token

             
    }
    
 next()
}catch(e){
 console.log(e);
 
}

}
module.exports= authenticate