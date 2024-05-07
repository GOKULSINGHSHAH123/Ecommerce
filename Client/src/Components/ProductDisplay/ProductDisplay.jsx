import React, { useContext } from 'react'
import './ProductDisplay.css'
import star from '../Assests/star_icon.png'
import dull_star from '../Assests/star_dull_icon.png'
import { ShopContext } from '../../Context/Context'

export const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext)
  return (
    <div className='product'>
    <div className='product-display'>     
    <div className='sample-images'> 

    <ul className='no-bullet'>
        <li><img src={product.image} alt="" /></li>
        <li><img src={product.image} alt="" /></li>
        <li><img src={product.image} alt="" /></li>
        <li><img src={product.image} alt="" /></li></ul>
        </div>

        <div className='main-image'>
            <img src={product.image} alt="" />
        </div>

        <div className='properties'>
            <p> {product.name}</p>

            <div className='star'>
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={dull_star} alt="" />
            </div>

            <div className='price'>
            <p id='old-price'> {product.old_price}</p>
            <p id='new-price'> ${product.new_price}</p>

            </div>

            <p id='description'>A light weight usually knitted , pullover shirt, close-fitting, and with a  round neckline
                and short sleeves, worn as an undershirt or outer   garment.
            </p>
            <p id='size'>
                Select Size
            </p>

            <div className='select-size'>
            <div className="p-border">
                <p>S</p>
                </div>
            <div className="p-border">
                <p>M</p>
                </div>
            <div className="p-border">
                <p>L</p>
                </div>
            <div className="p-border">
                <p>XL</p>
                </div>  
            <div className="p-border">
                <p>XXL</p>
                </div> 
    
            </div>
            <button onClick={()=>{addToCart(product.id)}}>Add to Cart</button>

            <div className='category'>
            <p><span>Category :</span> {  product.category}</p>
            <p id='tag'><span>Tags :</span> Modern, Latest</p>
            </div>
            
        </div>
       
     </div>

     <div className='despription'>
        <p > <span>Description</span>
        <span>Reviews</span></p>
      
     </div>
     <div className='description-style'>
      <p>An ecommerce website is an online platform where businesses showcase and sell their products or services to customers over the internet. These websites typically provide users with a catalog of items to browse through, along with detailed descriptions, images, and prices for each product. Customers can add items to their virtual shopping cart, proceed to checkout, and make secure payments using various methods such as credit cards, PayPal, or other digital payment systems.

        </p>
     </div>
     </div>


       )
}
