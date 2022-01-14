import React from 'react'
import { Link } from 'react-router-dom'


function Header() {
    return (
        <div id='main'>
       <p className='the'>The<h1 className='sir'>Siren</h1></p>
        <div id='head'>
            <Link to='' className='home'>Home</Link>
            <Link to='/Bollywood' className='bolly'>Bollywood</Link>
            <Link to='/Technology' className='tech'>Technology</Link>
            <Link to='/Hollywood' className='holly'>Hollywood</Link>
            <Link to='/Fitness' className='fit'>Fitness</Link>
            <Link to='/Food' className='food'>Food</Link>
        </div>
        </div>
    )
}
export default Header;