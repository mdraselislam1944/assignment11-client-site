import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { AuthContext } from './AuthProviders';
const Headers = () => {
    const { user, logOut } = useContext(AuthContext);
    if(user){
        console.log(user.displayName);
        console.log(user.photoURL);
    }
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

    }
    return (
        <>
            <nav className="bg-white">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center py-4">
                        <div>
                            <img className='w-52 h-20 rounded' src={logo} alt="" />
                        </div>
                        <div className="flex space-x-4 items-center">
                            <Link to='/'><button className='btn'>Home</button></Link>
                            <Link to='/'><button className='btn'>All Toys</button></Link>
                        </div>
                        <div>
                            <ul className="flex space-x-4 items-center">
                                {
                                    user ? <>
                                        <li> <Link to='/'><button className='btn' onClick={handleLogout}>logOut</button></Link></li>
                                        <li><button className='btn'><Link to='/'>My Toys</Link></button></li>
                                        <li><Link to={user.displayName}><img className='h-16 w-16 rounded-full' src={user.photoURL} alt="" onMouseEnter={handleMouseEnter} /></Link></li>
                                        <li><button className='btn'><Link to='/'>Add Toys</Link></button></li>
                                    </> : <>
                                        <Link to='/login'> <button className='btn'>login</button></Link>
                                        <Link to='/blocks'> <button className='btn'>block</button></Link>
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