import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Foo2() {
    return (
        <div>
        <NavLink to='/food/Article6' style={{ textDecoration: 'none' }}><p className='Foo2'>
        <p className='tdec txt8'><h1>Food</h1></p>
        <p className='tdec t6'>Food / <span className='tdec t1'>Jan 09 2022</span></p>
        </p></NavLink>
        </div>
    )
}
