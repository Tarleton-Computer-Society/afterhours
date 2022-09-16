import React from 'react'
import Logo from '../assets/images/longlogo.png' // import logo
 

export default function NavBar() {
  return (
    <div className='nav-container'>
   
 
      {/*} Search bar goes here 9/7/2022 Domanic Devivo-->{*/}
      <input type="text" placeholder="Search.."/>

      <div className="user-short-info">
        <div class = 'split left user-img'>
          <span class="dot">JD</span>
        </div>

        <div class = 'username'>
          <label>Jane Doe</label>
          <p>Freshmen, CS Major</p>
        </div>
      </div>
    </div>
  )
}
