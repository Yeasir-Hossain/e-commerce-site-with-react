import React, { useEffect, useState } from 'react';
import Product from '../../Product/Product';
import { addToDb, getshoppingcart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import './Shop.css'

const Shop = () => {
    const [products,setProducts] = useState([])
    const [cart, setCart] = useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res=> res.json())
        .then(data=>setProducts(data))
    }, [])

    useEffect(()=>{
        const storedCart = getshoppingcart();
        const savedCart = []
        for(const id in storedCart)
        {
           const addedproduct = products.find(product=> product.id === id); 
           if(addedproduct){
               const quantity = storedCart[id];
               addedproduct.quantity =quantity;
               savedCart.push(addedproduct)
           }
        }
        setCart(savedCart);
    },[products])
    

    const handleAddtoCart = (selectedProduct) => {
        let newCart = []
        const exist = cart.find(product=> product.id === selectedProduct)
        if(!exist){
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }
        else{
            const rest = cart.filter(product=> product.id !== selectedProduct.id)
            exist.quantity += 1;
            newCart = [...rest,exist] 
        }
    
        setCart(newCart);
        addToDb(selectedProduct.id)
    }
    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product=><Product 
                        key={product.id}
                        product={product}
                        handleAddtoCart = {handleAddtoCart}
                    >
                    </Product>
                    )
                }

            </div>
            <div className="cart-container">
                <Cart cart ={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;