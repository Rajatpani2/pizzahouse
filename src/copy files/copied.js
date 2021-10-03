import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import './cart.css'
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Form from 'react-bootstrap/Form'



function Cart({List,cartChecker,changeHandler,_altmobile,_address,_mobile, _name}) {
       

        const [pageRefresher,setPageRefresher] = useState(false);
        cartChecker();
         //  var total_items = List.length ;
         
       
   
              const increaseValuee =(key_id)=>{
                    var i;
                    
                   
                    for( i=0 ; i < List.length ; i++ ){
                           if(key_id === List[i].id & List[i].count === 10){
                              alert('cant');
                           
                           }   
                           else if(key_id === List[i].id & List[i].count < 10 ){
                            List[i].count +=1 ;
                           //  total_items= List.length + 1;
                           
                           }
                    }
                     setPageRefresher(!pageRefresher);
                 };
  
      //   console.log(cart_value);
           
        
           const decreaseValue=(key_id)=>{
              for(var i=0 ; i < List.length ;  i++ ){
                 if(key_id === List[i].id & List[i].count > 1){
                    List[i].count -=1 ;
                }
              }
            setPageRefresher(!pageRefresher);
          }

          const sumValue = (value,price)=>{
                  var x;
                  x = value * price ;
                  return x.toFixed(2);
          }
          var total =0, result, items = 0 ;
          for( var i =0 ; i < List.length ; i++){
              
               if (List[i]){
                  total += List[i].count * List[i].price
                  result = total.toFixed(2);
                  
                  items += List[i].count;
           
               }
          }

         const handleSubmit =(e) =>{
        //    e.preventDefault();
          }

          
          
       

       return (
        <>
        <div className="cart_container">
            <div className="cart">
          <div className='cart-head'><div className='cart_Heading'><h3> Shopping cart</h3></div><div className='no_of_items'><h3>{items} items</h3></div></div>  

          <table id='table'>   
          <thead>
          <tr>
              <th>Product detail</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
          </tr>
          </thead>
          <tbody>

         {List.map(item => {
          return (
      
          <tr key={item.id} className='table_row'>
              <td><div className='product_details_cart'><div className='product_img_cart'><img src={item.image} alt="img_" /></div><div>{item.PizzaName}</div></div></td>
              <td>₹ {item.price}</td>
              <td><div className='count_container'><Link to='/cart'><button className='value_btn' onClick={()=>decreaseValue(item.id)}><FontAwesomeIcon className='Plus_minus_icon' icon='minus' /></button></Link><div className="box">{item.count}</div><Link to='/cart'><button className='value_btn' onClick={()=> increaseValuee(item.id)}><FontAwesomeIcon className='Plus_minus_icon' icon='plus' /></button></Link></div></td>
              <td>₹ {sumValue( item.count , item.price )}</td>
          </tr>
          
          ) })}
          </tbody>
      </table>
      <div className='cart-head' style={{borderBottom:'none'}}><div className='cart_Heading'><h3> Sub total</h3></div><div className='no_of_items'><h3>₹ {result}</h3></div></div>


          
                 <Link to='/'> <Button variant="outline-primary"><FontAwesomeIcon icon="arrow-left" className='footer_icons' style={{color:'#ffffff', marginRight:'4px'}}/>Go back</Button> {' '}</Link> 

            </div>
            <div className="summary">
                <h3 className='summery-head'>Order summery</h3>
                <div className='summery_block'> <div className='cart_Heading'><p> Items {items}</p></div><div className='no_of_items'><p>₹ {result} </p></div></div>
                     
                     <Form>
                          <Form.Group controlId="formBasicEmail">
                             <Form.Label id='form_label'>Enter Name</Form.Label>
                             <Form.Control className='input_field' type="text"  name ='name' placeholder="Enter Name" onChange={changeHandler} value={_name} />
                             
                          </Form.Group>

                       <Form.Group controlId="formBasicPassword">
                          <Form.Label id='form_label'>Mobile no</Form.Label>
                          <Form.Control className='input_field' type="number"  name ='mobile' placeholder="Mobile Number"  onChange={changeHandler} value={_mobile}/>
                          </Form.Group>

                          <Form.Group controlId="formBasicPassword">
                          <Form.Label id='form_label'> Alternate Mobile no</Form.Label>
                          <Form.Control className='input_field' type="number"  name ='altmobile' placeholder="Alternate number"  onChange={changeHandler} value={_altmobile}/>
                          </Form.Group>

                          <Form.Group controlId="formBasicPassword">
                          <Form.Label id='form_label'> Address</Form.Label>
                          <Form.Control className='text_area'  as="textarea" rows={3}  name ="address" placeholder="Add Address" onChange={changeHandler} value={_address}/>
                          </Form.Group>
                          
                        
                            <Link to='/thanks'><Button variant="primary" type="submit" onClick={handleSubmit}>check out</Button></Link> 
                 </Form>
            </div>
        
        </div>
           
        </>
    )
}

export default Cart
