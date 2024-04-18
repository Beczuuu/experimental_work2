import './App.css';
import React from 'react';
import AddProducts from './Page/AddProducts/AddProducts';
import Products from './Page/Products'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppContext from './context/App.Context';
import { useState,useRef } from 'react';



function App() {
  const{Provider} = AppContext;
  const[cart, setCart] = useState([])
    
    const[products, setProducts] = useState([{
        name: 'Pizza Margherita',
        vege: false,
        price: 24,
        promoPrice: 22,
        currency: 'PLN',
        ingredients: 'ciasto, ser'
      },
      {
        name: 'Spaghetti Bolognese',
        vege: false,
        price: 18,
        promoPrice: 16,
        currency: 'PLN',
        ingredients: 'makaron, mięso mielone, sos pomidorowy'
      },
      {
        name: 'Sałatka Cezar',
        vege: true,
        price: 15,
        promoPrice: 13,
        currency: 'PLN',
        ingredients: 'sałata, kurczak, parmezan, sos czosnkowy'
      },
      {
        name: 'Kawa Espresso',
        vege: true,
        price: 8,
        promoPrice: null,
        currency: 'PLN',
        ingredients: 'kawa'
      },
      {
        name: 'Kawa Espresso',
        vege: true,
        price: 8,
        promoPrice: null,
        currency: 'PLN',
        ingredients: 'kawa'
      },
      {
        name: 'Koktajl Owocowy',
        vege: true,
        price: 12,
        promoPrice: null,
        currency: 'PLN',
        ingredients: 'jabłko, banan, truskawki, jogurt'
      }])
  return (

    <Provider value={{products ,setProducts, cart,setCart}}>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/addproducts" element={<AddProducts />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </BrowserRouter>
    
    </Provider>
  );
}

export default App;
