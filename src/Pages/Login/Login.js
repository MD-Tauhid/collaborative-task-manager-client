import React from 'react';
import loginImg from '../../assets/login.png';
import { Link } from 'react-router-dom';

const Login = () => {

    // login in handler
    const hangleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="hidden lg:block w-1/2">
                    <img className='mx-auto w-3/4' src={loginImg} alt="" />
                </div>
                <div className="card flex-shrink w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={hangleLogin} className="card-body">
                        <h1 className="text-5xl font-bold pt-1 text-center">Login</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" name='password' placeholder="Password" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type='submit' value="Login"></input>
                        </div>
                    </form>
                    <div>
                        <p className='text-center font-semibold pb-5'>New here? <Link className='text-orange-600 font-bold' to='/signup'>Sign up</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;