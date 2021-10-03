import React from 'react'
import Form from 'react-bootstrap/Form'
import { Button} from "react-bootstrap"
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link }from 'react-router-dom'

function Footer() {
    return (
        <div className='big-foot'>
        <div className="footer">
          <div className="form">
            <p>Sign in with us to order</p>
            <Form>
            <Form.Group controlId="formBasicEmail">
               <Form.Label style={{color:'white'}} >Email address</Form.Label>
               <Form.Control className='input' type="email" placeholder="Enter email" />
               <Form.Text className="text-muted" >
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword1">
             <Form.Label style={{color:'white'}}>Password</Form.Label>
             <Form.Control className='input' type="password" placeholder="Password" />
            </Form.Group>
             <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" style={{color:'white'}}/>
          </Form.Group>
          <Button variant="primary" type="submit">
           Submit
          </Button>
         </Form>
  
            </div>


            <div className="links">
                <h3 className='link_heading'>We will be happy to serve you</h3>
                <ul className="list-item">
                    <li className='lists'><FontAwesomeIcon icon="address-book" className='footer_icons' style={{color:'#0f9bf8'}}/> <Link to='/'>contact us</Link></li>
                    <li className='lists'><FontAwesomeIcon icon="pizza-slice" className='footer_icons' style={{color:'#0f9bf8'}}/> <Link to='/'>support</Link></li>
                    <li className='lists'><FontAwesomeIcon icon="map-marked" className='footer_icons' style={{color:'#0f9bf8'}}/> <Link to='/'>site map</Link></li>
                    <li className='lists'><FontAwesomeIcon icon="concierge-bell" className='footer_icons' style={{color:'#0f9bf8'}}/><Link to='/'> services</Link></li>
                    <li className='lists'><FontAwesomeIcon icon="glasses" className='footer_icons' style={{color:'#0f9bf8'}}/> <Link to='/'>visit us</Link></li>
                </ul>
            </div>
        </div>
        <div className="lower_footer">
          
          <ul className='list-item2'>
            <p>follow us</p>
            <li><FontAwesomeIcon icon={["fab", "facebook"]} style={{color:'#0f9bf8'}}/></li>
            <li><FontAwesomeIcon icon={["fab", "github"]} style={{color:'#0f9bf8'}}/></li>
            <li><FontAwesomeIcon icon={["fab", "linkedin"]} style={{color:'#0f9bf8'}}/></li>
            <li><FontAwesomeIcon icon={["fab", "twitter"]} style={{color:'#0f9bf8'}}/></li>
          </ul>
             <p className='copyright'>copyright  <span style={{color:'#0f9bf8'}}> ©</span>Rudra Debaarsi Das</p>
         
        </div>
            
        </div>
    )
}

export default Footer
