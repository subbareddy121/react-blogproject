import React from 'react'
import { NavLink } from 'react-router-dom'

export default function HCompo1() {
    return (
        <div>
        <NavLink to='/hollywood/Article3' style={{ textDecoration: 'none' }}><p className='h1'>
        <p className='tdec txt7'><h1> Hollywood</h1>Hollywood is a neighborhood in the central region of Los Angeles, California, notable as the home of the U.S. film industry, including several of its historic studios.</p>
        <p className='tdec t5'>Hollywood / <span className='tdec t1'>Jan 09 2022</span></p>
        </p></NavLink>
        
        </div>
    )
}
