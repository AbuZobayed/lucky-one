import React, { useEffect, useState } from 'react';
import Softwore from '../Softwore/Softwore';

const Products = () => {
    
    const [products , setProducts] = useState([])

    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[]) 

    return (
        <div className='soft-container'>
            <div className='products-container'>
                {
                    products.map(product => <Softwore 
                        
                        key={product.id}
                        product={product}
                    ></Softwore> )
                }

                <div className='cart-container'>
                    <h4>Orders Summery</h4>
                </div>
            </div>
        </div>
    );
};

export default Products;