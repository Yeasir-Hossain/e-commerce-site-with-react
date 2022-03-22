import React from 'react';
import './Product.css'

const Product = (props) => {
    const {name,seller,img,price,ratings} = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
        </div>
    );
};

export default Product;