import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';

const Login = () => {

    const location = useLocation();
    console.log(location);
    const from = location.state?.from?.pathname || '/';

    const {userSignIn, signInWithGoogle} = useContext(AuthContext);

    const navigate = useNavigate();

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        userSignIn(email, password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser);
            form.reset();
            navigate(from, {replace:true})
        })
        .catch(error=>{
            console.log(error);
        })

    }

    const handleGoogleSignIn = ()=>{
        signInWithGoogle()
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser);
        })
        .catch(error =>{
            console.log(error);
        })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="font-bold text-xl md:text-3xl">Login now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <Link to='/register' className='link link-hover mx-auto mb-5'>New to RannaGhor?
                    </Link>

                </div>
                <button onClick={handleGoogleSignIn} className="btn btn-info w-full max-w-md">Continue with google</button>

            </div>
        </div>
    );
};

export default Login;