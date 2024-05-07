import React from 'react'
import './Hero.css'
import handicon from '../Assests/hand_icon.png'
import arrowicon from '../Assests/arrow.png'
import heroimage from '../Assests/hero_image.png'
export const Hero = () => {
  return (
    <div className='hero'>

    <div className="hero-left">
    <h1>NEW ARRIVALS ONLY</h1>
    <div>
        <div className='hand-hand-icon'>

            <div className='handicon'>
            <p>new</p>
            <img src={handicon} alt="" />
            </div>
            
         </div>
        <p>Collections</p>
        <p>For everyone</p>
    </div>
    <div className='hero-latest-btn'>
        <div>Latest Collection</div>
        <img src={arrowicon} alt="" className='arrow' />
    </div>

    
        </div>

    <div className="hero-rigth">
        <img src={heroimage} alt="" className='heroimage'/>

    </div>
    </div>
  )
}
