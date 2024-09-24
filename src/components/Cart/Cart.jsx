import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

import './cart.css'

const Cart = () => {
  const { carrito, vaciarCarrito, deleteProdById, totalPrice } = useContext(CartContext)

  // early return
  if (carrito.length === 0) {
    return (
      <div className='cart-vacio' >
        <h1>Tu carrito esta vacio!!! </h1>
        <Link to="/" className='ver-prods'>Ver Productos</Link>
      </div>
    )
  }

  return (
    <div className='cart-Container'>
      <h2 className='title-cart'>CARRITO DE COMPRAS</h2>
      {
        carrito.map((productoCarrito) => (
          <div key={productoCarrito.id} className='cart-item'>
            <img src={productoCarrito.image} className='cart-Img' />
            <h3>{productoCarrito.name} </h3>
            <p>precio unitario: ${productoCarrito.price} </p>
            <p>cantidad: {productoCarrito.quantity} </p>
            <p>subtotal: ${productoCarrito.price * productoCarrito.quantity} </p>
            <button onClick={() => deleteProdById(productoCarrito.id)}>Borrar</button>
          </div>
        ))
      }
      <div className='total-compra'>
        <strong>Total de la compra: ${totalPrice()}</strong>
        <Link to="/Checkout"><button>Finalizar Compra</button></Link>
      </div>
      <button className='butt-vaciar' onClick={vaciarCarrito}>Vaciar Carrito</button>
    </div>
  )
}

export default Cart