import React from 'react'
import './ThreeCardNFt.css'

export default function ThreeCardNFt() {
  return (

         <div className='threeCard-nft'>
    <div className='nft-main-d'>
         
          <div className='frist-nft-d'><img src='/Images/FristNft.svg'/></div>
          <div className='second-nft-d'>
            <div className='second-nft-inner-d'>
                <div className='second-nft-heading-d'><h2>One-Click Access</h2></div>
                <div className='second-nft-para-d'><p>Showcase, buy, sell, and swap digital assets while creating exclusive, token-gated spaces, to offer unique access to members in your Metaverse</p></div>
            </div>
            <div className='second-nft-inner-d'>
                <div className='second-nft-heading-d'><h2>Easy Space Creation</h2></div>
                <div className='second-nft-para-d'><p>Design unique Metaverse spaces with no technical skills required, choose one you like and its yours in a few clicks</p></div>
            </div>
            <div className='second-nft-inner-d'>
                <div className='second-nft-heading-d'><h2>Custom Avatars</h2></div>
                <div className='second-nft-para-d'><p>Personalise your virtual presence with unique, customisable avatars for self-expression and immersion</p></div>
            </div>
          </div>
           <div className='thrid-nft-d'>
                <div className='thrid-nft-pic-d'><img src="/Images/ThridNftPic.svg"/></div>
                <div className='thrid-nft-detail-d'>
                    <div className='thrid-nft-heading-d'>
                  <div className='thrid-nft-heading-inner-d'><h2>Digital Asset Store</h2></div>
                  </div>
                    <div className='thrid-nft-para-d'><p>Discover and purchase a wide range of digital assets in our integrated store. From aesthetic enhancements to functional utilities, our store offers avatars, vehicles, land parcels, and much more.</p></div>
                </div>
           </div>

    </div>


       <div className='meterverse-main-d'>
            <div className='right-part-meterverse'>
                <div className='meterverse-detail-d'>
                    <div className='meterverse-heading-d'><h2>Improve Metaverse with analytics at your <br/> fingertips</h2></div>
                    <div className='meterverse-para-d'><p>Manage spaces, monitor performance, track revenue, and make data-driven decisions.</p></div>
                </div>
                <div className='meterverse-second-part'>
                    <div className='meterverse-second-part-detail'>
                        <div className='meterverse-second-part-heading'><h2>Empower your Metaverse journey</h2></div>
                        <div className='meterverse-second-part-para'><p>Gain valuable insights into your virtual spaces and user interactions to optimize experiences and revenue</p></div>
                    </div>
                    <div className='meterverse-second-part-li'>
                       <div className='meterverse-second-part-li-pic'><img src='/Images/Tick.svg'/>
                      <div className='meterverse-second-part-li-para'><p>In-depth user analytics</p></div>
                       </div>
                       <div className='meterverse-second-part-li-pic'><img src='/Images/Tick.svg'/>
                       <div className='meterverse-second-part-li-para'><p>In-depth user analytics</p></div>
                       </div>
                       <div className='meterverse-second-part-li-pic'><img src='/Images/Tick.svg'/>
                       <div className='meterverse-second-part-li-para'><p>In-depth user analytics</p></div>
                       </div>
                    </div>
                </div>

                <div className='meterverse-btn-d'>
                    <div className='meterverse-btn-right'><button><h2>Access Presale</h2></button></div>
                    <div className='meterverse-btn-left'><button><h2>Join Community</h2></button></div>
                </div>
            </div>

            <div className='left-part-meterverse'>
                <img src='/Images/MeterPersentage.svg'/>
            </div>
       </div>

    </div>
  )
}
