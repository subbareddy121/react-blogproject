import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Foo1() {
    return (
        <div>
        
        <NavLink to='/food/Article6' style={{ textDecoration: 'none' }}><p className='Foo1'>
        <p className='tdec txt7'><h1> Food</h1>Food is any substance consumed to provide nutritional support for an organism.</p>
        <p className='tdec t5'>Food / <span className='tdec t1'>Jan 09 2022</span></p>
        </p></NavLink>
        </div>
    )
}
