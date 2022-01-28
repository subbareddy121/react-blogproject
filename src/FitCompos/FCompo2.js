import React from 'react'
import { NavLink } from 'react-router-dom'

export default function FCompo2() {
    return (
        <div>
        <NavLink to='/fitness/Article5' style={{ textDecoration: 'none' }}>  <p className='F2'>
        <p className='tdec txt8'><h1>Fitness</h1></p>
        <p className='tdec t6'>Fitness / <span className='tdec t1'>Jan 09 2022</span></p>
        </p></NavLink>
        
        </div>
    )
}