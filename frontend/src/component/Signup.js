import React ,{useState}from 'react'
import "./Signup.css"
import {useHistory} from "react-router-dom"

const Signup = () => {
const [signup_details, setSignup_details] = useState({
  name:"",
  email:"",
  password:"",
  cpassword:"",
  address:"",
  phone:""
})
 const history = useHistory()

const signupChangeHandler=(e)=>{
  setSignup_details({...signup_details, [e.target.name]:e.target.value})
  // console.log(signup_details);
  
}



  const Signup_caller =async(e)=>{
    e.preventDefault()
try{
  const resp = await fetch("/signup" , {
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        name:signup_details.name,
        email:signup_details.email,
        password:signup_details.password,
        cpassword:signup_details.cpassword,
        address:signup_details.address,
        phone:signup_details.phone
      })
    })

    const data = await resp.json()
    console.log(data);
    if(!data || resp.status !==200){
      throw new Error("user resistration unsuccessful")
    }else{
      alert("resistration successfull")
      history.push("/login")
    }
  }catch(e){
    console.log(e +"error from client side sign up");
    
  }
    



  }
    return (
        <>
        <form method="POST">
             <div className="form-container">
             
                  <div className="left_side_form">
                      
                      <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Name</label>
                        <input onChange={signupChangeHandler} value={signup_details.name} name="name"type="text" class="form-control" id="exampleFormControlInput0" placeholder="antony gunsalvis"/>
                      </div>
                     
                     
                      <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">password</label>
                        <input onChange={signupChangeHandler} value={signup_details.password} name="password"type="password" class="form-control" id="exampleFormControlInput1" placeholder="abc$123"/>
                      </div>
                      <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Conform password</label>
                        <input onChange={signupChangeHandler} value={signup_details.cpassword} name="cpassword" type="password" class="form-control" id="exampleFormControlInput2" placeholder="conform password"/>
                      </div>
                  </div>
                  <div className="right_side_form">
                  <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Email address</label>
                        <input onChange={signupChangeHandler} value={signup_details.email} name="email"type="email" class="form-control" id="exampleFormControlInput3" placeholder="name@example.com"/>
                      </div>
                     <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Address</label>
                        <input onChange={signupChangeHandler} value={signup_details.address} name="address"type="text" class="form-control" id="exampleFormControlInput4" placeholder="enter address"/>
                      </div>
                      <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Phone no</label>
                        <input onChange={signupChangeHandler} value={signup_details.phone} name="phone" type="Number" class="form-control" id="exampleFormControlInput5" placeholder="enter phone"/>
                      </div>

                  </div>
                  <button className="signup_submit_btn" onClick={Signup_caller} type="submit" >Submit</button>
                  </div>
                  </form>
                


        </>
    )
}

export default Signup
