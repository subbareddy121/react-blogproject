import React, { useState } from 'react'
import './Styles.css'
import 'font-awesome/css/font-awesome.min.css';
import Compo2 from './HomeCompos/Compo2';


export default function Article() {
    const[handsup,setHandsup]=useState(25)
    return (
        <div>
        <div className='avtrhead'>
       <h1 className='atit'>15 Great Articles and Essays about Movies</h1>
      
       <p className='avtr'></p>
       <p className='atxt'>Jhon Doe <br/> <span className='opc'>Jan 9 2021. 05 mins read</span> <span className='icons'><i className="fa fa-instagram"></i> <i className="fa fa-twitter"></i> <i className="fa fa-youtube"></i> <i className="fa fa-facebook"></i> </span> </p>
       <div className='icons1'>
       <i onClick={()=>setHandsup(handsup+1)} class="fa fa-hand-rock-o" >  {handsup}k</i> <br/><br/><br/>
       <i class="fa fa-share-alt" > Share this Article</i>
        </div>
       <p className='artimg'></p>
       <p>For some Hollywood actors, particularly those bound up in the web of secrecy surrounding the Marvel Cinematic Universe, non-disclosure agreements are a burden. Then there's "The Amazing Spider-Man" star Andrew Garfield, who describes the experience of lying to the press as "rather stressful but also weirdly enjoyable." <br/> <br/>Those shining orbs, the Golden Globe awards, have well and truly lost their lustre. Unloved and almost unattended, the prize-giving ceremony that once promised more Hollywood entertainment value than any other, with closeups of tipsy stars in unguarded moments, will not even be screened on network TV. Its demotion follows a series of rows over its dubious practices and lack of diversity.
       </p>
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
