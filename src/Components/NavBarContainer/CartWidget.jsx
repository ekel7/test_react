import React from 'react'
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

import './cartwidget.css'

export const CartWidget = () => {
  const {totalQuantity} = useContext(CartContext)

  let quantity = totalQuantity()

  return (
    <Link to="/cart" className='cart-widget'>
        <PiShoppingCartSimpleFill size= {35}/>
        <div> { quantity >=1 && quantity } </div>
    </Link>
  )
}
