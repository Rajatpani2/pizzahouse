import React,{createContext, useEffect} from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navvbar from './component/Navbar';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTimesCircle,faPizzaSlice,faHamburger, faAddressBook ,faMapMarked, faConciergeBell, faGlasses,faBars,faTimes,faPlus,faMinus, faShoppingCart,faArrowLeft,faGrinBeam ,faUser} from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import HomePage from './component/HomePage';
import {  BrowserRouter as Router , Switch, Route } from 'react-router-dom'
import Cart from './component/cart';
import { useState } from 'react';
import {items} from './component/cardItem'
import EmptyCart from './component/emptyCart';
import Thankspage from './component/Thankspage';
import { items2 } from './component/cardItem2';
import Signup from './component/Signup';
import Login from './component/Login';





library.add( fab,faTimesCircle,faHamburger, faPizzaSlice, faAddressBook , faMapMarked , faConciergeBell, faGlasses, faBars, faTimes,faPlus,faMinus, faShoppingCart,faArrowLeft,faGrinBeam ,faUser)

const details_obj = createContext();
const order_details = createContext();



function App() {

  

      const [cart, setcart] = useState([]); //cart array
      const [loggedUser, setLoggedUser] = useState() //loged in user data



      // check wheather the cart is empty of haveing some values

     const [isempty, setisEmpty] = useState(false);

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


      
      //cart checker function

      const cartChecker =()=>{
        console.log("this is called");
        cart.length=1
        if(cart.length < 1){
          console.log(cart.length);
          
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
    


//loggedin users authentication function
const loggedinUser = async()=>{
  try{
    const res = await fetch("/navbar",{
      method:"GET",
      headers:{
        Accept:"application/json",
      "Content-Type":"application/json"
      },
      credentials:"include"
    })
  
    const userData = await res.json()
    
    if(userData && res.status === 200){
      setLoggedUser(userData)
      
    }
    else{
      setLoggedUser()
    }
  }catch(e){
   console.log(e);
   
  }
  }


  // authentication function call ends
  useEffect(()=>{
    loggedinUser()
  },[])
    
       

  return (
    <details_obj.Provider value={details}>
       <order_details.Provider value={cart}>
        
    <div className="App">
          <Router>
             <Navvbar cartChk={cartChecker} loggedUser={loggedUser} loggedinUser={loggedinUser} />

             <Switch>
                <Route path='/' exact > <HomePage   cartChk={cartChecker} item_description={item_description} description={description}/></Route>

                 <Route path='/thanks' exact><Thankspage List={cart} /></Route>
                 <Route path='/cart' exact>{isempty ? <Cart List={cart}  cartChecker={cartChecker} changeHandler={handleChange} _name={details.name} _mobile={details.mobile} _altmobile={details.altmobile} _address={details.address} _pin={details.pin} _details={details} cart_empty={empty_cart}/>:<EmptyCart/>}</Route>
                 <Route path="/signup" exact><Signup/></Route>
                 <Route path="/login" exact><Login logedinuserdata={loggedinUser}/></Route>
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
