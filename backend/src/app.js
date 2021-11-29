require('dotenv').config({path:'./config.env'})
const express = require("express")
const app = express()
const bodyparser = require("body-parser")
require("../db/connection")
const productmodel = require("../models/productschema")
const burgermodel = require("../models/burgerschema")
// const { response } = require('express')
const router = require("../router/userRouter")



app.use(express.json())
// app.use(bodyparser())
app.use(router)




const PORT = process.env.PORT 

const getprodct = async (req,res, next)=>{
    try{
        // console.log("req comming");
        
        const product = await productmodel.find();
        // console.log(product);
        
        // const data =await product.json()
        // console.log(data);
      
        req.product = product
        next()
    }catch(e){
        console.log(e);
        res.status(501).send({message:"error from server"})
        
    }
}

const getburger =async (req,res,next)=>{
  
try{
    const response = await burgermodel.find()
    req.burger = response
    
    
 next()
}catch(e){
 console.log(e);
 res.status(500).send("unable to fetch burgers")
 
}
}


app.get("/aja",getprodct, (req , res)=>{
res.status(200).send(req.product)
})

app.get("/burger",getburger ,(req,res)=>{
    res.status(200).send(req.burger)
})


app.get("/about" ,(req,res)=>{
    res.send("this is about us page")
} )

app.get("/cart", (req, res )=>{
    res.send("thsis the cart page")
})

app.get("/emptycart" , (req, res)=>{
    res.send("this is empty cartpage")
})
app.get("/ordercomform" , (req,res)=>{
    res.send("this is the conform order page")
})

app.post("/" , async (req,res)=>{
try{
 const newdata = await new productmodel({
    PizzaName:req.body.PizzaName,
    price:req.body.price,
    button:req.body.button,
    Main_id:req.body.Main_id,
    content:req.body.content,
    image:req.body.image

})

await newdata.save()

res.status(200).send(newdata)
// console.log(newdata);

 
}catch(e){
 console.log(e);

res.status(500).send({message:"count not resister"})
 
}

    
})


app.listen(PORT , ()=>{
    console.log(`listen ing to the port at ${PORT}`);
    
})