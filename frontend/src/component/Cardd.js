import React ,{useState, useEffect} from 'react'
import Card from 'react-bootstrap/Card'
import { Button } from 'react-bootstrap'
import './Card.css'
import { Link } from 'react-router-dom'
// import  { items } from './cardItem'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



function Cardd({fetchpizza, pizza_adder ,pizza_deleter ,cartChk,item_description , description}) {

  const [topupPage, settopupPage] = useState(false);
  const [pizzas, setPizzas] = useState([])
  const [pageRefersh, setPageRefersh] = useState(true)



 
    
  const myFunction=()=>{
     
   
       settopupPage(!topupPage);
    
   }

   const description_loader=()=>{
     settopupPage(!topupPage);
   }
   
const pizzafromDB = async()=>{
try{  
    const data = await fetch("/aja" , {
      method:"GET",
       headers:{
            Accept:"application/json",
            "Content-Type":"application/json"
        }
     
    })
    
    const items = await data.json();
    
    if(data && data.status === 200){
      
      fetchpizza(items)
     
      setPizzas(items)
      
    }
    
    

}catch(e){
 console.log(e);
 
}

    }

   
   useEffect(()=>{

     pizzafromDB()
     // eslint-disable-next-line
   },[])

   
  const pizza_add =async (Main_id,id_key)=>{
  //  let local_variable = pizzas
   console.log("this is frontend");
   
          for(var i=0 ; i < pizzas.length ; i++ ){
            if( id_key === pizzas[i].id){

                pizzas[i].button =true
                // setPizzas(pizzas)
                setPageRefersh(!pageRefersh)
                pushItemtoCart(pizzas[i])

            }
          
          }
  }

  const pushItemtoCart = async (item_)=>{
          
    const res = await fetch("/additems",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        pizzaname:item_.BurgerName,
        price:item_.price,
        count:item_.count,
        Main_id:item_.Main_id,
        id:item_.id,
        _id:item_._id
      })
    })

    await res.json()
  }

  //pizza deledte
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

  const dltpizza =(Main_id,id_key)=>{
              
    for( var i=0 ; i < pizzas.length ; i++){
         if(id_key === pizzas[i].id){
              pizzas[i].button = false;  
              popItemfromCart(pizzas[i])
              setPageRefersh(!pageRefersh)
  }
  // setPizzas( pizzas.filter(item=> item.id   !==   id_key  ));

    }
  }

    return (
      <>
      <h2 className='card_heading'>select from our wide range of pizzas..</h2>
      <div className='card_container'>

          {pizzas.map(item=>{
              return (
                <div className="card1" key={item.id}>
                            <Card style={{ width: '18rem' }}>
                                   <figure className='img_contain'><Card.Img variant="top" src={item.image} /></figure> 
                                       <Card.Body>
                                          <Card.Title>{item.PizzaName}<span style={{marginLeft: '16px' ,color:'red'}}>₹{item.price}</span></Card.Title>
                                             
                                             
                                            <div style={{display:'flex'}}> { item.button ? <Button variant="primary" onClick={()=>dltpizza(item.Main_id,item.id)} style={{fontSize:'smaller',padding:'9px 4px',marginRight:'auto'}}>Remove from cart</Button> :<Button variant="primary" onClick={()=>pizza_add(item.Main_id,item.id)}>Add to cart</Button>}
                                             
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

export default Cardd
