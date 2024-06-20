import React from 'react'
import ItemCount from '../ItemCount/ItemCount';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

import './itemDetail.css';


const ItemDetail = ({ product }) => {

  const { agregarProducto } = useContext(CartContext)

  const addProduct =  (count) => {
    const productCart = {...product, quantity: count }
// añadimos la funcion de context para agregar
    agregarProducto(productCart)
  };

  return (
    <div className='Detail-container'>
      <div>
         <img className='img-prod' src={product.image} />
      </div>
      <div className='details'>
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <p>TIPO DE PIEL: {product.typeSkin}</p>
        <p>Precio: $ {product.price}</p>
        <div className='butts'>
        <ItemCount stock={product.stock} addProduct={addProduct} />
        <Link to="/cart"><button className='goCart'>Ir al carrito</button></Link>
        </div>
      </div>
    </div>
  )
};

export default ItemDetail