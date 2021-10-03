import React , {useState,useEffect} from 'react';
import Navbar from 'react-bootstrap/Navbar'
import {  Nav} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Navbar.css'
import {Link} from 'react-router-dom';



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
      
     <Link to='/'> <Nav.Link href="#home">Home</Nav.Link></Link>
       <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link> 
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
      <li>Home</li>
      <li>feature</li>
      <li>Pricing</li>
    </ul>

  </div>
  

  
  
</>
    )
}

export default Navvbar
