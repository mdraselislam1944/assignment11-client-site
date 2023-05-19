import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
const AllToys = () => {
    const products = useLoaderData();
    return (
        <div className='my-5'>
            <h1 className='text-center text-3xl'>All Toys Products</h1>
            <div className='grid grid-cols-3 mx-16'>
                {
                    products.map(product => <div key={product._id} className='my-10'>
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={product?.img} alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h1>{product?.name}</h1>
                                <div className='flex gap-20'>
                                    <div>
                                        <p>price : {product?.price}</p>
                                    </div>
                                    <p>Rating : {product?.rating}</p>
                                </div>
                                <div className="card-actions">
                                <Link to={`/all_toys/${product._id}`}> <button className="btn btn-block btn-primary">View Details</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default AllToys;