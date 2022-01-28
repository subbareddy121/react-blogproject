import React from 'react'
import Foo1 from './FoodCompos/Foo1'
import Foo2 from './FoodCompos/Foo2'
import { NavLink } from 'react-router-dom'
import 'font-awesome/css/font-awesome.min.css';

export default function Food() {
    return (
        <div>
        <h1 className='bh'>Food</h1>
       <Foo1/>
       <Foo1/>
       <Foo1/>
       <Foo1/>
       <Foo1/>
       <Foo1/>
     
       
        <NavLink to='./FoodMore'><p className='barr'><i className="fa fa-arrow-down">Load More</i></p></NavLink>
        <div className='bol'>
        <h1 className='hd2'>Top Posts</h1>
        <Foo2/>
        <Foo2/>
        <Foo2/>
      
        
        
        </div>
        <div className='badd'>
      <p className='bad'>Adevertisement</p>
        </div>
        </div>
    )
}
