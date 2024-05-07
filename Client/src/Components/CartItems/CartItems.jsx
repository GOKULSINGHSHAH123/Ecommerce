import React, { useContext } from 'react'
import './CartItem.css'
import { ShopContext } from '../../Context/Context'
import remove_icon from '../Assests/cart_cross_icon.png'
export const CartItems = () => {
  

    const {getTotalAmountCart,all_product,cartItems,removeFromCart} = useContext(ShopContext)
  return (

    <div className='cartItems-container'>
       <div className='cartItems'>
        <div className="cart-Items-format-main">
            <p>product</p>
            <p>Title</p>
            <p>price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>

            </div>
        <hr />
       {all_product.map((e)=>{
        if(cartItems[e.id]>0){
            return  <div>

        
            <div className="cartitems-format cart-Items-format-main ">
                <img src={e.image} alt="" />
                <p id='title'>{e.name}</p>
                <p id='total'>${e.new_price}</p>
                <button className="cartItems-quantity">{cartItems[e.id]}</button>
                <p>${e.new_price*cartItems[e.id]}</p>
                <img src={remove_icon} onClick={() =>removeFromCart(e.id)} alt=""  id='remove'/>
                
            </div>
            
            <hr />
            </div>
        }
        return null;
       })}
    </div> 
       <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>cart totals</h1>
        
        <div className="cartitems-total-item">
          <p>Subtotal</p>
          <p>${getTotalAmountCart()}</p>
        </div>
        <hr />

        <div className='cartitems-total-item'>
          <p>Shippinf fee</p>
          <p>Free</p>
          
        </div>
        <hr />

       

        <div className='cartitems-total-item'>
          <h3>total</h3>
          <h3>${getTotalAmountCart()}</h3>
          </div>
        

       
       <button className='proceed-button'>Proceed to checkout</button>
    </div>
    
    

    <div className="cartItems-promocode">
      <p>If you have a promo code enter here</p>
      <div className="cartitems-promobox">
             <input type="text" placeholder='promo code' />
      <button>Submit</button>
      </div>

    </div>
    </div>
 

    </div>
    
   
   
  )
}
