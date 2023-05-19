import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const AllToysDetails = () => {
    const product = useLoaderData();
    console.log(product)
    return (
        <div>
            <h1 className='text-center my-10 text-2xl'>AllToysDetails</h1>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={product[0].img} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <div className='flex justify-between items-center my-5'>
                        </div>
                        <h1 className="text-5xl font-bold">Product Name: {product[0].name}</h1>
                        <p className="py-6">product Description : {product[0].description}</p>
                        <p className='my-5'>UserName : {product[0].userName}</p>
                        <p className='my-5'>UserEmail : {product[0].userEmail}</p>
                        <div className='flex items-center justify-around m-10'>
                            <div>
                                <h1>price: {product[0].price}</h1>
                            </div>
                            <div>
                                <h1>Ratings: {product[0].rating}</h1>
                            </div>
                        </div>
                       <div className='text-center'> <Link to='/'><button className="btn btn-primary">Back</button></Link></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllToysDetails;