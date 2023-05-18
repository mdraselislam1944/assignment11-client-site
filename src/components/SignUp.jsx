import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthProviders';
const SignUp = () => {
    const { createUser, updateProfileDetail } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleSingUp = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photoUrls = form.photo.value;
        createUser(email, password)
            .then(result => {
                console.log(result);
                form.reset();
                updateProfileDetail(name, photoUrls)
                    .then(result => {
                    }).catch((error) => {
                        console.log(error.message);
                    });
                navigate('/login');
            })
            .catch(error => {
                alert(error.message);
                console.log(error.message);
            })

    }
    return (
        <div className='text-center my-10'>
            <h1 className='text-3xl'>Please Register</h1>
            <form className='my-5' onSubmit={handleSingUp}>
                <input type="text" name="name" id="name" className="my-2 input input-bordered input-info w-full max-w-xs" placeholder="Enter your name" required /><br />
                <input type="email" name="email" id="email" className="input input-bordered input-info w-full max-w-xs" placeholder="Enter your Email" required /><br />
                <input type="password" name="password" id="password" placeholder="Enter Password" className=" my-2 input input-bordered input-info w-full max-w-xs" required /><br />
                <input type="text" name="photo" id="photo" placeholder="Enter your photo link" className=" my-2 input input-bordered input-info w-full max-w-xs" required /><br />
                <input className=" btn  w-full max-w-xs" type="submit" value="Register" />
            </form>
            <div className='text-3xl'>
                <small className='mx-2'>ALready Register? Please</small>
                <Link to='/login'><button className="btn btn-outline btn-info ">Login</button></Link>
            </div>
        </div>
    );
};

export default SignUp;