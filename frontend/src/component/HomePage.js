import React from 'react'
import Home from './Home'
import Cardd from './Cardd';
import Card2 from'./Card2';
import Footer from './Footer';

function HomePage({pizza_adder,pizza_deleter,cartChk,item_description,description}) {
    
    return (
        <>
        <Home/>
        <Cardd pizza_adder={pizza_adder}  pizza_deleter={pizza_deleter} cartChk={cartChk} item_description={item_description}  description={description}/>
        <Card2 pizza_adder={pizza_adder}  pizza_deleter={pizza_deleter} cartChk={cartChk} item_description={item_description}  description={description}/>
        <Footer/>
        </>
    )
}

export default HomePage
