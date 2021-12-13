import React from 'react'
import Home from './Home'
import Cardd from './Cardd';
import Card2 from'./Card2';
import Footer from './Footer';
// import { Route} from "react-router-dom"

function HomePage({cartChk,item_description,description, fetchpizza,fetchburgers}) {


    
    return (
       <>
       <Home/>
       <Cardd   cartChk={cartChk} item_description={item_description}  description={description}/>
       <Card2   cartChk={cartChk} item_description={item_description}  description={description}/>
       <Footer/>
   </>
    )
}

export default HomePage
