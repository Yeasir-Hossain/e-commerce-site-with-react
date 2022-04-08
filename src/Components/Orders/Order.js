import React from 'react';
import useCart from '../../Hooks/useCart';
import useProducts from '../../Hooks/useProducts';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Reviewitem from '../Reviewitem/Reviewitem';
import './Order'

const Order = () => {
    const [products] = useProducts()
    const [cart, setCart] = useCart(products);
    const handleRemoveproduct = product => {
        const rest = cart.filter(pd=> pd.id !==product.id);
        setCart(rest)
        removeFromDb(product.id)
    }
    return (
        <div className='shop-container'>
            <div className="review-items-container">
                {
                    cart.map(product => <Reviewitem
                        key={product.id}
                        product={product}
                        handleRemoveproduct={handleRemoveproduct}
                    >
                    </Reviewitem>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                </Cart>
            </div>
        </div>
    );
};

export default Order;