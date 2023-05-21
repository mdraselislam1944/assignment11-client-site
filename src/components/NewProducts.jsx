import React, { useEffect, useState } from 'react';

const NewProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://assignment-11-server-tau-amber.vercel.app/newProduct')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    return (
        <div className='text-center my-10 mx-10'> 
        <h1 className='text-4xl'>New Products</h1>
        <p className='text-2xl my-5'>Product discount promotions are set on individual products and trigger when a shopper adds that product to their cart. There are currently four types of product discount promotions</p>
        <div className='grid grid-cols-1 lg:grid-cols-3 lg:mx-16'>
            {
                products.map(product => <div key={product._id} className='my-10' data-aos="zoom-in">
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={product.image} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{product.name}</h2>
                            <p>Price: ${product.price}</p>
                            <p className='my-5'>{product.description}</p>
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

export default NewProducts;