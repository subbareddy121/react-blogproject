import React from 'react'
import { NavLink } from 'react-router-dom'

export default function BCompo1() {
    return (
        <div>
        <NavLink to='/bollywood/Article3' style={{ textDecoration: 'none' }}><p className='b4'>
        <p className=' tdec txt7'><h1>Bollywood Updates</h1>Mumbai, the City of Dreams, houses the prime centre of Hindi Film Industry, better known as Bollywood. Acclaimed as one of the biggest film industries of the world, Bollywood produces over 1000 films every year.</p>
        <p className='tdec t5'>Bollywood / <span className='tdec t1'>Jan 09 2022</span></p>
        </p></NavLink>
        
        </div>
    )
}
