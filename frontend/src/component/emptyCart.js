import React from 'react'
import {Link} from 'react-router-dom'
import './emptycart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function EmptyCart() {
    return (
        
            <div className='empty_cart'>
                <FontAwesomeIcon icon="shopping-cart" className='footer_icons' style={{color:'red', margin:'20px' , fontSize:'100px'}}/>
            <h1>your cart is empty</h1>
            <p>once u add something to your cart u can veiw them here</p>
           <p>to continue shopping <Link to='/' id='prev_page'>CLICK HERE</Link></p> 
            </div>
        
    )
}

export default EmptyCart
