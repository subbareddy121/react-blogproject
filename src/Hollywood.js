import React from 'react'
import { NavLink } from 'react-router-dom'
import 'font-awesome/css/font-awesome.min.css';
import HCompo1 from './HollyCompos/HCompo1';
import HCompo2 from './HollyCompos/HCompo2';

export default function Hollywood() {
    return (
        <div>
        <h1 className='bh'>Hollywood</h1>
          <HCompo1 />
          <HCompo1 />
          <HCompo1 />
          <HCompo1 />
          <HCompo1 />
          <HCompo1 />
          <NavLink to='./HLoadMore'><p className='barr'><i className="fa fa-arrow-down">Load More</i></p></NavLink>
          <div className='bol'>
          <h1 className='hd2'>Top Posts</h1>
          
          <HCompo2/>
          <HCompo2/>
          <HCompo2/>
         
          
          </div>
          <div className='badd'>
         <p className='bad'>Adevertisement</p>
          </div>
        </div>
    )
}
