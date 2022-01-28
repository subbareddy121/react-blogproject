

import React, { useState } from 'react'
import './Styles.css'
import 'font-awesome/css/font-awesome.min.css';
import Compo2 from './HomeCompos/Compo2';


export default function Article5() {
    const[handsup,setHandsup]=useState(32)
    return (
        <div>
        <div className='avtrhead'>
       <h1 className='atit'>Physical Fitness</h1>
      
       <p className='avtr'></p>
       <p className='atxt'>Jhon Doe <br/> <span className='opc'>Jan 9 2021. 05 mins read</span> <span className='icons'><i className="fa fa-instagram"></i> <i className="fa fa-twitter"></i> <i className="fa fa-youtube"></i> <i className="fa fa-facebook"></i> </span> </p>
       <div className='icons1'>
       <i onClick={()=>setHandsup(handsup+1)} class="fa fa-hand-rock-o" >  {handsup}k</i> <br/><br/><br/>
       <i class="fa fa-share-alt" > Share this Article</i>
        </div>
        <br/>
       <p className='art5img'></p>
       <p>Physical fitness is a state of health and well-being and, more specifically, the ability to perform aspects of sports, occupations and daily activities. Physical fitness is generally achieved through proper nutrition,[1] moderate-vigorous physical exercise,[2] and sufficient rest along with a formal recovery plan.[3]

       Before the Industrial Revolution, fitness was defined as the capacity to carry out the day's activities without undue fatigue or lethargy. However, with automation and changes in lifestyles, physical fitness is now considered a measure of the body's ability to function efficiently.
       </p>
      
       
       
       
       <p className='art5img1'></p>
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
