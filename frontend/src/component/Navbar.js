import React , {useState,useEffect} from 'react';
import Navbar from 'react-bootstrap/Navbar'
import {  Nav} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Navbar.css'
import {Link , useHistory} from 'react-router-dom';



function Navvbar({cartChk,loggedUser,loggedinUser}) {

const [click, setclick] = useState(false);
const history= useHistory()

useEffect(() => {
  
  if (window.innerWidth > 800 ){
      setclick(false);
  }
},[]);

const handleClickon = ()=>setclick(!click);

const logotfunction=async()=>{
  // console.log('bla');
  
  try{
    const res = await fetch("/logout",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
       credentials:"include"

    })
     await res.json()
    if(res.status === 200 ){
      alert("logout successfull")
      loggedinUser()
      history.push("/")
    }
   
  }catch(e){
   
  }
}

  
    return (
        <>
  <Navbar bg="dark" variant="dark" sticky="top" className="navbar">
  <FontAwesomeIcon icon="pizza-slice" style={{color:'red'}}/>
    <Navbar.Brand href="#home">PizzaHouse</Navbar.Brand>
    <Nav className='mr-auto'>

     <Link to="/"><Nav.Link href="/">Home</Nav.Link></Link>
     <Link to="/signup"> <Nav.Link href="/signup">Signup</Nav.Link></Link>
     <Link to="/login"> <Nav.Link href="/login">Login</Nav.Link></Link>
     <Link to="" onClick={logotfunction}> <Nav.Link href="" >Logout</Nav.Link></Link>
        
    </Nav>
   
    <Link to='/cart' style={{color:'#ffffff', textDecoration:'none'}}>Cart <FontAwesomeIcon icon="shopping-cart" className='footer_icons' style={{color:'#ffffff', marginRight:'4px'}} onClick={cartChk}/></Link>
    <Link to='' style={{color:'#ffffff', textDecoration:'none',marginLeft:"10px"}}>{loggedUser ? loggedUser.name: "Guest"} <FontAwesomeIcon icon="user" className='footer_icons' style={{color:'#ffffff', marginRight:'4px'}}/></Link>

    {!click ? <FontAwesomeIcon icon="bars" style={{color:'white'}} onClick={handleClickon} className='fa_bars'/> :  <FontAwesomeIcon icon="times" style={{color:'white'}} onClick={handleClickon} className='fa_timess'/>}
    
    
    

  </Navbar>
     <div className={click ? 'dropdown' :'dropdwon_off'}>
    <ul >
     <Link to='/'><li>Home</li></Link> 
     <Link to="/signup"><li>Sign up</li></Link> 
     <Link to='/login'><li>Login</li></Link>
     <Link to='/logout'><li>Logout</li></Link>
      
    </ul>

  </div>
  

  
  
</>
    )
}

export default Navvbar
