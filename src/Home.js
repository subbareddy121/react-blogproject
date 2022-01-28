import React, { useState } from 'react'
import './Styles.css'
import Component1 from './Component1'
import Compo2 from './HomeCompos/Compo2'
import Compo3 from './HomeCompos/Compo3'
import Compo4 from './HomeCompos/Compo4'
import { NavLink } from 'react-router-dom'
import 'font-awesome/css/font-awesome.min.css';
import Compo6 from './HomeCompos/Compo6'
import Compo7 from './HomeCompos/Compo7'
import Compo8 from './HomeCompos/Compo8'



export default function Home() {
  const[LMore,setLMore]=useState(false);
  const[VMore,setVMore]=useState(false);

    return (
        <div>
        <Component1 />
        <NavLink to='./Article1'><div className='part'>
        <span className='txt'>Environmental view</span>
        </div></NavLink>
        <div className='part1'>
        <span className='txt'>Environmental view</span>
        </div>
       <h1 className='hd1'>The Latest</h1>
       <div id='latest'>
       <Compo2 />
       <Compo2 />
       <Compo2 />
       </div>
       <div>
       <h1 className='hd2'>Latest Articles</h1>
        <Compo3 />
        <div className='add'>
       <p className='addt'>Addvertisement</p>
        <diV>
        <h1 className='hd3'>Top Posts</h1>
        <Compo6 />
        <div className='blk1'>
        <Compo7 />
        <Compo7 />
        <Compo7/>
        </div>
        </diV>
        </div>
        <Compo4 />
        <Compo4 />
        <Compo4 />
        <p className='barr'><button onClick={()=>setLMore(!false)}><i className="fa fa-arrow-down">Load More</i></button></p>
        <>
        {
          LMore?
          <div>
         <Compo4/>
         <Compo4/>
        
          </div>:null
        }
        </>
      </div>
      <div
      className='blk'><p className='img5'><span className='txt4'>Historical Forts</span></p></div>

      <h1 className='hd4'>Latest Stories</h1>
      <div id='latest1'>
      <Compo8/>
      <Compo8/>
      <Compo8/>
     <p className='rarr'><button onClick={()=>setVMore(!false)}><i className="fa fa-arrow-right">View More</i></button></p>
     <>
     {
       VMore?
       <div className='compo'>
      <Compo8/>
      <Compo8/>
      <Compo8/>
      <Compo8/>
      <Compo8/>
      
       </div>:null
     }
     </>

      </div>

      

        </div>

    )
}
