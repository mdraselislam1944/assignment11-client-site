import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { AuthContext } from './AuthProviders';
const Headers = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogout = () => {
        logOut()
            .then(result => {
                alert('logOut Successfully');
            })
            .catch(error => {
                alert(error.message)
            })
    }
    const handleMouseEnter=()=>{
        alert(user.displayName);
    }
    return (
        <>
            <nav className="bg-white">
                <div className="container mx-auto px-4">
                    <div className="lg:flex justify-between items-center py-4">
                        <div>
                            <img className='w-52 h-20 rounded' src={logo} alt="" />
                        </div>
                        <div className="lg:flex space-x-4 lg:items-center text-start">
                            <Link to='/'><button className='btn mx-5'>Home</button></Link><br />
                            <Link to='/all_toys'><button className='btn my-5'>All Toys</button></Link><br />
                            <Link to='/blocks'> <button className='btn'>block</button></Link><br />
                        </div>
                        <div>
                            <ul className="lg:flex space-x-4 items-center">
                                {
                                    user ? <>
                                        <li> <Link to='/'><button className='btn mx-5 my-5' onClick={handleLogout}>logOut</button></Link></li>
                                        <li><button className='btn'><Link to='/my_toys'>My Toys</Link></button></li>
                                        <li onMouseEnter={handleMouseEnter} >{user.photoURL && <img className='h-16 w-16 rounded-full my-5' src={user.photoURL} alt="" />}</li>
                                        <li><button className='btn'><Link to='/add_a_toys'>Add a Toy</Link></button></li>
                                    </> : <>
                                        <Link to='/login'> <button className='btn'>login</button></Link>
                                    </>
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Headers;