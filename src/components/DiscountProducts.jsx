import React, { useEffect, useState } from 'react';

const DiscountProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://assignment-11-server-tau-amber.vercel.app/discount')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    return (
        <div className='text-center my-10 mx-10'>
            <h1 className='text-4xl'>Discount Products</h1>
            <p className='text-2xl my-5'>Product discount promotions are set on individual products and trigger when a shopper adds that product to their cart. There are currently four types of product discount promotions</p>
            <div className='grid grid-cols-1 lg:grid-cols-3 lg:mx-16'>
                {
                    products.map(product => <div key={product._id} className='my-10'>
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={product.image} alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{product.name}</h2>
                                <p>Price: ${product.price}</p>
                                <div className='flex items-center'>
                                    <p>Discount: {product.discountPercentage}%</p>
                                    <p>New Price: $ {product.price-product.discountedPrice}</p>
                                </div>
                                <div className="card-actions">
                                    <button className="btn btn-primary">Order Now</button>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default DiscountProducts;