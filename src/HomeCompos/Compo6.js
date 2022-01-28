import React from 'react'
import '../Styles.css'
import { NavLink } from 'react-router-dom'

export default function Compo6() {
    return (
        
        <div>
        <NavLink to='./Article2' style={{ textDecoration: 'none' }}><p className='img6'></p></NavLink>
        <p className='txt5'><h1>Historical Places</h1>
        <p className='txt1'>Historical / <span className='t1'>Jan 07 2022</span></p></p>
        
        
        </div>
    )
}
