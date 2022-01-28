

import React, { useState } from 'react'
import './Styles.css'
import 'font-awesome/css/font-awesome.min.css';
import Compo2 from './HomeCompos/Compo2';


export default function Article6() {
    const[handsup,setHandsup]=useState(32)
    return (
        <div>
        <div className='avtrhead'>
       <h1 className='atit'>Best Healthy Food Items</h1>
      
       <p className='avtr'></p>
       <p className='atxt'>Jhon Doe <br/> <span className='opc'>Jan 9 2021. 05 mins read</span> <span className='icons'><i className="fa fa-instagram"></i> <i className="fa fa-twitter"></i> <i className="fa fa-youtube"></i> <i className="fa fa-facebook"></i> </span> </p>
       <div className='icons1'>
       <i onClick={()=>setHandsup(handsup+1)} class="fa fa-hand-rock-o" >  {handsup}k</i> <br/><br/><br/>
       <i class="fa fa-share-alt" > Share this Article</i>
        </div>
        <br/> <br/>
       <p className='art6img'></p>
       <p>Food is any substance consumed to provide nutritional support for an organism. Food is usually of plant, animal, or fungal origin, and contains essential nutrients, such as carbohydrates, fats, proteins, vitamins, or minerals. The substance is ingested by an organism and assimilated by the organism's cells to provide energy, maintain life, or stimulate growth. Different species of animals have different feeding behaviours that satisfy the needs of their unique metabolisms, often evolved to fill a specific ecological niche within specific geographical contexts.
       </p>
      
       
       
       
       <p className='art6img1'></p>
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
