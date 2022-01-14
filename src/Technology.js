import React from 'react'
import TCompo1 from './TCompos/TCompo1'
import { NavLink } from 'react-router-dom'
import 'font-awesome/css/font-awesome.min.css';
import TCompo2 from './TCompos/TCompo2';

export default function Technology() {
    return (
        <div>
          <h1 className='bh'>Technology </h1>
          <TCompo1 />
          <TCompo1 />
          <TCompo1 />
          <TCompo1 />
          <TCompo1 />
          <TCompo1 />
          <NavLink to='./TLoadMore'><p className='barr'><i className="fa fa-arrow-down">Load More</i></p></NavLink>
          <div className='bol'>
       <h1 className='hd2'>Top Posts</h1>
       
      <TCompo2 />
      <TCompo2 />
      <TCompo2 />
      
       
       </div>
       <div className='badd'>
       <NavLink to='./Article'><p className='bad'>Adevertisement</p></NavLink>
       </div>
        </div>
    )
}
