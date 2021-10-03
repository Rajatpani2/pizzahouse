import React from 'react'
import {Link} from 'react-router-dom'
import { details_obj, order_details} from '../App'
import './Thanks.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'




const Thankspage = ({List,cartChecker}) => {

    cartChecker();

    var total =0, result ;
    for( var i =0 ; i < List.length ; i++){
        
         if (List[i]){
            total += List[i].count * List[i].price
            result = total.toFixed(2);
            
            
     
         }
    }
    return (
        <>
        <details_obj.Consumer>{(address_details) =>{
            return (
               <order_details.Consumer>{(cart_details)=>{
                return (
                    <>
                    <div className='thanks_'> 
                    <div className="thanks_header">
                    <h1>Thank u for ordering. <FontAwesomeIcon icon="grin-beam" className='footer_icons' style={{color:'#0f9bf8' }}/></h1>
                    <p>We have recieved your request.</p>
                    <div className='Order_container'>
                        <div style={{margin:'20px 0'}}>
                            <h5 style={{textDecoration:'underline',paddingBottom:'5px'}}>Address</h5>
                    <h4>{address_details.name}</h4>
                    <p >{address_details.address} ,PIN:{address_details.pin}</p></div>

                    <h6 style={{borderBottom:'1px solid white',paddingBottom:'5px'}}>Order details</h6>
                        <p>{cart_details.map(cart_item=> 



                              <span key={cart_item.id} ><span>{cart_item.count} </span> <span> {cart_item.PizzaName} ,</span></span>)}</p>
                       <p style={{borderTop:'1px solid blue', width:'100%'}} ><span style={{marginRight:'auto'}}> amount payble:   </span><span style={{marginLeft:'auto'}}>Rs.{result}</span> </p></div>
                       <br />
                       <p style={{padding:'20px,10px'}}>Go back to home page <Link to='/' style={{color:'#0f9bf8'}}>CLICK HERE</Link></p>
                       
                    </div>
                    </div>
                    </>
                         )
               }}
                   
          </order_details.Consumer>
            )
        }}
           
        </details_obj.Consumer>
        </>
    )
}

export default Thankspage;
