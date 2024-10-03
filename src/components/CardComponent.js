import React from 'react'
import './CardComponent.css'


export default function CardComponent() {
  return (
    <div className='card-component'>
       <div className='main-d'>
        <div className='heading-d'>
            <div className='top-heading'><h2>Bluemoon ecosystem</h2></div>
            <div className='para-heading'><p>We enable to user to curate discover and explore meaningful interactions <br/> on the metaverse in a way that was not possaible before</p></div>
        </div>

        <div className='Cards-container'>

               {/* This div for Mobile App */}
             <div className='card-d'>
                <div className='moon-pic'><img src='/Images/CupMoon.svg'/></div>
                <div className='heading-tag-d'>
                    <div className='card-heading'><h2>Mobile app</h2></div>
                    <div className='card-para-heading'><p>Manage your gaming profiles, collect xBlue, win prizes & manage your assets on the go.</p></div>
                </div>
             </div>

             {/* This div for Mooncoin Mini Game */}
             <div className='card-d'>
                <div className='moon-pic'><img src='/Images/CapMoon.svg'/></div>
                <div className='heading-tag-d'>
                    <div className='card-heading'><h2>Mooncoin Mini Game</h2></div>
                    <div className='card-para-heading'><p>Tap to play on Telegram, earn Mooncoins, and redeem points in the Bluemoon mobile app.</p></div>
                </div>
             </div>
                   
            {/* This div for Metaverse */}
             <div className='card-d'>
                <div className='moon-pic'><img src='/Images/MeterMoon.svg'/></div>
                <div className='heading-tag-d'>
                    <div className='card-heading'><h2>Metaverse</h2></div>
                    <div className='card-para-heading'><p>Create, explore, and socialise in immersive, dynamic virtual environments with AI-assisted design tools.</p></div>
                </div>
             </div>
             
                 {/* This div for Ranks & Levels */}
             <div className='card-d'>
                <div className='moon-pic'><img src='/Images/RankMoon.svg'/></div>
                <div className='heading-tag-d'>
                    <div className='card-heading'><h2>Ranks & Levels</h2></div>
                    <div className='card-para-heading'><p>Achieve higher ranks, earn exclusive rewards, and showcase your progress through gamified challenges.</p></div>
                </div>
             </div>
              
              {/* This div for Events & Competitions */}
             <div className='card-d'>
                <div className='moon-pic'><img src='/Images/EventsMoon.svg'/></div>
                <div className='heading-tag-d'>
                    <div className='card-heading'><h2>Events & Competitions</h2></div>
                    <div className='card-para-heading'><p>Participate in diverse events and competitions to win rewards and gain community recognition.</p></div>
                </div>
             </div>
             
               {/* This div for Digital Asset Store */}
             <div className='card-d'>
                <div className='moon-pic'><img src='/Images/DigitalMoon.svg'/></div>
                <div className='heading-tag-d'>
                    <div className='card-heading'><h2>Digital Asset Store</h2></div>
                    <div className='card-para-heading'><p>Store, trade, and utilise your unique digital assets across the Bluemoon gaming ecosystem.</p></div>
                </div>
             </div>


        </div>
        
       </div>

       {/* Earth Part */}
          
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


              <div className='four-btn-d'>
                <button className='four-d-heading'><h2>Learn Much More</h2></button>
              </div>
              
          </div>
  </div>
            
   </div>
  )
}
