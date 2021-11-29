import React from 'react'
import Home from './Home'
import Cardd from './Cardd';
import Card2 from'./Card2';
import Footer from './Footer';
// import { Route} from "react-router-dom"

function HomePage({pizza_adder,pizza_deleter,cartChk,item_description,description, fetchpizza,fetchburgers}) {


    
    return (
       <>
       <Home/>
       <Cardd fetchpizza ={fetchpizza} pizza_adder={pizza_adder}  pizza_deleter={pizza_deleter} cartChk={cartChk} item_description={item_description}  description={description}/>
       <Card2 fetchburgers={fetchburgers} pizza_adder={pizza_adder}  pizza_deleter={pizza_deleter} cartChk={cartChk} item_description={item_description}  description={description}/>
       <Footer/>
   </>
    )
}

export default HomePage
