import React from 'react'
import './BodySection.css';

export default function BodySection() {
  return (

<div className='main-body'>

  <div className='trans-heading'>
          <img src='/Images/Trans.svg'/>
  </div>

  <div className='middle-heading-d'>
       <div className='middle-inner-d'>
        <div className='middle-inner-heading'><h2>The ultimate <br/>gaming ecosystem</h2></div>
        <div className='middle-inner-para'><p>Step in to bluemoon’s revolutionary gaming ecosystem
        where you can play, earn & explore digital assets</p></div>
       </div>
  </div>
     <div className='middle-btn-d'>
      <div className='middle-inner-btn-d'>
        <button className='middle-btn'><h2>Explore more</h2><img src='/Images/Vector.svg'/></button>
      </div>
     </div>
    </div>
  )
}
