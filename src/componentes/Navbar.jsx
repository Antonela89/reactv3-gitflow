import React from 'react'
import { Link } from 'react-router-dom'
import "../Styles/Nabvar.css"
import { NavLink } from 'react-router-dom'
import { useState } from 'react'

export const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false) 

  return (
    <nav>
        <Link to="/Guest" className='title'>ReacTV</Link>
        <div className='menu' onClick={() => {setMenuOpen(!menuOpen)}}>
        <span></span>
        <span></span>
        <span></span>
        </div>
        <ul className= {menuOpen ? "open" : ""}>
            <li><NavLink to="Login">Log-In</NavLink></li>
            <li><NavLink to="About">About</NavLink></li>
            <li><NavLink to="Version">Version</NavLink></li>
            
        </ul>

    </nav>
  )
}
