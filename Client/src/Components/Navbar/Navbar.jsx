import React, {  useState,useContext } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'; 
import logo from '../Assests/logo.png'
import cart_icon from '../Assests/cart_icon.png'
import { ShopContext } from '../../Context/Context';





export const Navbar = () => {

  const {getTotalCartItems} = useContext(ShopContext)

  const {all_product,cartItems,removeFromCart} = useContext(ShopContext)

    const[menu,setMenu] = useState("Shop")

  return (
    <div className='navbar'>
      
    <div className="nav-logo">
        <img src={logo} alt="" />
        <p>Shopper</p>
    </div>

    <ul className='nav-menu'>
        <li onClick={()=>{setMenu("shop")}}><Link style ={{textDecoration: 'None'}} to='/shop '> Shop</Link> {menu==="shop"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("mens")}}><Link style ={{textDecoration: 'None'}} to='/mens'>  Men</Link>{menu==="mens"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("womens")}}><Link style ={{textDecoration: 'None'}} to='/womens'> Women</Link> {menu==="womens"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("kids")}}><Link style ={{textDecoration: 'None'}} to='/kids'> Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
    </ul>

    <div className="nav-login-cart">
      {localStorage.getItem('auth-token')?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace("/shop")}}>Logout</button>:
       <Link to= '/login'> <button >login</button> </Link>}       
        <Link to = '/cart'> <img src={cart_icon} alt="" /> </Link>
        
        <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>

    </div>
  )
}
