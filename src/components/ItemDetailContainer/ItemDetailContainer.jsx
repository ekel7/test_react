import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import { getDoc, doc } from 'firebase/firestore';
import db from '../../db/db';


const ItemDetailContainer = () => { 
    const [product, setproduct] = useState({})
    const { idProduct } = useParams()

    const getProducts = () => {
        const productRef = doc(db, "products", idProduct)
        console.log(productRef)
        getDoc(productRef)
            .then((productDb) => {
                const data = { id: productDb.id, ...productDb.data() }
                setproduct(data)
            });
    };

    useEffect(() => {
        getProducts()
    }, [idProduct]);

    return (
        <div className='item-detail' >
            <ItemDetail product={product} />
        </div>
    );
};

export default ItemDetailContainer