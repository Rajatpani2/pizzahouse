const express = require("express")
const app = express()


const PORT = process.env.PORT || 5000


app.get("/",(req , res)=>{
    res.send("this is home page")
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


app.listen(PORT , ()=>{
    console.log(`listen ing to the port at ${PORT}`);
    
})