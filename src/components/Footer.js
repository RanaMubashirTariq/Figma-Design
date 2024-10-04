import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <div className='footer'>

           <div className='footer-main-d'>   
       <div className='footer-last-d'>
         <div className='right-part-footer-d'>
           <div className='right-part-footer-heading'><img src='/Images/Logo.svg'/></div>
           <div className='right-part-footer-para'><p>Bluemoon <br/> Al Saaha Offices, <br/>Burj Khalifa District, Dubai, UAE <br/><br/>General Enquiries: admin@bluemoon.io</p></div>
         </div>
        
        <div className='left-part-footer'>
          <div className='left-part-inner-right-d'><p>Influencers <br/>Partnerships<br/>Presale<br/>Contact Us<br/>Home</p></div>
          <div className='left-part-inner-left-d'><p>Twitter<br/>Discord<br/>Instagram<br/>Facebook<br/>LinkedIn</p></div>
        </div>
          
       </div>
           
       <div className='last-div-for-footer'>
               <div className='div1'><p>© 2024 Bluemoon. All rights reserved.</p></div>
               <div className='div2'><p>Privacy Policy</p></div>
               <div className='div3'><p>Cookies Policy</p></div>
               <div className='div4'><p>Terms of Service</p></div>
           </div>
       
           </div>
    </div>
  )
}