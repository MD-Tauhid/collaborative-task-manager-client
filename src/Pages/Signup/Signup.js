import React, { useContext } from 'react';
import loginImg from '../../assets/login.png';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import { addUserToDb } from '../../utilities/fakedb';

const Signup = () => {
    const { createUser } = useContext(AuthContext)


    const hangleSignup = event => {
        event.preventDefault();
        const form = event.target;

        const name = form.name.value;
        const bio = form.bio.value;
        const image = form.image.value;
        const email = form.email.value;
        const password = form.password.value;

        addUserToDb(name, email, bio, image);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(err => console.error(err));
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="hidden lg:block w-1/2">
                    <img className='mx-auto w-3/4' src={loginImg} alt="" />
                </div>
                <div className="card flex-shrink w-full max-w-md shadow-2xl bg-base-100">
                    <form onSubmit={hangleSignup} className="card-body">
                        <h1 className="text-5xl font-bold pt-1 text-center">Sign Up</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Bio</span>
                            </label>
                            <textarea name='bio' placeholder="Biography" className="input input-bordered max-h-20" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Prfile Photo</span>
                            </label>
                            <input type="file" name='image' placeholder="Image" className="input" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="Email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" name='password' placeholder="Password" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type='submit' value="Sign Up"></input>
                        </div>
                    </form>
                    <div>
                        <p className='text-center font-semibold pb-5'>Already a user? <Link className='text-orange-600 font-bold' to='/login'>Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;