
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navvbar from './component/Navbar';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPizzaSlice, faAddressBook ,faMapMarked, faConciergeBell, faGlasses,faBars,faTimes,faPlus,faMinus, faShoppingCart,faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import HomePage from './component/HomePage';
import {  BrowserRouter as Router , Switch, Route } from 'react-router-dom'
import Cart from './component/cart';
import { useState } from 'react';
import {items} from './component/cardItem'
import EmptyCart from './component/emptyCart';
import Thankspage from './component/Thankspage';




library.add( fab, faPizzaSlice, faAddressBook , faMapMarked , faConciergeBell, faGlasses, faBars, faTimes,faPlus,faMinus, faShoppingCart,faArrowLeft )

function App({additem}) {

      const [cart, setcart] = useState([]); //cart array


      // card resetter
     const [button1,setButton1] = useState(false);
     const [button2,setButton2] = useState(false);
     const [button3,setButton3] = useState(false);
      

     //cart checker

     const [isempty, setisEmpty] = useState(true);

     // adress  holding state 

     const [details, setDetails] = useState({
       name:'',
       mobile:'',
       altmobile:'',
       address:''
       
     });
     


      //addition part
       const addPaneerPizza = () => {
          setcart([...cart,items[0]]);
          setButton1(true);
          
           
          }
       const addMargaretta = () =>{
         setcart([...cart,items[2]]);
         setButton3(true);
         
       }  
       const addPanFried = () =>{
         setcart([...cart,items[1]]);
         setButton2(true);
         
       }
      //deletion part

       const dltTikkiPizza =()=>{
         setcart( cart.filter(item=>item.PizzaName ==='Pan fried pizza' || item.PizzaName==='Margaretta'));
         setButton1(false);
         
           
       }
       const dltpanfry =()=>{
        setcart( cart.filter(item=>item.PizzaName  ==='Paneer Tikki Pizza' || item.PizzaName==='Margaretta'));
        setButton2(false);
        
      }
      const dltMargaretta =()=>{
        setcart( cart.filter(item=>item.PizzaName ==='Paneer Tikki Pizza' || item.PizzaName==='Pan fried pizza'));
        setButton3(false);
        
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

    console.log(details)
       

  return (
    <div className="App">
          <Router>
              <Navvbar/>
           <Switch>
                <Route path='/' exact ><HomePage passtikkapizza= {addPaneerPizza} passPanfried={addPanFried} passMargaretta={addMargaretta} dltTikki={dltTikkiPizza} dltpanfry={dltpanfry} dltmargaretta={dltMargaretta} button1={button1} button2={button2} button3={button3} cartChk={cartChecker}/></Route>
                
                 {isempty ? <Route path='/cart'><Cart List={cart}  cartChecker={cartChecker} changeHandler={handleChange} _name={details.name} _mobile={details.mobile} _altmobile={details.altmobile} _address={details.address}/>   </Route>:  <Route path='/cart'><EmptyCart/></Route>}
                 <Route path='/thanks'><Thankspage/></Route>
           </Switch>
         </Router>
       
        
        
    </div>
  );
}

export default App;
