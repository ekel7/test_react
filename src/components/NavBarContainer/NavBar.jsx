import React from 'react'
import { CartWidget } from './CartWidget'
import logo from '../../assets/Screenshot (211).png'
import { Link } from 'react-router-dom'

import './navbar.css'

export const NavBar = () => {

  return (
    <div className='nav-bar'>
      <Link to="/" className='brand'>
        <img className='logo' src={logo} alt="BEAUTY SHOP" />
      </Link>

      <div className='category'>
        <Link to="/">INICIO</Link>
        <Link to="/category/SkinCare">SKIN CARE</Link>
        <Link to="/category/MakeUp">MAKE UP</Link>
      </div>

      <div className='carrito'>
        <CartWidget />
      </div>
    </div>
  );
}
