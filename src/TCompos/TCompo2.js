import React from 'react'
import { NavLink } from 'react-router-dom'

export default function TCompo2() {
    return (
        <div>
        <NavLink to='/technology/Article4' style={{ textDecoration: 'none' }}>  <p className='tech2'>
        <p className='tdec txt8'><h1>Technology</h1></p>
        <p className='tdec t6'>Technology / <span className='tdec t1'>Jan 09 2022</span></p>
        </p>
        </NavLink>
        </div>
    )
}