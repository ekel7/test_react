import React from 'react'
import { Link } from 'react-router-dom';

import './item.css'

const Item = ({ product }) => {
  return (
    <div className='Card-prod'>
      <img className='img-prods' src={product.image} />
      <p>{product.name}</p>
      <Link className='detalle' to={"/detail/" + product.id}>Detalles</Link>
    </div>
  );
};

export default Item