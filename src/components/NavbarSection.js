import React from 'react'
import './NavbarSection.css'
export default function NavbarSection() {
  return (
    <div className='navbar-container'>
        <div className='left-d'>
        <img src='/Images/Logo.svg'/>
        </div>
        <div className='right-d'>
          
          <div className='right-1st'>
             <ul>
                <li>Home</li>
                <li>EcoSytem</li>
                <li>Team</li>
                <li>About Us</li>
             </ul>
          </div>

          <div className='right-2nd'>
              <button>Join Persale<img src='/Images/Vector.svg'/></button>
          </div>

        </div>
    </div>
  )
}
