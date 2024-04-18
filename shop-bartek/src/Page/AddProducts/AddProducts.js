import React, { useContext, useState } from 'react';
import Navbar from '../../components/Navbar/navbar';
import AppContext from '../../context/App.Context';

const AddProducts = () => {
    const Context = useContext(AppContext)
    const {products ,setProducts} = Context

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [promoPrice, setPromoPrice] = useState('');
    const [currency, setCurrency] = useState('');
    const [ingredients, setIngredients] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        setProducts([...products, {
            name: name,
            vege: false,
            price: price,
            promoPrice: promoPrice,
            currency: currency,
            ingredients: ingredients
        }])
    }

    return (
        <div className='addProducts'>
           <Navbar></Navbar> 

            <h2>Dodaj Produkt</h2>
            <form onSubmit={handleSubmit}>
                <div className='inputs'>
                    <input placeholder='Nazwa Produktu'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    ></input>
                    <input placeholder='Cena'
                        type='number'
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    ></input>
                    <input placeholder='Cena Promocyjna'
                        value={promoPrice}
                        onChange={(e) => setPromoPrice(e.target.value)}
                    ></input>
                    <input placeholder='Waluta'
                        value={currency}
                        onChange={(e) => setCurrency(e.target.value)}
                    ></input>
                    <input placeholder='Składniki'
                        value={ingredients}
                        onChange={(e) => setIngredients(e.target.value)}
                    ></input>
                    <button type='submit'>Dodaj Produkt</button>
                </div>
            </form>
        </div>
    );
}

export default AddProducts;
