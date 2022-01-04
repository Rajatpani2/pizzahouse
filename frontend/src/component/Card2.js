import React ,{useState , useEffect} from 'react'
import Card from 'react-bootstrap/Card'
import { Button } from 'react-bootstrap'
import './Card.css'
import { Link } from 'react-router-dom'
// import  { items2 } from './cardItem2'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Spinner from 'react-bootstrap/Spinner'



function Cardd({ cartChk,item_description , description}) {

  const [topupPage, settopupPage] = useState(false);
  const [burgerArray, setburgerArray] = useState([])
  const [pageRefersh, setPageRefersh] = useState(true)
  const [loading, setLoading] = useState(true)



 
    
  const myFunction=()=>{
       settopupPage(!topupPage);
   }

   const description_loader=()=>{
     settopupPage(!topupPage);
   }


   const jsonconverter =async ()=>{
    
    const response = await fetch("/burger" , {
      method:"GET",
      headers:{
        Accept:"application/json",
        "Content-Type":"application/json"
      }
    })

  
    const data = await response.json()

    if (data && response.status === 200){
      setburgerArray(data)
      setTimeout(()=>{
        setLoading(!loading)
      },5000)
    }
     
   }
   const pushItemtoCart = async (item_)=>{
          
    const res = await fetch("/additems",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        itemname:item_.BurgerName,
        price:item_.price,
        count:item_.count,
        Main_id:item_.Main_id,
        id:item_.id,
        _id:item_._id
      })
    })

    await res.json()
  }

   //burger add function

   const burger_add = (Main_id,id_key)=>{
    //  let local_variable = pizzas
     
            for(var i=0 ; i < burgerArray.length ; i++ ){
              if( id_key === burgerArray[i].id){
  
                burgerArray[i].button =true
                  // setPizzas(pizzas)
                  setPageRefersh(!pageRefersh)
                  pushItemtoCart(burgerArray[i])
  
              }
            
            }
    }

    //delete burger
    const  popItemfromCart=async(item_)=>{
      // console.log(item_);
      
      try{
        const res = await fetch("/removeitem",{
          method:"POST",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify({ _id:item_._id})
            
          
        }) 
        await res.json()
        
  
      }catch(e){
      console.log(e);
      
      }
        }
    
  const dltburger =(Main_id,id_key)=>{
              
    for( var i=0 ; i < burgerArray.length ; i++){
         if(id_key === burgerArray[i].id){
              burgerArray[i].button = false; 
              popItemfromCart(burgerArray[i]) 
              setPageRefersh(!pageRefersh)

  }
  // setPizzas( pizzas.filter(item=> item.id   !==   id_key  ));

    }
  }

   useEffect(() => {
     jsonconverter()
     // eslint-disable-next-line
   }, [])
  
  
if(loading){
  return(
    <div className="loading">
      <Spinner animation="border" variant="primary" />
      <h3>Loading <FontAwesomeIcon className="square" icon="hamburger" style={{color:'red',paddingLeft:'10px'}}/>burgers...</h3>
    </div>
  )
}else{
  return (
    <>
    <h2 className='card_heading'>select from our wide range of burgers..</h2>
    <div className='card_container'>

        {burgerArray.map(item=>{
            return (
              <div className="card1" key={item.id}>
                          <Card style={{ width: '18rem' }}>
                                 <figure className='img_contain'><Card.Img variant="top" src={item.image} /></figure> 
                                     <Card.Body>
                                        <Card.Title>{item.BurgerName}<span style={{marginLeft: '16px' ,color:'red'}}>₹{item.price}</span></Card.Title>
                                           
                                           
                                          <div style={{display:'flex'}}> { item.button ? <Button variant="primary" onClick={()=>dltburger(item.Main_id,item.id)} style={{fontSize:'smaller',padding:'9px 4px',marginRight:'auto'}}>Remove from cart</Button> :<Button variant="primary" onClick={()=>burger_add(item.Main_id,item.id)}>Add to cart</Button>}
                                           
                                           <Button variant="danger" onClick={()=>{
                                                                                item_description(item.Main_id,item.id)
                                                                                 description_loader()}
                                                                                 } style={{marginLeft:'auto'}}>Description</Button></div>
                                    </Card.Body>
                            </Card>
                     </div>
            )}
      )}
   


      </div>
      <div className="nxt-page-Div">
        <div className='nxt-page-Div1'>
           <Link to='/cart'><Button variant="primary" size="lg" className='nxt_page-Btn' onClick={cartChk}>
               <FontAwesomeIcon icon="shopping-cart" className='footer_icons' style={{color:'#ffffff', marginRight:'4px'}}/><i> VIEW CART</i>
                  </Button></Link>
        </div>
      
      </div>
      
       <div className={topupPage ? 'division_des1_ouside':'division_des_inside'}>
       
          {description.map(des_item => {
              return (
                <div className="description" key={des_item.id}>
                
                <div className="img_container">
                  <img src={des_item.image} alt="Pizza_image" className='descri_iimg'/>
                </div>
                <div className="description_container">
                  
                    <FontAwesomeIcon icon="times-circle" style={{color:'black'}} onClick={myFunction} className='times-circle'/>
                     <h3>{des_item.PizzaName}</h3>
                     <p>{des_item.content}</p>
                     <h4>{des_item.price}</h4>
                     </div>
                </div>
              
              )
        })
         
        
        }
        </div>
              


    
      
      
      </>
  )
}


   
}

export default Cardd
