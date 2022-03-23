import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    let total = 0;
    let shipping = 0;
    for (const product of cart)
    {
        total+= product.price;
        shipping+= product.shipping;
    }
    const tax = (total*0.1).toFixed(2);
    const grandtotal = total + shipping + parseFloat(tax);
    return (
        <div className='cart'>
                <h3>Order Summary </h3>
                <p>Selected item: {cart.length} </p>
                <p>Total Price: ${total}</p>
                <p>Total Shipping: ${shipping}</p>
                <p>Tax: ${tax}</p>
                <h4>Grand Total: ${grandtotal.toFixed(2)}</h4>
        </div>
    );
};

export default Cart;