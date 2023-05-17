import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ShowVolunteer from './ShowVolunteer';
import Banner from './Banner';

const Home = () => {
    const volunteerData = useLoaderData();
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
            <div className='grid grid-cols-3'>
                {
                    // volunteerData.map(volunteer=><ShowVolunteer key={volunteer._id} volunteer={volunteer}></ShowVolunteer>)
                }
            </div>

        </>
    );
};

export default Home;