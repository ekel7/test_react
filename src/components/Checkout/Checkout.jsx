import React, { useState } from 'react'
import Formulario from "./Formulario.jsx";
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext.jsx';
import { addDoc, collection, doc, setDoc, Timestamp } from 'firebase/firestore';
import db from '../../db/db.js'
import validateForm from '../../utils/validationYup.js';
import { toast } from 'react-toastify';

import './checkout.css'


const Checkout = () => {
    const [datosForm, setDatosForm] = useState({
        nombre: "",
        telefono: "",
        email: "",
        emailVerif: "",
    })
    const [idOrden, setIdOrden] = useState(null)
    const { carrito, totalPrice, vaciarCarrito } = useContext(CartContext);

    const handleChangeInput = (event) => {
        // spret= para guardar el valor que ya se a puesto
        // name= va directo a cada input que tenemos nombrado
        // value= se refiere al valor que se escribe en el input
        setDatosForm({ ...datosForm, [event.target.name]: event.target.value });
    }

    const handleSubmitForm = async (event) => {
        event.preventDefault()
        // formato de datos a subir
        const orden = {
            comprador: { ...datosForm },
            productos: { ...carrito },
            Fecha: Timestamp.fromDate(new Date()),
            total: totalPrice()
        };
        try {
            //validamos el formulario antes de subir la orden
            const response = await validateForm(datosForm)
            if (response.status === "success") {
                generateOrder(orden); toast.success('Datos subidos exitosamente')
            } else {
                // console.log(response.message)
                toast.warning(response.message);
            }
        } catch (error) {
            console.log(error);
            toast.error('Error validando la orden');
        }

    };
    // subimos la orden a firebase
    const generateOrder = (orden) => {
        // creamos una variable de referencia a collection
        const ordersRef = collection(db, "orders")
        // le pasamos a addDoc, la collecion de la orden que vamos a subir y los datos de orden
        addDoc(ordersRef, orden)
            .then((respuesta) => setIdOrden(respuesta.id))
            .catch((error) => {
                console.log(error);
                toast.error('Error subiendo la orden');
            })
            .finally(() => {
                // actualizar el stock y vaciar el carrito
                updateStock()
                vaciarCarrito()
            });
    };

    const updateStock = () => {
        carrito.map((productoCarrito) => {
            // guardamos quantity para luego restarla en el stock
            let quantity = productoCarrito.quantity
            // borramos quantity
            delete productoCarrito.quantity
            //funcion doc de firebase, nos sirve para especificar los productos a modificar
            const productoRef = doc(db, "products", productoCarrito.id)
            setDoc(productoRef, { ...productoCarrito, stock: productoCarrito.stock - quantity })
                .then(() => console.log("Stock actualizado correctamente"))
                .catch((error) => {
                    console.log(error);
                    toast.error('Error actualizando stock');
                });
        });
    };


    return (
        <div className='checkout-container' >
            {
                idOrden ? (
                    <div className='succes'>
                        <h2>Su orden se a generado con Exito!!! </h2>
                        <p>Guarde el id de su orden:{idOrden}</p>
                    </div>
                ) : (
                    <div>
                        <h2>Formulario de orden de compra</h2>
                        <div className='form-container'>
                            <h3>Gracias por elegir nuestros productos!</h3>
                            <strong>Necesitamos que llenes unos datos para continuar</strong>
                            <Formulario
                                datosForm={datosForm}
                                handleChangeInput={handleChangeInput}
                                handleSubmitForm={handleSubmitForm} />
                        </div>
                    </div>
                )}
        </div>
    )
};

export default Checkout