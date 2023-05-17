import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
const Headers = () => {
    return (
        <>
            <nav className="bg-white">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center py-4">
                        <div>
                            <img className='w-52 h-20 rounded' src={logo} alt="" />
                        </div>
                        <div>
                            <ul className="flex space-x-4 items-center">
                                {/* <li><Link to='/' className="text-gray-300 hover:text-white">Home</Link></li> */}
                                <li><button className='btn'><Link to='/'>Home</Link></button></li>
                                <li><button className='btn'><Link to='/'>All Toys</Link></button></li>
                                <li><button className='btn'><Link to='/blocks'>Blocks</Link></button></li>
                            </ul>
                        </div>
                        <div>
                            <ul className="flex space-x-4 items-center">
                                <li><button className='btn'><Link to='/'>My Toys</Link></button></li>
                                <li><button className='btn'><Link to='/'>User Profile</Link></button></li>
                                <li><button className='btn'><Link to='/'>Add Toys</Link></button></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Headers;