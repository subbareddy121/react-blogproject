import React from 'react'
import '../Styles.css'
import { NavLink } from 'react-router-dom'
 

export default function Compo3() {
    return (
        
        <div className='hist'>
        <NavLink to='./Article2' style={{ textDecoration: 'none' }}><p className='img3'>
        <p className=' tdec txt2'><h1>Historical Places</h1>Opulent palaces, ancient forts and majestic structures greet you at every nook and corner of this majestic country. </p>
        <p className=' tdec t2'>Historical / <span className='tdec t1'>Jan 07 2022</span></p>
        </p></NavLink>
        
        </div>
    )
}
