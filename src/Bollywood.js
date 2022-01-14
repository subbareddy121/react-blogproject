import React from 'react'
import BCompo1 from './BollyCompos/BCompo1'
import './Styles.css'
import { NavLink } from 'react-router-dom'
import 'font-awesome/css/font-awesome.min.css';

import BCompo2 from './BollyCompos/BCompo2';

export default function Bollywood() {
    return (
        <div>
        <h1 className='bh'>Bollywood Updates </h1>
        <div>
       <BCompo1 />
       <BCompo1 />
       <BCompo1 />
       <BCompo1 />
       <BCompo1 />
       <BCompo1 />
       <BCompo1 />
       <NavLink to='./BLoadMore'><p className='barr'><i className="fa fa-arrow-down">Load More</i></p></NavLink></div>
       <div className='bol'>
       <h1 className='hd2'>Top Posts</h1>
       
       <BCompo2 />
       <BCompo2 />
       <BCompo2 />
       
       
       </div>
       <div className='badd'>
       <NavLink to='./Article'><p className='bad'>Adevertisement</p></NavLink>
       </div>
       
       </div>

    )
}



 //     <h1 className='bh'>Bollywood Updates </h1>
    //    <p className='b1'></p>
    //    <p className='p1'>Hindi cinema, often known as Bollywood and formerly as Bombay cinema, is the Indian Hindi-language film industry based in Mumbai. The term is a portmanteau of "Bombay" and "Hollywood". The industry is related to Cinema of South India and other Indian film industries, making up Indian cinema—the world's largest by number of feature films produced.</p>
      
    //    <p className='b2'> 
    //    <p className='p2'><strong>Bollywood celebrities including actors Anil Kapoor, Manoj Bajpayee, Anupam Kher, actress Dia Mirza and others</strong> are taking turns on the internet to pour in tribute for Hollywood actor Sidney Poitier as they are mourning his demise.</p>
    //    </p>
    //    <p className='b3'>
    //    <div className='p3'>
    //    <h1>Vicky Kaushal-Katrina Kaif Wedding: Here's How The Couple Met Each Other</h1>
    //    <p>Bollywood stars Vicky Kaushal and Katrina Kaif will marry on December 9. The rumoured couple will marry in Sawai Madopur city's Six Senses Resort in Rajasthan. Here's how the couple met each other for the first time</p>
    //    </div>
    //    </p>



