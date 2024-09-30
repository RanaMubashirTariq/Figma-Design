import React from 'react'
import './BodySection.css';

export default function BodySection() {
  return (

<div className='main-body'>

  <div className='trans-heading'>
    <div className='frist-heading'>
       <h2>bluemoon</h2>
    </div>
  </div>

    <div className='bottom-d'>

      <div className='bottom'>
      <div className='bottom-heading'>
         <h2>The Ultimate <br/> gameing ecosystem</h2>
      </div>
          <div className='bottom-para'>
          <p>Step in to bluemoon’s revolutionary gaming ecosystem <br/>
          where you can play, earn & explore digital assets</p>
          </div>
          </div>
           <div className='last-btn'>
          <div className='outer-btn-d'>
            <div className='inner-btn-d'>
              <button>Explore more<img src='/Images/Vector.svg'/></button>
            </div>
          </div>
          </div>
    </div>

 </div>
  )
}
