import React from 'react'
import { NavLink } from 'react-router-dom'


export default function BCompo2() {
    return (
        <div>
        <NavLink to='/bollywood/Article3' style={{ textDecoration: 'none' }}><p className='b5'>
        <p className='tdec txt8'><h1>Bollywood </h1></p>
        <p className='tdec t6'>Bollywood / <span className='tdec t1'>Jan 09 2022</span></p>
        </p>
        </NavLink>
        </div>
    )
}
