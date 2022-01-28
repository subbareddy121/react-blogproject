import React from 'react'
import { NavLink } from 'react-router-dom'

export default function HCompo2() {
    return (
        <div>
        <NavLink to='/hollywood/Article3' style={{ textDecoration: 'none' }}> <p className='hol'>
        <p className='tdec txt8'><h1>Hollywood</h1></p>
        <p className='tdec t6'>Hollywood / <span className='tdec t1'>Jan 09 2022</span></p>
        </p></NavLink>
        
        </div>
    )
}