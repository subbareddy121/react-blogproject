import React from 'react'
import { NavLink } from 'react-router-dom'

export default function FCompo1() {
    return (
        <div>
        <NavLink to='/fitness/Article5' style={{ textDecoration: 'none' }}> <p className='F1'>
        <p className='tdec txt7'><h1> Fitness</h1>Physical fitness is a state of health and well-being and, more specifically, the ability to perform aspects of sports, occupations and daily activities.</p>
        <p className='tdec t5'>Fitness / <span className='tdec t1'>Jan 09 2022</span></p>
        </p></NavLink>
        </div>
    )
}
