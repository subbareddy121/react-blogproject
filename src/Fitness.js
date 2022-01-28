import React from 'react'
import FCompo1 from './FitCompos/FCompo1'
import { NavLink } from 'react-router-dom'
import 'font-awesome/css/font-awesome.min.css';
import FCompo2 from './FitCompos/FCompo2';

export default function Fitness() {
    return (
        <div>
        <h1 className='bh'>Fitness</h1>
        <FCompo1 />
        <FCompo1 />
        <FCompo1 />
        <FCompo1 />
        <FCompo1 />
        <FCompo1 />
        <NavLink to='./FMore'><p className='barr'><i className="fa fa-arrow-down">Load More</i></p></NavLink>
        <div className='bol'>
        <h1 className='hd2'>Top Posts</h1>
        
        <FCompo2 />
        <FCompo2 />
       
        <FCompo2 />
        
        </div>
        <div className='badd'>
        <p className='bad'>Adevertisement</p>
        </div>
        </div>
    )
}
