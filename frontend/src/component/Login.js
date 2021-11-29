import React, { useState } from 'react'
import "./Login.css"

const Login = () => {

const [login_user, setLogin_user] = useState({
    email:"",
    password:""
})

const logindata_changeHandler=(e)=>{
    setLogin_user({...login_user ,[e.target.name]:e.target.value})
    // console.log(login_user);
    
}

const handleSubmit_login=async(e)=>{
    e.preventDefault();
    try{
     const res= await fetch("/login" , {
         method:"POST",
         headers:{
             "Content-Type":"application/json"
         },
         body:JSON.stringify({
             email:login_user.email,
             password:login_user.password
         }),
         credentials:"include"
     })
     const userdata = await res.json()
    //  console.log(userdata);
     if(userdata){
         window.alert("user login successfull")
     }
     
    }catch(e){
     console.log(e);
     
    }
    
}

    return (
        <div className="form-contain">
            <div className="login_form">
                <form className="insideform">
                    <label htmlFor="">Email</label>
                    <input type="email" name="email" value={login_user.email} onChange={logindata_changeHandler} placeholder="ex- abc@gmail.com"/>
                     <br />
                    <label htmlFor="">Password</label>
                    <input type="password" name="password"  value={login_user.password} onChange={logindata_changeHandler} placeholder="enter password"/>
                    <button type="submit" onClick={handleSubmit_login}>login</button>
                </form>
            </div>
        </div>
    )
}

export default Login
