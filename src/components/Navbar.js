import React from 'react'
import navbar from './navbar.css'

export default function Navbar() {
  return (
    <div className='main'>
    <div className='nav-container'>
       <div className='logo-part'>
          <img src="/Images/Logo.svg" alt="" />
          </div>
 
        <div className='left-part'>
               
               <div className='left-1st'>
                  <ul className='ul'>
                      <li><a href='#'>Home</a></li>
                      <li><a href='#'>EcoSystem</a></li>
                      <li><a href='#'>Team</a></li>
                      <li><a href='#'>About</a></li>
                  </ul>
               </div>
  
               <div className=''>
                   <button className='left-2nd'><h3 className='text'>Join Persole</h3><img src="/Images/vector.svg" alt="" /></button>
                   
               </div>
  
        </div>
  
       </div>
   
    </div> 
  )
}
