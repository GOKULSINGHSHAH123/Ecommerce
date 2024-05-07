import React from 'react'
import './NewsLetter.css'

export const NewsLetter = () => {
  return (
    <div className='newsletter-container'>

      <div className='newsletter'>
      <h1> Get Exclusive Offers On your Email</h1>
        <p>Subscribe to our newsletter</p>

        <div class ='email'>
            <input type="email" placeholder='Your Eamil id' className='input-type'/>
            <button>Subscribe</button>
        </div>
      </div>

        
    </div>
  )
}
