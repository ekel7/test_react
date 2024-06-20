import React, { useState } from 'react'
import { createContext } from 'react'

// creamos contexto de react => CartContext
const CartContext = createContext()

const CartProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([])

    const agregarProducto = (nuevoProducto) => {
        const condicion = alreadyInCart(nuevoProducto.id)
        if (condicion) {
            //  si ya esta el producto, sumarlos
            // usamos map porque queremos retornar el array con los productos modificados (sumados)
            const productosModificados = carrito.map((productoCarrito) => {
                if (productoCarrito.id === nuevoProducto.id) {
                    return { ...productoCarrito, quantity: productoCarrito.quantity + nuevoProducto.quantity }
                }else{
                    return productoCarrito
                }
            })
            setCarrito(productosModificados)
        } else {
            setCarrito([...carrito, nuevoProducto])

        }
    }

    const totalQuantity = () => {
        const cantidadTotalProds = carrito.reduce((total, producto) => total + producto.quantity, 0)
        return cantidadTotalProds
    }

    const totalPrice = () => {
        const totalbuy = carrito.reduce ((total, productoCarrito) => total + ( productoCarrito.price * productoCarrito.quantity), 0)
        return totalbuy
    }

    const vaciarCarrito = () => { 
        setCarrito([])
    }

    // funcion detectar prods 
    const alreadyInCart = (idProducto) => {
        const condicion = carrito.some((productoCarrito) => productoCarrito.id === idProducto)
        return condicion
    }
    // funcion eliminar prod especifico
    const deleteProdById = (idProducto) => {
        const productosFiltrados = carrito.filter( (productoCarrito) => productoCarrito.id !== idProducto )
    setCarrito(productosFiltrados)
    }

    return (
        <CartContext.Provider value={{ carrito, agregarProducto, totalQuantity, vaciarCarrito, deleteProdById, totalPrice }}>
            {children}
        </CartContext.Provider>
    )
}

export { CartProvider, CartContext } 