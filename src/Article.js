import React, { useState } from 'react'
import './Styles.css'
import 'font-awesome/css/font-awesome.min.css';
import Compo2 from './HomeCompos/Compo2';


export default function Article() {
    const[handsup,setHandsup]=useState(25)
    return (
        <div>
        <div className='avtrhead'>
       <h1 className='atit'>Beautifull view of sunset</h1>
      
       <p className='avtr'></p>
       <p className='atxt'>Jhon Doe <br/> <span className='opc'>Jan 9 2021. 05 mins read</span> <span className='icons'><i className="fa fa-instagram"></i> <i className="fa fa-twitter"></i> <i className="fa fa-youtube"></i> <i className="fa fa-facebook"></i> </span> </p>
       <div className='icons1'>
       <i onClick={()=>setHandsup(handsup+1)} class="fa fa-hand-rock-o" >  {handsup}k</i> <br/><br/><br/>
       <i class="fa fa-share-alt" > Share this Article</i>
        </div>
       <p className='artimg'></p><br/>
       <p>Sunset, also known as sundown, is the daily disappearance of the Sun below the horizon due to Earth's rotation. As viewed from everywhere on Earth (except the North and South poles), the equinox Sun sets due west at the moment of both the Spring and Autumn equinox. As viewed from the Northern Hemisphere, the sun sets to the northwest (or not at all) in the Northern hemisphere's spring and summer, and to the southwest in the autumn and winter; these seasons are reversed for the Southern Hemisphere.
       </p><br/>
       <p className='artimg1'></p>
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
