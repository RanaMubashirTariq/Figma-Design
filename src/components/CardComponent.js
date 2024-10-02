import React from 'react'
import './CardComponent.css'
import BlueEarh from './BlueEarh'

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
         </div>
  )
}