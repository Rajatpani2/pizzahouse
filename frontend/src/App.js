import React,{createContext} from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navvbar from './component/Navbar';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTimesCircle,faPizzaSlice, faAddressBook ,faMapMarked, faConciergeBell, faGlasses,faBars,faTimes,faPlus,faMinus, faShoppingCart,faArrowLeft,faGrinBeam } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import HomePage from './component/HomePage';
import {  BrowserRouter as Router , Switch, Route } from 'react-router-dom'
import Cart from './component/cart';
import { useState } from 'react';
import {items} from './component/cardItem'
import EmptyCart from './component/emptyCart';
import Thankspage from './component/Thankspage';
import { items2 } from './component/cardItem2';





library.add( fab,faTimesCircle, faPizzaSlice, faAddressBook , faMapMarked , faConciergeBell, faGlasses, faBars, faTimes,faPlus,faMinus, faShoppingCart,faArrowLeft,faGrinBeam )

const details_obj = createContext();
const order_details = createContext();


function App() {

  

      const [cart, setcart] = useState([]); //cart array


      // check wheather the cart is empty of haveing some values

     const [isempty, setisEmpty] = useState(true);

     // adress  holding state 

     const [details, setDetails] = useState({
       name:'',
       mobile:'',
       altmobile:'',
       address:'',
       pin:''
       
     });

     // description details

     const[description, setDescription] = useState([items[0]])

     


      //addition part
       const addItem = (Main_id,id_key) => {

        if(Main_id === items[0].Main_id){

          for(var i=0 ; i < items.length ; i++ ){
            if( id_key === items[i].id){
                setcart([...cart,items[i]])
                items[i].button = true ;
            }
          
          }
        }
        if(Main_id === items2[0].Main_id){

          for( i=0 ; i < items2.length ; i++ ){
            if( id_key === items2[i].id){
                setcart([...cart,items2[i]])
                items2[i].button = true ;
            }
          
          }
        }
           
          
           
          }
          
        
      
      //deletion part

       const dltItem =(Main_id,id_key)=>{
              
        if(Main_id === items[0].Main_id){
                  for( var i=0 ; i < items.length ; i++){
                       if(id_key === items[i].id){
                           
                            
                            items[i].button = false  ;
                            
                }
                setcart( cart.filter(item=> item.id   !==   id_key  ));
        }
      }
        if(Main_id === items2[0].Main_id){
          for(  i=0 ; i < items2.length ; i++){
            if(id_key === items2[i].id){
                
                 
                 items2[i].button = false  ;
                 
     }
               setcart( cart.filter(item=> item.id   !==   id_key  ));
                       
              }
        }
      }
      
      //cart checker function

      const cartChecker =()=>{
        if(cart.length < 1){
          setisEmpty(false);
        }
        else{
          setisEmpty(true);
        }
      }

     
    

    //address caller function
    const handleChange = (e)=>{
    setDetails({...details,[e.target.name]:e.target.value});
    }
   

    const item_description =(id_main_key,id_key)=>{
      
      if(id_main_key === items[0].Main_id){
      for(var i = 0 ; i < items.length ; i++){
        if (id_key === items[i].id){
              
          setDescription([items[i]]);
          // console.log(description);
        }
      }
    }
    if(id_main_key === items2[0].Main_id){
      for( i = 0 ; i < items2.length ; i++){
        if (id_key === items2[i].id){
              
          setDescription([items2[i]]);
          // console.log(description);
        }
      }
    }

    }

    const empty_cart =()=>{

          setcart([]);
      for(var i = 0 ; i < items.length ; i++ ){
          items[i].button=false;
      }
      for( i = 0 ; i < items2.length ; i++ ){
          items2[i].button=false;
      }

    }
    




    
    
       

  return (
    <details_obj.Provider value={details}>
       <order_details.Provider value={cart}>
        
    <div className="App">
          <Router>
             <Navvbar cartChk={cartChecker}/>

             <Switch>
                <Route path='/' exact > <HomePage pizza_adder= {addItem}  pizza_deleter={dltItem} cartChk={cartChecker} item_description={item_description} description={description}/></Route>
                
                 {isempty ? <Route path='/cart'> <Cart List={cart}  cartChecker={cartChecker} changeHandler={handleChange} _name={details.name} _mobile={details.mobile} _altmobile={details.altmobile} _address={details.address} _pin={details.pin} _details={details} cart_empty={empty_cart}/>   </Route>:  <Route path='/cart'><EmptyCart/></Route>}
                {isempty ? <Route path='/thanks'> <Thankspage List={cart} cartChecker={cartChecker}/></Route>:<EmptyCart/>}
                 
           </Switch>
         </Router>
       
        
        
    </div>
          
        </order_details.Provider>
    </details_obj.Provider>
  );
}

export default App;
export {details_obj };
export {order_details};
