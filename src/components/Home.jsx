import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ShowVolunteer from './ShowVolunteer';
import Banner from './Banner';
import DiscountProducts from './DiscountProducts';
import NewProducts from './NewProducts';

const Home = () => {
    const [volunteerData, setVolunteerData] = useState([]);
    useEffect(() => {
        fetch('https://assignment-11-server-tau-amber.vercel.app/volunteers')
            .then(res => res.json())
            .then(data => setVolunteerData(data));
    }, []);

    const products = useLoaderData();
    const [filterProducts, setFilterProducts] = useState(products.filter(product => product.identity == 'house'));
    const [toggle, setToggle] = useState('house');
    const tabToggle = (id) => {
        setToggle(id);
        const filteredProducts = products.filter(product => product.identity == id);
        setFilterProducts(filteredProducts);
    }
    return (
        <>
            <Banner></Banner>
            <div className='text-center my-10'>
                <h1 className='font-bold text-4xl'>I grow by helping people in need.</h1>
                <form className='my-8 mx-auto'>
                    <input type="text" placeholder="Search" className="input input-bordered input-primary w-full max-w-xs" />
                    <button className='btn'>Search</button>
                </form>
            </div>
            <div className='lg:ms-24 ms-16'>
                <div className='grid grid-cols-1 lg:grid-cols-3'>
                    {
                        volunteerData.map(volunteer => <ShowVolunteer key={volunteer._id} volunteer={volunteer}></ShowVolunteer>)
                    }
                </div>
                <div>
                    <div className="tabs tabs-boxed my-5">
                        {/* <a className="tab">Tab 1</a>
                        <a className="tab tab-active">Tab 2</a>
                        <a className="tab">Tab 3</a> */}
                        <button className='btn btn-secondary' onClick={() => tabToggle('doll')}>Dolls</button>
                        <button className='btn btn-secondary mx-5' onClick={() => tabToggle('cars')}>Car</button>
                        <button className='btn btn-secondary' onClick={() => tabToggle('house')}>House</button>
                    </div>
                    <div className={toggle == 'doll' ? 'text-center' : 'hidden '}>
                        <h1>Doll</h1>
                        <div className='grid grid-cols-1 lg:grid-cols-3  lg:mx-16'>
                            {
                                filterProducts.map(filterProduct => <div key={filterProduct._id} className='my-10'>
                                    <div className="card lg:w-96 bg-base-100 shadow-xl">
                                        <figure className="px-10 pt-10">
                                            <img src={filterProduct?.picture} alt="Shoes" className="rounded-xl" />
                                        </figure>
                                        <div className="card-body items-center text-center">
                                            <h1>{filterProduct?.name}</h1>
                                            <div className='flex gap-20'>
                                                <div>
                                                    <p>price : {filterProduct?.price}</p>
                                                </div>
                                                <p>Rating : {filterProduct?.rating}</p>
                                            </div>
                                            <div className="card-actions">
                                                <button className="btn btn-primary">View Details</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>)
                            }
                        </div>
                    </div>
                    <div className={toggle == 'cars' ? 'text-center' : 'hidden '}>
                        <h1>Cars</h1>
                        <div className='grid grid-cols-1 lg:grid-cols-3 mx-16'>
                            {
                                filterProducts.map(filterProduct => <div key={filterProduct._id} className='my-10'>
                                    <div className="card lg:w-96 bg-base-100 shadow-xl">
                                        <figure className="px-10 pt-10">
                                            <img src={filterProduct?.picture} alt="Shoes" className="rounded-xl" />
                                        </figure>
                                        <div className="card-body items-center text-center">
                                        <h1>{filterProduct?.name}</h1>
                                            <div className='flex gap-20'>
                                                <div>
                                                    <p>price : {filterProduct?.price}</p>
                                                </div>
                                                <p>Rating : {filterProduct?.rating}</p>
                                            </div>
                                            <div className="card-actions">
                                                <button className="btn btn-primary">View Details</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>)
                            }
                        </div>
                    </div>
                    <div className={toggle == 'house' ? 'text-center' : 'hidden '}>
                        <h1>House</h1>
                        <div className='grid grid-cols-1 lg:grid-cols-3 mx-16'>
                            {
                                filterProducts.map(filterProduct => <div key={filterProduct._id} className='my-10'>
                                    <div className="card lg:w-96 bg-base-100 shadow-xl">
                                        <figure className="px-10 pt-10">
                                            <img src={filterProduct?.picture} alt="Shoes" className="rounded-xl" />
                                        </figure>
                                        <div className="card-body items-center text-center">
                                        <h1>{filterProduct?.name}</h1>
                                            <div className='flex gap-20'>
                                                <div>
                                                    <p>price : {filterProduct?.price}</p>
                                                </div>
                                                <p>Rating : {filterProduct?.rating}</p>
                                            </div>
                                            <div className="card-actions">
                                                <button className="btn btn-primary">View Details</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>)
                            }
                        </div>
                    </div>
                </div>
            </div>
            <DiscountProducts></DiscountProducts>
            <NewProducts></NewProducts>
        </>
    );
};

export default Home;