import React from 'react'
import exclusive_image from '../Assests/exclusive_image.png'
import './Offers.css'

export const Offers = () => {
  return (
    <div className='offers'>
          <div className="offers-left">
            <h1>Exclusive</h1>
            <h2>Offerts for you</h2>
            <p>ONLY ON BEST SELLERS PRODUCTS</p>
            <button> Check now</button>
        </div>
        <div className="offers-right">
            <img src={exclusive_image} alt="" />
        </div>
    </div>
  
  )
}
