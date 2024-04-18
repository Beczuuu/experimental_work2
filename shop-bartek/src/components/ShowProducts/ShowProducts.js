import React from 'react';
import AppContext from '../../context/App.Context';

const ShowProducts = () => {
    const Context = React.useContext(AppContext)
    const {products,setCart,cart} = Context

    const addToCart = (product) =>{
        setCart([...cart, product])
      }
    return (
        <div className='showProducts'>
             {products.map((product, index) => (
            <div key={index} className='dataProducts'>
               <ul>
                <li>{product.name} - {product.promoPrice || product.price} zł ,{product.currency} , {product.ingredients}</li>
               </ul>
              <button onClick={() => addToCart(product)}>Dodaj do koszyka</button>
            </div>
          ))}
        </div>
    );
};

export default ShowProducts;