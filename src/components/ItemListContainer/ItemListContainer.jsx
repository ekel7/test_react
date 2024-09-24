import React, { useEffect, useState } from 'react';
import ItemList from './ItemList.jsx';
import { useParams } from 'react-router-dom';
import banner from '../../assets/banner3.jpeg';
import { collection, getDocs, query, where } from 'firebase/firestore';
import db from '../../db/db.js';
import { toast } from 'react-toastify';


import './ItemListContainer.css'

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true)
  const { idCategory } = useParams()

  const getProducts = () => {
    const productsRef = collection(db, "products")
    getDocs(productsRef)
      .then((productsDb) => {
        const data = productsDb.docs.map((product) => {
          return { id: product.id, ...product.data() };
        });
        setProducts(data);
        // detenerlo cuando se obtienen los productos
        setLoading(false);
      })
      .catch((error) => {
        console.log("error obteniendo productos:", error);
        toast.error('error obteniendo productos:');
        // en caso de error, tambien detenemos la carga
        setLoading(false);
      });

  };

  const getProductsByCategory = () => {
    const productsRef = collection(db, "products");
    const q = query(productsRef, where("category", "==", idCategory));
    console.log(q);
    getDocs(q)

      .then((productsDb) => {

        const data = productsDb.docs.map((product) => {
          return { id: product.id, ...product.data() };
        });
        setProducts(data);
        // detenerlo cuando se obtienen los productos
        setLoading(false);
      })
      .catch((error) => {
        toast.error("error obteniendo productos:", error);
        console.log("error obteniendo productos:", error);
        // en caso de error, tambien detenemos la carga
        setLoading(false);
      });

  }

  useEffect(() => {
    // iniciar la carga al montar el componente
    setLoading(true);

    if (idCategory) {
      getProductsByCategory();
    } else {
      getProducts();
    }
  }, [idCategory]);


  return (
    <div className='container' >
      <img src={banner} alt="bannerHojas"  className='banner' />
      <h1 className='landing'> {idCategory ? `${idCategory}` : "Bienvenidos a Beauty Shop"} </h1>
      {
        loading ? <div className='loading'></div> : <ItemList className='itemlist' products={products} />
      }
    </div>
  );
}

export default ItemListContainer


