import React from 'react'
import Logo from '../assets/images/longlogo.png' // import logo
 

export default function NavBar() {
  return (
    <div className='nav-container'>
      <div className='logo-container'>
        <img  className='logo' src={Logo}/>
      </div>
 
      {/*} Search bar goes here 9/7/2022 Domanic Devivo-->{*/}
      <input type="text" placeholder="Search.."/>

      <div className="user-short-info">
        <div class = 'split left'>
          <span class="dot"></span>
        </div>

        <div class = 'split right'>
          <p>Jane Doe</p>
          <p>Freshmen,CS Major</p>
        </div>
      </div>
    </div>
  )
}
