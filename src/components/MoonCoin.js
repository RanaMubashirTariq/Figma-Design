import React from 'react'
import './MoonCoin.css'

export default function MoonCoin() {
  return (
    <div className='moon-coin-d'>

        <div className='btns-d'>
            <div className='moon-coin-btn'>
                <div className='moon-btn-heading'><h2>$10M+</h2></div>
                <div className='moon-btn-para'><p>Assets Under
                Management</p></div>
            </div>
            <div className='moon-coin-btn'>
                <div className='moon-btn-heading'><h2>1M+</h2></div>
                <div className='moon-btn-para'><p>Invested Users</p></div>
            </div>
            <div className='moon-coin-btn'>
                <div className='moon-btn-heading'><h2>96%+</h2></div>
                <div className='moon-btn-para'><p>Customer Satisfaction Score</p></div>
            </div>
        </div>


        <div className='moon-pic-heading-card-d'>
             <div className='moon-pic-right-part'><img src='/Images/Wheel.svg'/></div>
             <div className='left-moon-part-d'>
                <div className='left-heading-moon-d'><h2>MoonCoin</h2></div>
                <div className='left-para-moon-d'><p>A Telegram Tap-to-Play Mini game</p></div>
                   <div className='cards-without-pic-d'>
                       <div className='inner-card-without-pic'>
                          <div className='inner-card-heading-out-d'><h2>Just Tap!</h2></div>
                          <div className='inner-card-para-out-d'><p>Mooncoin is a simple tap-to-play game, enhancing user engagement within Bluemoon.</p></div>
                       </div>
                       <div className='inner-card-without-pic'>
                          <div className='inner-card-heading-out-d'><h2>Compete</h2></div>
                          <div className='inner-card-para-out-d'><p>Join clans & compete on leaderboards to win & earn rewards</p></div>
                       </div>
                       <div className='inner-card-without-pic'>
                          <div className='inner-card-heading-out-d'><h2>Complete Tasks</h2></div>
                          <div className='inner-card-para-out-d'><p>Complete tasks, refer others to
                          earn rewards.</p></div>
                       </div>
                       <div className='inner-card-without-pic'>
                          <div className='inner-card-heading-out-d'><h2>Redeem</h2></div>
                          <div className='inner-card-para-out-d'><p>Integrated with Bluemoon app, claim xBLUE and $BLUE tokens upon launch.</p></div>
                       </div>
                   </div>
             </div>
        </div>


        <div className='video-pic-d'>
            <div className='video-d-heading'><h2>Metaverse</h2></div>
            <div className='picof-video-d'>
                <div className='picof-video-inner-d'>
                           <img src='/Images/YouTube.svg' className='picof-video-last-d'/>
                           <div className='youtube-btn'><img src='/Images/YouTubeBtn.svg'/></div>
                              <div className='youtube-scroll-bar-d'><img src="/Images/YouTubeScrollBar.svg"/></div>
                </div>
            </div>
        </div>
      
    </div>
  )
}
