import React from 'react'
import Logo from '../assets/images/afterhours-logo.png'
import './Navbar.css'

export default function NavBar() {
  return (
    <div className='nav-container'>
      <div className='logo-container'>
        <img  className='logo' src={Logo}/>
      </div>
      <h1 className='nav-heading'>AfterHours</h1>
    </div>
  )
}
