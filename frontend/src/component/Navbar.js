import React , {useState,useEffect} from 'react';
import Navbar from 'react-bootstrap/Navbar'
import {  Nav} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Navbar.css'
import {Link } from 'react-router-dom';



function Navvbar({cartChk}) {

const [click, setclick] = useState(false);

useEffect(() => {
        
  if (window.innerWidth > 800 ){
      setclick(false);
  }
},[]);

const handleClickon = ()=>setclick(!click);

  
    return (
        <>
  <Navbar bg="dark" variant="dark" sticky="top" className="navbar">
  <FontAwesomeIcon icon="pizza-slice" style={{color:'red'}}/>
    <Navbar.Brand href="#home">PizzaHouse</Navbar.Brand>
    <Nav className='mr-auto'>

     <Link to="/"><Nav.Link href="/">Home</Nav.Link></Link>
     <Link to="/signup"> <Nav.Link href="/signup">Signup</Nav.Link></Link>
     <Link to="/login"> <Nav.Link href="/login">Login</Nav.Link></Link>
        
    </Nav>
    {/* <Form inline className='navbar_form'>
      <FormControl type="text" placeholder="search pizza" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form> */}
    <Link to='/cart' style={{color:'#ffffff', textDecoration:'none'}}>Cart <FontAwesomeIcon icon="shopping-cart" className='footer_icons' style={{color:'#ffffff', marginRight:'4px'}} onClick={cartChk}/></Link>
    {!click ? <FontAwesomeIcon icon="bars" style={{color:'white'}} onClick={handleClickon} className='fa_bars'/> :  <FontAwesomeIcon icon="times" style={{color:'white'}} onClick={handleClickon} className='fa_timess'/>}
    
    
    

  </Navbar>
     <div className={click ? 'dropdown' :'dropdwon_off'}>
    <ul >
     <Link to='/'><li>Home</li></Link> 
     <Link to="/signup"><li>Sign up</li></Link> 
     <Link to='/login'><li>Login</li></Link>
      
    </ul>

  </div>
  

  
  
</>
    )
}

export default Navvbar
