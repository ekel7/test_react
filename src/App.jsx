import { NavBar } from './Components/NavBarContainer/NavBar'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import Cart from './Components/Cart/Cart'
import Checkout from './Components/Checkout/Checkout'
import { ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css';
import './App.css'


function App() {

  return (
    <div>
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <ToastContainer theme='light' position="bottom-right"/>
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:idCategory" element={<ItemListContainer />} />
            <Route path="/detail/:idProduct" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/Checkout" element={<Checkout />} />

          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
};

export default App
