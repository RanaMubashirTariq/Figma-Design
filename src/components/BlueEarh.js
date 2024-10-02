import React from 'react'
import './BlueEarth.css'

export default function BlueEarh() {
  return (
    <div className='Earth-part'>
          <div className='right-part-d'><img src='/Images/Earth.svg'/></div>

          <div className='left-part-d'>
              <div className='left-heading-d'>
                   <div className='left-heading-h2-d'><h2>Explore Bluemoon mobile app</h2></div>
                   <div className='left-para-d'><p>Engage, Participate and earn <span>xBlue</span></p></div>
              </div>

               {/* Card Start */}

               <div className='four-card-d'> 
                         <div className='inner-four-card'>
                               <div className='inner-card-pic-d'><img src="/Images/Earn.svg" alt="" /> </div>
                                  <div className='inner-card-data-d'>
                                       <div className='inner-card-heading-d'><h2>Earn & Collect</h2> </div>
                                        <div className='inner-card-para-d'><p>Win rewards and earn xBLUE points through app activities and engagement.</p> </div>
                                   </div>
                           </div>

                           <div className='inner-four-card'>
                               <div className='inner-card-pic-d'><img src="/Images/DigitalAssets.svg" alt="" /> </div>
                                  <div className='inner-card-data-d'>
                                       <div className='inner-card-heading-d'><h2>Digital & Assets</h2> </div>
                                        <div className='inner-card-para-d'><p>Own, trade, and display unique assets which you can use in the Bluemoon ecosystem.</p> </div>
                                   </div>
                           </div>


                           <div className='inner-four-card'>
                               <div className='inner-card-pic-d'><img src="/Images/Xblue.svg" alt="" /> </div>
                                  <div className='inner-card-data-d'>
                                       <div className='inner-card-heading-d'><h2>xBLUE points</h2> </div>
                                        <div className='inner-card-para-d'><p>Earn xBLUE points everywhere, unlock benefits and exclusive items.</p> </div>
                                   </div>
                           </div>



                           <div className='inner-four-card'>
                               <div className='inner-card-pic-d'><img src="/Images/LeaderBoard.svg" alt="" /> </div>
                                  <div className='inner-card-data-d'>
                                       <div className='inner-card-heading-d'><h2>Leaderboard</h2> </div>
                                        <div className='inner-card-para-d'><p>Compete globally, climb ranks, and earn recognition in Bluemoon.</p> </div>
                                   </div>
                           </div>
              </div>




               {/* Card End */}

          </div>
  </div>
)
}