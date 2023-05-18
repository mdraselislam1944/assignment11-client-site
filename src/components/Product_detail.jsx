import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Product_detail = () => {
    const product = useLoaderData();
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={product[0].img} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">{product[0].name}</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                <Link to='/'><button className="btn btn-primary">Back</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Product_detail;


// picture, toy name, seller name, seller email, price, rating, available quantity, and detail description