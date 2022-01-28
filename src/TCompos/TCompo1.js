import React from 'react'
import { NavLink } from 'react-router-dom'

export default function TCompo1() {
    return (
        <div>
        <NavLink to='/technology/Article4' style={{ textDecoration: 'none' }}>  <p className='tech1'>
        <p className='tdec txt7'><h1> Technology</h1>Technology, the application of scientific knowledge to the practical aims of human life</p>
        <p className='tdec t5'>Technology / <span className='tdec t1'>Jan 09 2022</span></p>
        </p>
        </NavLink>
        </div>
    )
}
