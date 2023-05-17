import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './AuthProviders';

const Login = () => {
    const { signIn,googleLogin,githubLogin } = useContext(AuthContext);
    const handleSingIn = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(result => {
                console.log(result);
                alert('login successfully');
                form.reset();
            })
            .catch(error => {
                alert(error.message);
        });
    }
    const handleGoogleSignIn=()=>{
        googleLogin() 
        .then(result=>{
            console.log(result);
            alert('login successfully');
        })
        .catch(error=>{
            console.log(error.message);
            alert(error.message);
        })
    }
    const handleGithubLogin=()=>{
        githubLogin()
        .then(result=>{
            console.log(result);
            alert('login successfully');
        })
        .catch(error=>{
            console.log(error.message);
            alert(error.message);
        })
    }
    return (
        <>
            <div className='flex items-center justify-around'>
                <div>
                    <h1 className='text-3xl'>Please Login with</h1>
                    <button onClick={handleGoogleSignIn} className="btn btn-outline btn-primary w-full my-3">Google Account</button>
                    <h1 className='text-3xl my-2'>Please Login with</h1>
                    <button onClick={handleGithubLogin} className="btn btn-outline btn-primary w-full my-3">Github</button>
                </div>
                <div className='text-center my-10'>
                    <h1 className='text-3xl'>Please Login with Email and password</h1>
                    <form className='my-5' onSubmit={handleSingIn}>
                        <input type="email" name="email" id="email" className="input input-bordered input-info w-full max-w-xs" placeholder="Enter your Register Email" required /><br />
                        <input type="password" name="password" id="password" placeholder="Enter your Register password" className=" my-2 input input-bordered input-info w-full max-w-xs" required /><br />
                        <input className=" btn  w-full max-w-xs" type="submit" value="login" />
                    </form>
                </div>
            </div>
            <div className='text-3xl text-center my-5'>
                <small className='mx-2'>Are you new user? Please</small>
                <Link to='/signUp'><button className="btn btn-outline btn-info ">Register</button></Link>
            </div>
        </>
    );
};

export default Login;