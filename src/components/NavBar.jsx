import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import cart_icon from './assets/images/cart_icon.png'
import './css/NavBar.css'
import { ShopContext } from '../context/ShopContext'

function NavBar() {
  const {getTotalCartItems} = useContext(ShopContext)
  return <>
  <div className='nav'>
    <Link to = '/'><div>Product</div></Link>
    {/* <Link to = '/cart'><li>Cart</li></Link> */}
    <div className='cart-icon'>
    <img  src={cart_icon} alt="" />
    <div className='nav-cart-count'>{getTotalCartItems()}</div>
    </div>
  </div>
  </>
}

export default NavBar