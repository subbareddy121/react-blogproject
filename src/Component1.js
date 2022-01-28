import React from 'react'
import './Styles.css'
import { NavLink } from 'react-router-dom'

export default function Home() {
    return (
        <div>
        <NavLink to='./Article1'><p className='img1'><span className='txt'>Welcome to Beautiful Nature</span></p></NavLink>
        </div>
    )
}
