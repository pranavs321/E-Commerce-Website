import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/'
import cart_icon from '../Assets/'

export const Navbar = () => {
  return (
    const [menu,setMenu]=useState("shop");
    <div className='navbar'>
  <div className="nav-logo">
    <img src={logo} alt="" />
    <p>SHOPPER</p>
  </div>
  <ul className="nav-menu">
    <li onClick={() => { setMenu("shop") }}>
      <Link style={{ textDecoration: 'none' }} to="shop">Shop</Link>
    </li>
    <li onClick={() => { setMenu("mens") }}>
      <Link style={{ textDecoration: 'none' }} to="mens">Mens</Link>
    </li>
    <li onClick={() => { setMenu("womens") }}>
      <Link to="womens">Women</Link>{menu === "womens" ? /* some condition */ null : null}
    </li>
    <li onClick={() => { setMenu("kids") }}>
      <Link to='/kids'>Kids</Link>{menu === "kids" ? /* some condition */ null : null}
    </li>
  </ul>
  <div className="nav-login-cart">
    <Link to='/login'>
      <button>Login</button>
    </Link>
    <Link to='/cart'>
      <img src={cart_icon} alt="" />
    </Link>
    <div className="nav-cart-count">0</div>
  </div>
</div>

  )
}
