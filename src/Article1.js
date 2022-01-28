

import React, { useState } from 'react'
import './Styles.css'
import 'font-awesome/css/font-awesome.min.css';
import Compo2 from './HomeCompos/Compo2';


export default function Article1() {
    const[handsup,setHandsup]=useState(45)
    return (
        <div>
        <div className='avtrhead'>
       <h1 className='atit'>Nature and its beauty</h1>
       
       <p className='avtr'></p>
       <p className='atxt'>Jhon Doe <br/> <span className='opc'>Jan 9 2021. 05 mins read</span> <span className='icons'><i className="fa fa-instagram"></i> <i className="fa fa-twitter"></i> <i className="fa fa-youtube"></i> <i className="fa fa-facebook"></i> </span> </p>
       <div className='icons1'>
       <i onClick={()=>setHandsup(handsup+1)} class="fa fa-hand-rock-o" >  {handsup}k</i> <br/><br/><br/>
       <i class="fa fa-share-alt" > Share this Article</i>
        </div>
       <p className='art1img'></p>
       <p>Nature, in the broadest sense, is the physical world or universe. "Nature"  <br/> can  refer to the phenomena of the physical world, and also to life in<br/> general. The study of nature is a large, if not the only, part of science.<br/> Although humans are part of nature, human activity is often understood<br/> as a separate category from other natural phenomena.[1]

       The word nature<br/> is borrowed from the Old French nature and is derived from the Latin word<br/> natura, or "essential qualities, innate disposition", and in ancient times,<br/> literally meant "birth"
       </p>
       <br/>
       
       <p className='art1img1'></p>
       <div className='mt'>
       <p className='Tol'>Tollywood</p>
       <p className='Hol'>Hollywood</p>
       <p className='Bol'>Bollywood</p> 
       </div>
       <i onClick={()=>setHandsup(handsup+1)} class="fa fa-hand-rock-o">  {handsup}k hands rised</i>
       <hr/>
       <p className='avtr'></p>
       <p className='atxt1'> Written By <br/> Jhon Doe <br/> <span className='opc'>Jan 9 2021. 05 mins read</span></p>
       <hr/>
       </div>
       <div className='artlast'>
       <p>More items</p>
       <hr/>
       <div className='artlast1'>
      <Compo2/>
      <Compo2/>
      <Compo2/>
       </div>
       
       </div>
       </div>
    )
}
