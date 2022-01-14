import React from 'react'
import '../Styles.css'
import { NavLink } from 'react-router-dom'

export default function Compo2() {
    return (
        <div>
        <NavLink to='./Article'><p className='img2'></p></NavLink>
        <p className='txt1'><h1>Beautifull view of sunset</h1>Nature, in the broadest sense, is the natural, physical, material world or universe. "Nature" can refer to the phenomena of the physical world, and also to life in general. </p>
        <p className='txt1'>Nature / <span className='t1'>Jan 07 2022</span></p>
        </div>
    )
}
