import React, { useState } from 'react'
import "./Login.css"
import { useHistory } from 'react-router-dom'

const Login = ({logedinuserdata}) => {

const [login_user, setLogin_user] = useState({
    email:"",
    password:""
})
const history = useHistory()

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
     await res.json()
    //  console.log(res);
     if(res.status === 200){
         window.alert("user login successfull")
         logedinuserdata()
         history.push("/")
     }
     if(res.status === 492){
         alert("must enter all the fields")
     }
     if(res.status=== 493){
         alert("email id not found")
     }
     if(res.status === 432){
         alert("user authentication failed")
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
                    <button type="submit" onClick={handleSubmit_login} id="login1">login</button>
                </form>
            </div>
        </div>
    )
}

export default Login
