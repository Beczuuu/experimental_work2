import React, { useContext } from 'react';
import AppContext from '../../context/App.Context';
import { Link } from 'react-router-dom';


const Navbar = () => {
  const Context = useContext(AppContext)
  const {cart} = Context;

    const calculateTotalPrice = () =>{
        let totalPrice = 0;
        cart.forEach((product) => {
          totalPrice = totalPrice + Number(product.promoPrice || product.price);
        });
        return totalPrice;
      }

      
    return (
        <div>
            <header>
            <Link className="logo" to="/"><h2>Logo</h2></Link>
            <nav>
                <ul class="nav__links">
                    <li><Link to="/addproducts">Add Products</Link></li>
                    <li><Link to="/products">Products</Link></li>
                    <li><Link to="#">Your Products</Link>
                        <ul className='dropdown'>
                          <li><Link to="#">Add Products</Link></li>
                                          {cart.map((product,index) => (
                                    <div key={index}><li><Link to='#'>{product.name} - {product.promoPrice || product.price} zł </Link></li>
                                    </div>
                                  ))}
                                    <li><Link to='#'>Price for all products : {calculateTotalPrice()} PLN </Link></li>
                                        </ul>
                                    
                                    </li>
                                </ul>
                            </nav>
                            
                        </header>
        </div>
    );
}

export default Navbar;
