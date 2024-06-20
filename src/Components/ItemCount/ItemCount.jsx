import React, { useState } from 'react'

import './itemCount.css';

const ItemCount = ({ stock, addProduct }) => {
    const [count, setCount] = useState(1)

    const handleClickDecrement = () => {
        if (count >= 1) {
            setCount(count - 1);
        }
    };

    const handleClickIncrement = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    };

    const handleClickAddToCart = () => {
        addProduct(count)
    };
    
    return (
        <div className='item-count'>
            <div className='buttons-count'>
                <button className='counts' onClick={handleClickDecrement}>-</button>
                <div>{count}</div>
                <button className='counts' onClick={handleClickIncrement}>+</button>
            </div>
            <button onClick={handleClickAddToCart}>Agregar al carrito</button>
        </div>

        

    )
}

export default ItemCount